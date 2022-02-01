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