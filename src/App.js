import {ResumeProvider} from './Context/ResumeContext'
import CVData from './Components/CVData';
import CVList from './Components/CVList';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import SignUp from './Components/SignUp';
import LogIn from './Components/LogIn';
import { ProtectedRoute } from './Components/ProtectedRoute'
import { LoggedInCheck } from './Components/LoggedInCheck'

function App() {
  return (
    <>
      <ResumeProvider>
        <Router>
          <ToastContainer theme='colored'></ToastContainer>
          <Routes>
            <Route path='/signup' element={<LoggedInCheck><SignUp/></LoggedInCheck>}/> 
            <Route path='/login' element={<LoggedInCheck><LogIn/></LoggedInCheck>}/> 
            <Route path='/' element={<ProtectedRoute><CVList /></ProtectedRoute>}/> 
            <Route path='/cvs/:cvId' element={<ProtectedRoute><CVData /></ProtectedRoute>}/> 
          </Routes>
        </Router>
      </ResumeProvider>
    </>
  );
}

export default App;
