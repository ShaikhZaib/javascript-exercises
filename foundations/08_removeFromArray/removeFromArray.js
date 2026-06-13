const removeFromArray = function(arr, ...valuesToRemove) {
    // const result = arr.filter(item => !valuesToRemove.includes(item));
    const result = arr.filter(item => !valuesToRemove.includes(item));

    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
