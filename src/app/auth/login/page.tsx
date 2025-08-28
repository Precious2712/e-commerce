"use client";

import type React from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Login() {
  const route = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  })

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const storedData = localStorage.getItem("user-form-data")
    const user = storedData ? JSON.parse(storedData) : null

    const newErrors = { email: "", password: "" }
    let hasError = false

    if (!formData.email) {
      newErrors.email = "Email is required"
      hasError = true
    }
    if (!formData.password) {
      newErrors.password = "Password is required"
      hasError = true
    }

    setErrors(newErrors)

    if (hasError) return

    if (!user) {
      toast.error("No account found. Please sign up first.")
      return
    }

    if (user.email !== formData.email || user.password !== formData.password) {
      toast.error("Invalid email or password")
      return
    }

    toast.success("Login successful!");
    route.push('/');
    console.log("Logged in:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
    setErrors({ ...errors, [name]: "" })
  }

  return (
    <div className="min-h-screen flex justify-center items-center bg-white p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back</h1>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <form className="flex flex-col gap-6" onSubmit={onSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <Input
                id="email"
                name="email"
                className="focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-base"
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                  <span className="text-red-500">•</span>
                  {errors.email}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <Input
                id="password"
                name="password"
                className="focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-base"
                type="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                  <span className="text-red-500">•</span>
                  {errors.password}
                </p>
              )}
            </div>

            <Button
              type="submit"
              className="bg-blue-500 hover:bg-blue-800 text-white font-medium py-3 rounded-lg transition-colors duration-200 mt-2 cursor-pointer"
            >
              Log in
            </Button>

            <Link href='/auth'>
              <div className="flex items-center justify-center gap-2 mt-4 text-gray-600 hover:text-amber-600 transition-colors cursor-pointer">
                <ArrowLeft className="w-4 h-4" />
                <p className="text-sm">
                  Don&apos;t have an account? <span className="underline font-medium">Sign up</span>
                </p>
              </div>
            </Link>
          </form>
        </div>
      </div>
    </div>
  )
}