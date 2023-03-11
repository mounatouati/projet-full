import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';

import UserProvider from './components/contexts/UserContext';

import Main from './components/Main/Main';
import Home from './components/pages/Home/Home';
import Profil from './components/pages/Profil/Profil';
import Auth from './components/pages/Auth/Auth';
import ListeArticles from './components/pages/ListeArticles/ListeArticles';
import { Routes ,Route} from 'react-router-dom';
function App() {

  return (

      <UserProvider>
        <Navbar> 
        </Navbar>
        {/* <Main/> */}
        <Footer/> 
      </UserProvider>
 

  );
}

export default App;
