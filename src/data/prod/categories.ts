import { type LucideIcon } from 'lucide-react'
import { Shirt, User, Users, Baby, Smartphone, Laptop, ShoppingBag, ShoppingCart, Refrigerator, Home } from 'lucide-react'

interface MenuItem {
  id: number;
  name: string;
  icon: LucideIcon;
  path: string;
}

interface MenuCategory {
  id: number;
  title: string;
  icon: LucideIcon;
  items: MenuItem[];
}

export const dropDown: MenuCategory[] = [
  {
    id: 1,
    title: "Fashion",
    icon: Shirt,
    items: [
      { name: "Men's Clothing", icon: User, path: '/men-collection', id: 0 },
      { name: "Women's Clothing", icon: Users, path: '/women-collection', id: 1 },
      { name: "Baby Boy Wear", icon: Baby, path: '/baby-girl-cloths', id: 2 },
      { name: "Baby Girl Wear", icon: Baby, path: '/baby-boy-cloths', id: 3},
    ],
  },
  {
    id: 2,
    title: "Gadgets",
    icon: Smartphone,
    items: [
      { name: "Smartphones", icon: Smartphone, path: 'phones', id: 0 },
      { name: "Laptops", icon: Laptop, path: '/laptops', id: 1 },
      { name: "Accessories", icon: ShoppingBag, path:'/Accessories', id: 2},
    ],
  },
  {
    id: 3,
    title: "Grocery",
    icon: ShoppingCart,
    items: [
      { name: "Fresh Produce", icon: ShoppingCart, path: '/Fresh-Produce', id: 0},
      { name: "Dairy Products", icon: ShoppingCart, path: '/Dairy-Products', id: 1},
      { name: "Beverages", icon: ShoppingCart, path: '/Beverages', id: 2},
    ],
  },
  {
    id: 4,
    title: "Home Appliances",
    icon: Refrigerator,
    items: [
      { name: "Kitchen Appliances", icon: Refrigerator, path: '/Kitchen Appliances', id: 0},
      { name: "Cleaning Equipment", icon: Home, path: '/Cleaning Equipment' , id: 1},
      { name: "Electronics", icon: Laptop, path: '/Electronics' , id: 2},
    ],
  },
]