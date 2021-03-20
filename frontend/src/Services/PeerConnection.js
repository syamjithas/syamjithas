import Peer from "peerjs";
const io = require("socket.io")();

class WebRTC {
  #connection = null;
  #peers = {};
  #socket = null;
  constructor(ROOM_ID) {
    this.ROOM_ID = ROOM_ID || this.roomId();
    this.#connection = new Peer(undefined, {
      host: "/",
      port: "3001",
      path: "mypeer",
    });
    this.#socket = io("/");
    this.#connection.on("open", (id) => {
      this.#socket.emit("join-room", ROOM_ID, id);
    });
    this.#socket.on("user-connected", (id) => {
      this.#peers[id] = { id };
    });
    this.#socket.on("user-disconnected", (id) => {
      if (this.#peers[id]) {
        delete this.#peers[id];
      }
    });
  }
  roomId() {
    let length = 10;
    let result = "";
    let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
}

export default WebRTC;