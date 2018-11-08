const toBuf = (value) => {
    return Buffer.from(value.toString())
}

const objToBuf = (value) => {
    return Buffer.from(JSON.stringify(value))
}

const bufToObj = (value) => {
    return JSON.parse(value.toString())
}

const bufToFloat = (buffer) => {
    return parseFloat(buffer.toString())
}

const checkArgsLength = (array, expectedLength) => {
    if (array.length === expectedLength) {
        return true
    }
    return false
}

const isGetStateEmpty = (value) => {
    if (typeof value === 'undefined' || value.toString() === '') {
        return true
    }
    return false
}


module.exports = {
    toBuf,
    objToBuf,
    bufToObj,
    bufToFloat,
    checkArgsLength,
    isGetStateEmpty
}