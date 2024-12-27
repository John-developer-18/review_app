import {BrowserRouter as Router, Route, Routes, NavLink} from 'react-router-dom'
import Card from './components/shared/Card'
import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import AboutPage from './components/pages/AboutPage'
import AboutIconLink from './components/shared/AboutIconLink'
import { FeedbackProvider } from './context/FeedbackContext.jsx'


function App() {



  return (
    <FeedbackProvider>
      <Router>
     <Header bgColor='rgba(0,0,0,0.4)' textColor='#ff6a95' text='Feedback UI'/>
     <div className="container">
      <Routes>
      <Route 
      exact
      path='/'
      element = {
        <>
        <FeedbackForm/>
        <FeedbackStats/>
        <FeedbackList/>
        </>
       
      }>
       
      </Route>

        <Route path='/about' element={<AboutPage/>}/>
      </Routes>
      
      <Card>
        <NavLink to={'/'} activeClassName='active'>Welcome Home</NavLink>
      </Card>
      <AboutIconLink/> 
      </div>
    </Router>

    </FeedbackProvider>
   )
}

export default App
