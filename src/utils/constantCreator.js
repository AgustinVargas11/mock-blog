/**
 * createConstants
 * Returns an object of key\value pairs from an array of strings
 * @param  {String} constants
 * @return {Object}
 */
export function createConstants(...constants) {
    return constants.reduce((acc, type) => {
        acc[type] = type;
        return acc;
    }, {});
}
