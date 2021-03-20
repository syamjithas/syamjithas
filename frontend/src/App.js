import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Landing from "./Page/Landing/Landing";
import Batman from "./Page/Batman/Batman";
import Rummy from "./Page/Rummy/Rummy";
function App() {
  return (
    <div className="content">
      <Router>
        <Route path="/" exact component={Landing} />
        <Route path="/batman" component={Batman} />
        <Route path="/rummy" component={Rummy} />
      </Router>
    </div>
  );
}

export default App;
