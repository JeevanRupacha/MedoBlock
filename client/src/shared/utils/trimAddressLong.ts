export const  trimAddressLong = (address: string) => {
    const trim1 = address.substring(0,8)
    const trim2 = address.substring(address.length - 8, address.length)
    return trim1 + "..." + trim2;
}