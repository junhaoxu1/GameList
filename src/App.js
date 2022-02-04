import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from "./components/Navbar"
import AddGameToList from "./page/AddGameToList"
import YourList from "./page/YourList"
import Home from "./page/Home"
import MobilePhone from './components/MobilePhone'
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import { useMediaQuery } from "react-responsive"

const App = () => {

const isPhone = useMediaQuery({
  query: "(min-device-width: 768px)"
})

  return(
    <div className="container">
      {isPhone && <MobilePhone />}
        <Router>
          <Navbar />
            <Routes>
              <Route exact path="/"
              element={<Home />}
              render={() => {
                return <Navigate to="/Home"/>
              }} 
              />
              <Route exact path="/AddGameToList" element={<AddGameToList />}/>
              <Route exact path="/YourList" element={<YourList />}/>
            </Routes>
        </Router>  
    </div>
    )
  }

export default App;
