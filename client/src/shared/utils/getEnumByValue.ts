export default function getEnumKeyByValue<T extends string>(enumObject: Record<string, T>, value: T): keyof typeof enumObject | null {
    const keys = Object.keys(enumObject) as Array<keyof typeof enumObject>;
    const foundKey = keys.find(key => enumObject[key] === value);
    return foundKey || null;
}