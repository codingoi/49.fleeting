const getNewExpirationTime = () => {
    return Date.now() + 60 * 1000;
}

let nextId = 0;
const generateId = () => {
    const result = nextId;
    nextId += 1;
    return result;
}

export {getNewExpirationTime, generateId}