import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';

import CustomRoutes from './routes/CustomRoutes';

function App() {
  return (
    <Router>
      <div className='App'>
        <CustomRoutes />
      </div>
    </Router>
  );
}

export default App;
