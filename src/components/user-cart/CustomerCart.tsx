"use client";

import { Minus, Plus, ShoppingCart, Trash2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { useAppContext } from "../useContext/AppContext";
import Image from "next/image";

export function CustomerCart() {
  const { cartItem, updateQuantity, removeItem, totalPrice } = useAppContext();

  return (
    <Dialog>
      <DialogTrigger className="text-white cursor-pointer relative">
        <ShoppingCart className="h-6 w-6 text-black" />
        {cartItem.length > 0 && (
          <span className="absolute -top-2 -right-2 w-5 h-5 bg-blue-600 rounded-full text-xs text-white flex items-center justify-center">
            {cartItem.length}
          </span>
        )}
      </DialogTrigger>

      <DialogContent className="max-w-md max-h-[500px] flex flex-col">
        <DialogHeader className="flex-shrink-0">
          <DialogTitle>Shopping Cart</DialogTitle>
          <DialogDescription>
            {cartItem.length > 0
              ? `${cartItem.length} item${cartItem.length > 1 ? "s" : ""} in your cart`
              : "Your cart is empty"}
          </DialogDescription>
        </DialogHeader>

        <div className="flex-1 overflow-y-auto min-h-0 max-h-[300px] mt-4">
          {cartItem.length > 0 ? (
            <div className="space-y-4 pr-2">
              {cartItem.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-3 p-3 border rounded-lg bg-card"
                >
                  <div className="w-16 h-16 flex-shrink-0">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      width={400}
                      height={400}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-sm truncate">{item.name}</p>
                    <p className="text-sm text-muted-foreground">${item.price}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-6 h-6 rounded-full bg-muted hover:bg-muted/80 flex items-center justify-center"
                        disabled={item.quantity <= 1}
                      >
                        <Minus className="h-3 w-3" />
                      </button>
                      <span className="text-sm font-medium min-w-[20px] text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-6 h-6 rounded-full bg-muted hover:bg-muted/80 flex items-center justify-center"
                      >
                        <Plus className="h-3 w-3" />
                      </button>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="ml-auto w-6 h-6 rounded-full bg-destructive/10 hover:bg-destructive/20 text-destructive flex items-center justify-center"
                      >
                        <Trash2 className="h-3 w-3" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-8 text-muted-foreground">
              <ShoppingCart className="h-12 w-12 mb-2 opacity-50" />
              <p>No items in cart</p>
            </div>
          )}
        </div>

        {cartItem.length > 0 && (
          <div className="flex-shrink-0 border-t pt-4 mt-4">
            <div className="space-y-2 mb-3">
              <div className="flex justify-between items-center">
                <span className="font-medium">Total Items:</span>
                <span className="font-medium">{cartItem.length}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-medium">Total Price:</span>
                <span className="font-bold">${totalPrice.toFixed(2)}</span>
              </div>
            </div>
            <button className="w-full bg-primary text-primary-foreground py-2 px-4 rounded-md hover:bg-primary/90 transition-colors">
              Proceed to Checkout
            </button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}