import './App.css';
import {BrowserRouter as Router ,Route, Routes} from 'react-router-dom'
import Join from './components/Join';
import Chat from './components/Chat';
import Error404 from './components/Error404';

// window.onbeforeunload=(e)=>{
//   e.preventDefault(); 
//   e.returnValue = '';
  
// }
function App() {
  return (
    <Router>
      <Routes>

    <Route exact path='/' element={<Join />} />
    <Route exact path='/chat' element={<Chat />} />
    <Route path='*' element={<Error404 />} />
      </Routes>
 </Router>
  );
}

export default App;
