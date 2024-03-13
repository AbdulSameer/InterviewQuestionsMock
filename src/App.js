import Counter from './component/Counter';
import './App.css';
import Forms from './component/Forms';
import List from './component/List';
import Navigation from './component/Navigation';
import Home from './component/Home';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Items from './component/Items';
import Interview from './component/Interview';
import Dataverse from './component/Dataverse'; 

function App() {
  return (
    <>
    {/* <BrowserRouter>
    <Navigation/>
    <Routes>
      <Route path ="/" element={
        <Home/>
      }/>
      <Route path = '/Items' element = {<Items/>}/>
    </Routes>
    </BrowserRouter> */}
    <Dataverse/>
    </>
  );
}

export default App;
