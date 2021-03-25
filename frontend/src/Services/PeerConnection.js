import Peer from "peerjs";
import { io } from "socket.io-client";

class WebRTC {
  #connection = null;
  #peers = {};
  #socket = null;
  #ENDPOINT =
    window.location.hostname == "localhost" ? "ws://localhost:5000/" : "/";
  constructor(ROOM_ID) {
    this.ROOM_ID = ROOM_ID || this.generateRoomId();
    let config = { host: "/", path: "mypeer" };
    config =
      window.location.hostname == "localhost"
        ? { ...config, port: "3001" }
        : config;
    this.#connection = new Peer(undefined, config);
    this.#socket = io(this.#ENDPOINT, {
      transports: ["websocket"],
    });

    window.navigator.mediaDevices
      .getUserMedia({
        video: false,
        audio: true,
      })
      .then((stream) => {
        this.myAudio = stream;
        this.#connection.on("call", (call) => {
          let peer = call.peer;
          console.log("incoming call", peer);
          call.answer(stream);
          call.on("stream", (peerAudio) => {
            this.#peers[peer]["audio"] = peerAudio;
          });
          call.on("close", () => {
            delete this.#peers[peer];
          });
          this.#peers[peer] = { peer, call };
        });
        this.#socket.on("user-connected", (peer) => {
          console.log("out going call", peer);
          const call = this.#connection.call(peer, this.myAudio);
          call.answer(stream);
          call.on("stream", (peerAudio) => {
            this.#peers[peer]["audio"] = peerAudio;
          });
          call.on("close", () => {
            delete this.#peers[peer];
          });
          this.#peers[peer] = { peer, call };
        });
        this.#socket.on("user-disconnected", (peer) => {
          if (this.#peers[peer]) {
            delete this.#peers[peer];
          }
        });
      });
    this.#connection.on("open", (peer) => {
      this.#socket.emit("join-room", this.ROOM_ID, peer);
    });
  }
  generateRoomId() {
    let length = 10;
    let result = "";
    let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
  muteUnmute(enable) {
    this.myVideoStream.getAudioTracks()[0].enabled = enable;
  }
  callMyPeer() {}
}

export default WebRTC;
