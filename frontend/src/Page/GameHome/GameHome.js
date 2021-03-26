import "./GameHome.scss";
import React, { useState } from "react";
import Audio from "../../Componets/Audio/Audio";
import WebRTC from "../../Services/PeerConnection";
import { GoogleLogin, GoogleLogout } from "react-google-login";
const GameHome = () => {
  const [userData, setuserData] = useState({});
  const [isLoggedIn, setisLoggedIn] = useState(false);
  const [scope, setScope] = useState({});
  let RTCCon;
  let roomIdTxt;
  const responseGoogle = (response) => {
    setisLoggedIn(true);
    setuserData(response.profileObj);
  };

  const logout = () => {
    setisLoggedIn(false);
    setuserData({});
  };

  const hostGame = () => {
    RTCCon = new WebRTC();
    setScope({ ...scope, roomId: RTCCon.ROOM_ID });
  };

  const joinGame = () => {
    if (!roomIdTxt) {
      return;
    }
    RTCCon = new WebRTC(roomIdTxt);
    setScope({ ...scope, roomId: RTCCon.ROOM_ID });
  };

  const handleChange = (event) => {
    roomIdTxt = event.target.value;
  };

  return (
    <div className="google-container">
      <div className="google-signin">
        {!isLoggedIn ? (
          <GoogleLogin
            clientId="264686452189-clrol0jr3h8979lcrrh6ii7v4s21agmc.apps.googleusercontent.com"
            buttonText="Login"
            isSignedIn={true}
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={"single_host_origin"}
          />
        ) : (
          <GoogleLogout
            clientId="264686452189-clrol0jr3h8979lcrrh6ii7v4s21agmc.apps.googleusercontent.com"
            buttonText="Logout"
            onLogoutSuccess={logout}
          />
        )}
      </div>
      {isLoggedIn && !scope.roomId && (
        <div className="host-join">
          <div>
            <button onClick={hostGame}>Hostgame</button>
          </div>
          <div>
            <button onClick={joinGame}>Join</button>
          </div>
          <div>
            <input type="text" value={scope.roomId} onChange={handleChange} />
          </div>
        </div>
      )}
      {isLoggedIn && (
        <>
          <div className="user-profile">
            <img className="user-image" src={userData.imageUrl} />
            <div className="user-text">{userData.name}</div>
            {scope.roomId && <div className="room-number">{scope.roomId}</div>}
          </div>
        </>
      )}
      <div>
        <Audio />
      </div>
    </div>
  );
};
export default GameHome;
