import './App.css';
import Landing from './Page/Landing/Landing';
import { BrowserRouter as Router, Route } from 'react-router-dom';
function App() {
  return (
    <div className='content'>
      <Router>
        <Route path='/' component={Landing} />
      </Router>
    </div>
  );
}

export default App;
