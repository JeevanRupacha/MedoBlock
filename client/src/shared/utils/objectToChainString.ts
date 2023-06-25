export const objectToChainString = (data: Object) => {
    const strData = JSON.stringify(data).replace(/"|"|{|}/g, '');
    return strData
}