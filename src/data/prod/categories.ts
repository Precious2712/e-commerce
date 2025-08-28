import { type LucideIcon } from 'lucide-react'
import { Shirt, User, Users, Baby, Smartphone, Laptop, ShoppingBag, ShoppingCart } from 'lucide-react'

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
      { name: "Teen Boy Fashion", icon: Baby, path: '/Teen-boy-fashion', id: 2 },
      { name: "Teen girl Fashion ", icon: Baby, path: '/Teen-girl-fashion', id: 3},
    ],
  },
  {
    id: 2,
    title: "Gadgets",
    icon: Smartphone,
    items: [
      { name: "Smartphones", icon: Smartphone, path: '/items/phones', id: 0 },
      { name: "Laptops", icon: Laptop, path: '/items/laptop', id: 1 },
      { name: "Accessories", icon: ShoppingBag, path:'/items', id: 2},
    ],
  },
  {
    id: 3,
    title: "Grocery",
    icon: ShoppingCart,
    items: [
      { name: "Accessories-store", icon: ShoppingCart, path: '/items/accessories-store', id: 0},
      { name: "Bakery-products", icon: ShoppingCart, path: '/items/bakery-products', id: 1},
      { name: "Beverages", icon: ShoppingCart, path: '/items/Beverages', id: 2},
    ],
  }
]