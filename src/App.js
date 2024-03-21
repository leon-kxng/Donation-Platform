import React, { useEffect, useState} from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/NavBar';
import Footer from './Components/Footer';
import HomePage from './Components/HomePage';
import About from './Components/About';
import CharityPage from './Components/CharityPage'
import LoginPage from './Components/LoginPage'
import SignUp from './Components/SignUp'
import ContactPage from './Components/ContactPage'
import CharitySignForm  from './Components/CharitySignForm'
import AdminPage from './Components/AdminPage'
import { AuthProvider } from '../src/AuthContext';
import DonationPages from './Components/DonationPages'
import BlogPage from './Components/BlogPage';
import Dashboard from './Components/Dashboard'

function App() {

  
  const [charities, setCharities] = useState([]);
  // const { user } = useAuth(); // Get user from AuthContext
  // console.log(user)
  useEffect(() => {
    const fetchCharities = async () => {
      try {
        const response = await fetch("/charities");
        if (!response.ok) {
          throw new Error("Failed to fetch charities");
        }
        const charityData = await response.json();
        setCharities(charityData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCharities();

    return () => {
      // Cleanup if necessary
    };
  }, []);

  return (

    <AuthProvider>
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/charityPage/:charityId" element={<CharityPage />} />   
            <Route path="/login" element={<LoginPage/>} /> 
            <Route path="/signup" element={<SignUp/>} />   
            <Route path="/contactPage" element={<ContactPage/>} />   
            <Route path='/blog' element={<BlogPage />} />
            <Route path="/charityform" element={<CharitySignForm />} />     
            <Route path="/adminpage" element={<AdminPage charities={charities} setCharities={setCharities}/>} /> 
            <Route path='/Donation' element={<DonationPages />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
