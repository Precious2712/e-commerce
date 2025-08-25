'use client';

import { SleepWears } from "../BabyBoyClothsFolder/SleepWears";
import { ClothForBabyGirl } from "../BabyGirlClothFolder/ClothForBabyGirl";
import { GirlsUnderWear } from "../BabyGirlClothFolder/GirlsUnderWear";
import { JeansForBabyGirl } from "../BabyGirlClothFolder/JeansForBabyGirl";
import { ShortForGirl } from "../BabyGirlClothFolder/ShortForGirl";
import { ToptForGirls } from "../BabyGirlClothFolder/TopForGirls";
import { useAppContext } from "../useContext/AppContext";

export function DesktopBabyGirlComp() {
    const { items } = useAppContext();

    return (
        <div>
            {items === '' && (
                <div className="">
                    <ClothForBabyGirl />
                </div>
            )}

            {items === 'Clothing-sets' && (
                <div className="">
                    <ClothForBabyGirl />
                </div>
            )}

            {items === 'Jeans' && (
                <div className="">
                    <JeansForBabyGirl />
                </div>
            )}

            {items === 'Top & Tees' && (
                <div className="">
                    <ToptForGirls />
                </div>
            )}

            {items === 'Shorts' && (
                <div>
                    <ShortForGirl />
                </div>
            )}
            {items === 'Under-wear' && (
                <div>
                    <GirlsUnderWear/>
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

export function MobileBabyGirlComp() {
    const { items } = useAppContext();

    return (
        <div>
            {items === '' && (
                <div className="">
                    <ClothForBabyGirl />
                </div>
            )}

            {items === 'Clothing-sets' && (
                <div className="">
                    <ClothForBabyGirl />
                </div>
            )}

            {items === 'Jeans' && (
                <div className="">
                    <JeansForBabyGirl />
                </div>
            )}

            {items === 'Top & Tees' && (
                <div className="">

                </div>
            )}

            {items === 'Shorts' && (
                <div>
                    <ShortForGirl />
                </div>
            )}
            {items === 'Under-wear' && (
                <div>
                    <GirlsUnderWear/>
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