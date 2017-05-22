export function toNumber(value) {
    if (typeof value === 'undefined') {
        return null;
    }
    else if (typeof value === 'string') {
        return parseInt(value);
    }
    return value;
}
//# sourceMappingURL=number.property.js.map