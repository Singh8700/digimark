
import {
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import Home from './views/home'
import NotFound from './views/not-found'
import Features1 from './components/features1'
import Contact3 from './components/contact3'
import Footer1 from './components/footer1'
import Navbar4 from './components/navbar4'
import Privacy from './components/privacy';
import Term from "./components/term"
import About from "./components/About"
const App = () => {
  return (
    <>
    <Navbar4/>

      <Switch>
        <Route component={Home} exact path="/" element={Home}/>
        <Route component={Features1} path="/service" element={Features1}/>
        <Route component={Contact3} path="/contact" element={Contact3}/>
        <Route component={Privacy} path="/privacy-policy" element={Privacy}/>
        <Route component={About} path="/about" element={About}/>
        <Route component={Term} path="/term" element={Term}/>
        <Route component={NotFound} path="**" element={NotFound}/>
        <Redirect to="**" />
      </Switch>
    <Footer1/>
    </>
  )
}

export default App