import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './component/Header';
import UsersPage from './page/UsersPage/UsersPage';

function App() {
  return (
    <div className="">
      <BrowserRouter>
      <Header/>
      <Routes>
          <Route path="/user-page" element={<UsersPage/>} />
      </Routes>
      </BrowserRouter>
    </div> 
  );
}

export default App;