// You should implement your task here.

module.exports = function towelSort(matrix) {
    let res = [];
    if (!matrix || matrix.length === 0) return res;
    const minMax = (a, b) => a - b;
    const maxMin = (a, b) => b - a;
    res = matrix.reduce((acc, val, index) => {
        (index + 1) % 2
            ? (acc = acc.concat(val.sort(minMax)))
            : (acc = acc.concat(val.sort(maxMin)));
        return acc;
    }, []);
    return res;
};
