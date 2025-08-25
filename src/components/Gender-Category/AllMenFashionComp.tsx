'use client';

import { MenBoxerCollection } from "../menClothingCategory/MenBoxerCollection";
import { MenFashionItem } from "../menClothingCategory/MenFashionItem";
import { MenJeansCollection } from "../menClothingCategory/MenJeansCollection";
import { MenPalmSlippers } from "../menClothingCategory/MenPalmSlippers";
import { MenShirtCollection } from "../menClothingCategory/MenShirtCollection";
import { MenShoeCollections } from "../menClothingCategory/MenShoeCollections";
import { MenSneakers } from "../menClothingCategory/MenSneakers";
import { MenTrouserCollection } from "../menClothingCategory/MenTrouserCollection";
import { MenWristWatch } from "../menClothingCategory/MenWristWatch";
import { useAppContext } from "../useContext/AppContext";

export function DesktopMentFashionComp() {
    const { items } = useAppContext();

    return (
        <div>
            {items === '' && (
                <div className="">
                    <MenFashionItem />
                </div>
            )}

            {items === 'Jean' && (
                <div className="">
                    <MenJeansCollection />
                </div>
            )}

            {items === 'Shirt' && (
                <div className="">
                    <MenShirtCollection />
                </div>
            )}

            {items === 'Trouser' && (
                <div className="">
                    <MenTrouserCollection />
                </div>
            )}

            {items === 'Boxer' && (
                <div>
                    <MenBoxerCollection />
                </div>
            )}
            {items === 'Wrist-watch' && (
                <div>
                    <MenWristWatch />
                </div>
            )}
            {items === 'Sneaker' && (
                <div>
                    <MenSneakers />
                </div>
            )}
            {items === 'Shoe' && (
                <div>
                    <MenShoeCollections />
                </div>
            )}
            {items === 'Palm-slipper' && (
                <div>
                    <MenPalmSlippers />
                </div>
            )}
        </div>
    )
}

export function MobileMenFashionComp() {
    const { items } = useAppContext();

    return (
        <div>
            {items === '' && (
                <div className="">
                    <MenFashionItem />
                </div>
            )}

            {items === 'Jean' && (
                <div className="">
                    <MenJeansCollection />
                </div>
            )}

            {items === 'Shirt' && (
                <div className="">
                    <MenShirtCollection />
                </div>
            )}

            {items === 'Trouser' && (
                <div className="">
                    <MenTrouserCollection />
                </div>
            )}

            {items === 'Boxer' && (
                <div>
                    <MenBoxerCollection />
                </div>
            )}
            {items === 'Wrist-watch' && (
                <div>
                    <MenWristWatch />
                </div>
            )}
            {items === 'Sneaker' && (
                <div>
                    <MenSneakers />
                </div>
            )}
            {items === 'Shoe' && (
                <div>
                    <MenShoeCollections />
                </div>
            )}
            {items === 'Palm-slipper' && (
                <div>
                    <MenPalmSlippers />
                </div>
            )}
        </div>
    )
} 