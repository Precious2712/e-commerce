'use client';

import { MenBoxerCollection } from "../clothing/MenBoxerCollection";
import { MenFashionItem } from "../clothing/MenFashionItem";
import { MenJeansCollection } from "../clothing/MenJeansCollection";
import { MenPalmSlippers } from "../clothing/MenPalmSlippers";
import { MenShirtCollection } from "../clothing/MenShirtCollection";
import { MenShoeCollections } from "../clothing/MenShoeCollections";
import { MenSneakers } from "../clothing/MenSneakers";
import { MenTrouserCollection } from "../clothing/MenTrouserCollection";
import { MenWristWatch } from "../clothing/MenWristWatch";
import { useAppContext } from "../useContext/AppContext";

export function DesktopMentFashionComp() {
    const { items } = useAppContext();

    return (
        <div>
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

            {items === '' && (
                <div className="">
                    <MenFashionItem />
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

            {items === '' && (
                <div className="">
                    <MenFashionItem />
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