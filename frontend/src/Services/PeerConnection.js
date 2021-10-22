import Peer from "peerjs";
import { io } from "socket.io-client";
import constants from "../Data/Constant";
import generateRoomId from "../factory/util"
let RTCCon = null;

class WebRTC {
  #connection = null;
  #peers = {};
  #socket = null;
  #endpoint = window.location.hostname === constants.LOCALHOST ? constants.REMOTE_HOST : "/";
  constructor(roomId) {
    this.roomId = roomId ||
      generateRoomId();
    let config = { host: "/", path: constants.PEER_PATH };
    config =
      window.location.hostname === constants.LOCALHOST
        ? { ...config, port: constants.PEERJS_PORT }
        : config;
    this.#connection = new Peer(undefined, config);
    this.#socket = io(this.#endpoint, {
      transports: ["websocket"],
    });

    window.navigator.mediaDevices
      .getUserMedia({
        video: false,
        audio: true,
      })
      .then((stream) => {
        this.myAudioStream = stream;
        this.#connection.on("call", (call) => {
          let peer = call.peer;
          this.answerCall(call, peer);
        });
        this.#socket.on("user-connected", (peer) => {
          console.log("out going call", peer);
          const call = this.#connection.call(peer, this.myAudioStream);
          this.answerCall(call, peer);
        });
        this.#socket.on("user-disconnected", (peer) => {
          if (this.#peers[peer]) {
            delete this.#peers[peer];
          }
        });
      });
    this.#connection.on("open", (peer) => {
      this.#socket.emit("join-room", this.roomId, peer);
    });
  }
  muteUnmute(enable) {
    this.myAudioStream.getAudioTracks()[0].enabled = enable;
  }
  answerCall(call, peer) {
    call.answer(this.myAudioStream);
    call.on("stream", (peerAudio) => {
      this.#peers[peer]["audio"] = peerAudio;
    });
    call.on("close", () => {
      delete this.#peers[peer];
    });
    this.#peers[peer] = { peer, call };
  }
  // getters and setters
  get peers() {
    return this.#peers;
  }
}
const CreateWebRTC = (roomId) => {RTCCon = RTCCon ? RTCCon : new WebRTC(roomId); return RTCCon }
export default CreateWebRTC;
