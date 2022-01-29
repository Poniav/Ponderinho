import { TCoins } from "../types/types";


/**
 * Take the amount and convert in decimal
 * @param int first input to sum
 * @returns sum in decimal
 */
export function toDec(int: number){
    return int * 10 ** -6;
} 


/**
 * Remove ibs denom from object list
 * @param int first input to sum
 * @returns sum in decimal
 */
 export function ibsCls(data: any){
    const list: any = [];
    Object.entries(data).forEach(([, value]: any) => {
        const denom: string = value.denom;
        if(!denom.startsWith('ibc')){
            list.push(value);
        }
    });
    return list;
} 


/**
 * Fix the limit to 6 numbers for float 
 * @param int first input to sum
 * @returns float number
 */
 export function fixFloat(int: number){
    if(isFloat(int)){
        return parseFloat(int.toFixed(6));
    } else {
        return int;
    }

} 

/**
 * Check if number if float
 * @param int first input to sum
 * @returns boolean
 */
function isFloat(x: number | undefined) {
    if(typeof x == 'number' && !isNaN(x)){
        if (Number.isInteger(x)) {
            return false;
        }
        else {
            return true;
        }
    } else {
        return false;
    }
}

