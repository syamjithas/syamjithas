import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./Page/Landing/Landing";
import Batman from "./Page/Batman/Batman";
import GameHome from "./Page/GameHome/GameHome";
import Resume from "./Page/Resume/Resume";
function App() {
  return (
    <div className="content">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Landing />} />
          <Route path="batman/" element={<Batman />} />
          <Route path="ssohostjoin/" element={<GameHome />} />
          <Route path="resume/" element={<Resume />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
