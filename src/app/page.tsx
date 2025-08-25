
import { HexashopPage } from "@/components/menClothingCategory/HexashopPage";
import { HomeNavBar } from "@/components/header/HomeNavBar";

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
