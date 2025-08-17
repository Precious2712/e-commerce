
import { HexashopPage } from "@/components/clothing/HexashopPage";
import { WomenClothing } from "@/components/clothing/MenFashionItem";
import { HomeNavBar } from "@/components/header/HomeNavBar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <div>
        <HomeNavBar />
      </div>

      <div className="mt-16">
        <HexashopPage />
      </div>
    </div>
  );
}
