import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Landing from "./Page/Landing/Landing";
import Batman from "./Page/Batman/Batman";
import GameHome from "./Page/GameHome/GameHome";
function App() {
  return (
    <div className="content">
      <Router>
        <Route path="/" exact component={Landing} />
        <Route path="/batman" component={Batman} />
        <Route path="/ssohostjoin" component={GameHome} />
      </Router>
    </div>
  );
}

export default App;
