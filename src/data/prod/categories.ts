import { type LucideIcon } from 'lucide-react'
import { Shirt, User, Users, Baby, Smartphone, Laptop, ShoppingBag, ShoppingCart, Refrigerator, Home } from 'lucide-react'

interface MenuItem {
  name: string
  icon: LucideIcon
  path: string
}

interface MenuCategory {
  title: string
  icon: LucideIcon
  items: MenuItem[]
}

export const dropDown: MenuCategory[] = [
  {
    title: "Fashion",
    icon: Shirt,
    items: [
      { name: "Men's Clothing", icon: User, path: '/men-collection' },
      { name: "Women's Clothing", icon: Users, path: '/women-collection' },
      { name: "Baby Boy Wear", icon: Baby, path: '/baby-girl-cloths' },
      { name: "Baby Girl Wear", icon: Baby, path: '/baby-boy-cloths' },
    ],
  },
  {
    title: "Gadgets",
    icon: Smartphone,
    items: [
      { name: "Smartphones", icon: Smartphone, path: 'phones' },
      { name: "Laptops", icon: Laptop, path: '/laptops' },
      { name: "Accessories", icon: ShoppingBag, path:'/Accessories' },
    ],
  },
  {
    title: "Grocery",
    icon: ShoppingCart,
    items: [
      { name: "Fresh Produce", icon: ShoppingCart, path: '/Fresh-Produce' },
      { name: "Dairy Products", icon: ShoppingCart, path: '/Dairy-Products' },
      { name: "Beverages", icon: ShoppingCart, path: '/Beverages' },
    ],
  },
  {
    title: "Home Appliances",
    icon: Refrigerator,
    items: [
      { name: "Kitchen Appliances", icon: Refrigerator, path: '/Kitchen Appliances' },
      { name: "Cleaning Equipment", icon: Home, path: '/Cleaning Equipment' },
      { name: "Electronics", icon: Laptop, path: '/Electronics' },
    ],
  },
]