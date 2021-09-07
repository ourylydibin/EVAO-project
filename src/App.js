import React from "react"
import { 
  BrowserRouter as Router, 
  Switch, 
  Route
} from "react-router-dom"
import MarcheBeninois from "./components/Pages/MarcheBeninois"
import Offre from "./components/Pages/Offre"
import Prix from "./components/Pages/Prix"
import Acheteurs from "./components/Pages/Acheteurs"
import EN from "./components/Pages/EN"
import Sinscrire from "./components/Pages/Sinscrire"
import Souscrire from "./components/Pages/Souscrire"
import Nomatch from "./components/Pages/Nomatch"
import organisation from "./components/Pages/organisation"



function App(){
  return (
    <>

    <Router>
      <Switch>
          <Route exact path="/" component={organisation} />

          <Route  exact path='/MarcheBeninois'  component={MarcheBeninois} />

          <Route  exact path='/Offre' component={Offre} />

          <Route  exact path='/Prix' component={Prix} />

          <Route  exact path='/Acheteurs' component={Acheteurs} />

          <Route  exact path='/EN' component={EN} />

          <Route  exact path='/Sinscrire' component={Sinscrire} />

          <Route  exact path='/Souscrire' component={Souscrire} />

          <Route component={Nomatch} />
      
      </Switch>
    </Router>
    </>
  )
}

export default App