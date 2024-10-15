
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Includes/Header';
import Create from './crud/create';
import List from './crud/list';
import Edit from './crud/edit';
import Addsearch from './test_programm/Addsearch';
import Parent from './test_programm/Parent';
import CountryState from './test_programm/CountryState';
import ButtonColor from './test_programm/ButtonColor';
import ReduxThunk from './test_programm/ReduxThunk';
import UseReducer from './test_programm/UseReducer';
import Stopwatch from './test_programm/Stopwatch';
import Myapp from './test_programm/Myapp';
import Index from './test_programm/customHook';


function App() {
  return (
    <div >
      <Header/>
      <div className="card main-card">
        <Routes>
          <Route path="/" ></Route>
          <Route path="/create" element={ <Create /> } />
          <Route path="/list" element={ <List /> } />
          <Route path="/edit/:userId" element={ <Edit /> } />
          <Route path="/add-search" element={ <Addsearch /> } />
          <Route path="/parent-chield" element={ <Parent /> } />          
          <Route path="/country-state" element={ <CountryState /> } />         
          <Route path="/redux-thunk" element={ <ReduxThunk /> } />  
          <Route path="/use-reducer" element={ <UseReducer /> } /> 
          <Route path="/stopwatch" element={ <Stopwatch /> } />  
          <Route path="/button-color" element={ <ButtonColor /> } />
          <Route path="/custom-hook" element={ <Index /> } />

          <Route path="/my-app" element={ <Myapp /> } />
        </Routes>
      </div>

     </div>
  );
}

export default App;
