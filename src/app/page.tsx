import { MenClothing } from "@/components/clothing/MenClothing";
import { WomenClothing } from "@/components/clothing/WomenClothing";
import { HomeNavBar } from "@/components/header/HomeNavBar";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div>
        <HomeNavBar />
      </div>

      <div className="mt-20 bg-amber-200">
        <MenClothing />
      </div>

      <div className="mt-16">
        <WomenClothing />
      </div>
    </div>
  );
}
