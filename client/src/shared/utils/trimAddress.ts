export const  trimAddress = (address: string) => {
    const trim1 = address.substring(0,4)
    const trim2 = address.substring(address.length - 4, address.length)
    return trim1 + "..." + trim2;
}