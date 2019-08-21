const getIDPart = () => (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
const generateID = () => `${getIDPart()}${getIDPart()}${getIDPart()}${getIDPart()}${getIDPart()}`;

export default generateID;
