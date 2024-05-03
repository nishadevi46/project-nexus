import { useState } from 'react';
import './App.css';
import Login from './components/account/Login'
import DataProvider from './context/DataProvider';
import Home from './components/home/Home'
import About from './components/about/about'
import Contact from './components/contact/Contact';
import { BrowserRouter, Routes, Route, Outlet, Navigate } from 'react-router-dom'
import Header from './components/header/Header'
import Bimage from './images/food.jpg'
const styles = {
  body: {
    margin: 0,
    padding: 0,
    backgroundImage: `url(${Bimage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center', // Center horizontally
    alignItems: 'center', // Center vertically
  },
  loginContainer: {
    marginTop: 40,
  },
};
const PrivateRoute = ({ isAuthenticated, ...props }) => {
  return isAuthenticated
    ?
    <>
      <Header />
      <Outlet />
    </>
    :
    <Navigate replace to='/login' />
}

function App() {
  const [isAuthenticated, isUserAuthenticated] = useState(false);
  return (
   
    <DataProvider>
    <BrowserRouter>
    <div>
    <Routes>
    <Route path='/login' element={<div style={styles.body}> <Login isUserAuthenticated={isUserAuthenticated} /></div>} />

<Route path='/' element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
  <Route path='/' element={<div style={{ marginTop: 64 }}><Home /></div>} /></Route>

  <Route path='/about' element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
              <Route path='/about' element={<div style={{ marginTop: 64 }}><About /></div>} /></Route>

    
              <Route path='/contact' element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
            <Route path='/contact' element={<div style={{ marginTop: 64 }} ><Contact /></div>} /></Route>

     </Routes>
     

     </div>
     </BrowserRouter>
     </DataProvider>
   
  );
}

export default App;
