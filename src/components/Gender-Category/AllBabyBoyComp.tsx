'use client';

import { ClothingSets } from "../BabyBoyClothsFolder/ClothingSets";
import { Jeans } from "../BabyBoyClothsFolder/Jeans";
import { Shorts } from "../BabyBoyClothsFolder/Shorts";
import { SleepWears } from "../BabyBoyClothsFolder/SleepWears";
import { TopShirt } from "../BabyBoyClothsFolder/TopShirt";
import { UnderWears } from "../BabyBoyClothsFolder/UnderWears";
import { useAppContext } from "../useContext/AppContext";

export function DesktopBabyBoyComp() {
    const { items } = useAppContext();

    return (
        <div>
            {items === '' && (
                <div className="">
                    <ClothingSets />
                </div>
            )}

            {items === 'Clothing-sets' && (
                <div className="">
                    <ClothingSets />
                </div>
            )}

            {items === 'Jeans' && (
                <div className="">
                    <Jeans />
                </div>
            )}

            {items === 'Top & Tees' && (
                <div className="">
                    <TopShirt />
                </div>
            )}

            {items === 'Shorts' && (
                <div>
                    <Shorts />
                </div>
            )}
            {items === 'Under-wear' && (
                <div>
                    <UnderWears />
                </div>
            )}
            {items === 'Sleep-wears' && (
                <div>
                    <SleepWears />
                </div>
            )}
        </div>
    )
}

export function MobileBabyBoyComp() {
    const { items } = useAppContext();

    return (
        <div>
            {items === '' && (
                <div className="">
                    <ClothingSets />
                </div>
            )}

            {items === 'Clothing-sets' && (
                <div className="">
                    <ClothingSets />
                </div>
            )}

            {items === 'Jeans' && (
                <div className="">
                    <Jeans />
                </div>
            )}

            {items === 'Top & Tees' && (
                <div className="">
                    <TopShirt />
                </div>
            )}

            {items === 'Shorts' && (
                <div>
                    <Shorts />
                </div>
            )}
            {items === 'Under-wear' && (
                <div>
                    <UnderWears />
                </div>
            )}
            {items === 'Sleep-wears' && (
                <div>
                    <SleepWears />
                </div>
            )}
        </div>
    )
} 