import React from "react";

export interface TCoins {
    denom: string;
    amount: number;
    uusd?: number;
    icon?: React.Component;
}