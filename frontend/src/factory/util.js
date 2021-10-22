const generateRoomId = () => {
    let result = "";
    const length = 10,
        characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}
export default generateRoomId;