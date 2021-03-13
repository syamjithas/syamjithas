import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Landing from './Page/Landing/Landing';
import Batman from './Page/Batman/Batman';
function App() {
  return (
    <div className='content'>
      <Router>
        <Route path='/' exact component={Landing} />
        <Route path='/Batman' component={Batman} />
      </Router>
    </div>
  );
}

export default App;
