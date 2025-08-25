'use client';

import { useAppContext } from "../useContext/AppContext";
import { AllLadiesCollection } from "../womenCothingCategory/AllLadiesCollection";
import { HandBagAndWallet } from "../womenCothingCategory/HandBagAndWallet";
import { Jewelry } from "../womenCothingCategory/Jewelry";
import { LadiesWears } from "../womenCothingCategory/LadiesWears";
import { MakeUpKits } from "../womenCothingCategory/MakeUpKits";
import { Shoes } from "../womenCothingCategory/Shoes";
import { UnderWearAndSleepWear } from "../womenCothingCategory/UnderWearAndSleepWear";
import { WristWatch } from "../womenCothingCategory/Wrist-watch";

export function DesktopWomantFashionComp() {
    const { items } = useAppContext();

    return (
        <div>
            {items === '' && (
                <div className="">
                   <AllLadiesCollection />
                </div>
            )}

            {items === 'Fashion' && (
                <div className="">
                    <LadiesWears />
                </div>
            )}

            {items === 'Shoes' && (
                <div className="">
                    <Shoes />
                </div>
            )}

            {items === 'Jewelry' && (
                <div className="">
                    <Jewelry />
                </div>
            )}

            {items === 'Hand-bag & Wallet' && (
                <div>
                    <HandBagAndWallet />
                </div>
            )}
            {items === 'Underwear' && (
                <div>
                    <UnderWearAndSleepWear />
                </div>
            )}
            {items === 'Make-up-kits' && (
                <div>
                    <MakeUpKits />
                </div>
            )}
            {items === 'Wrist-watch' && (
                <div>
                    <WristWatch />
                </div>
            )}
        </div>
    )
}

export function MobileWomenFashionComp() {
    const { items } = useAppContext();

    return (
        <div>
            {items === '' && (
                <div className="">
                    <AllLadiesCollection />
                </div>
            )}

            {items === 'Fashion' && (
                <div className="">
                    <LadiesWears />
                </div>
            )}

            {items === 'Shoes' && (
                <div className="">
                    <Shoes />
                </div>
            )}

            {items === 'Jewelry' && (
                <div className="">
                    <Jewelry />
                </div>
            )}

            {items === 'Hand-bag & Wallet' && (
                <div>
                    <HandBagAndWallet />
                </div>
            )}
            {items === 'Underwear' && (
                <div>
                    <UnderWearAndSleepWear />
                </div>
            )}
            {items === 'Make-up-kits' && (
                <div>
                    <MakeUpKits />
                </div>
            )}
            {items === 'Wrist-watch' && (
                <div>
                    <WristWatch />
                </div>
            )}
        </div>
    )
} 