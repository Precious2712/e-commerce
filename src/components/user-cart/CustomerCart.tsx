'use client';

import { isArrayBuffer } from "util/types";
import { Button } from "../ui/button";
import { useAppContext } from "../useContext/AppContext";

export function CustomerCart() {
    const {cartItem} = useAppContext();
    console.log(cartItem);
    
    return (
        <div>
           {}

        </div>
    )
}