import React, {useState} from "react"
import { 
  BrowserRouter as Router, 
  Switch, 
  Route,
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
import email from "./assets/images/email.webp"
import SecondFormHomepage from './components/Pages/SecondFormHomepage'
import FormHomepage from './components/Pages/FormHomepage'



function App(){
  const [state, setState] = useState(false)
  var [stateForm, setStateForm] = useState(false)
  const [stateSecond, setStatesecond] = useState(false)
  var [values, setStateValues] = useState(null)

  const valeurs = (data)=>{
    setStateValues(values=data)
  }
  

   const toretrievechilddata = (stateFormChild) => {
        setStateForm(stateForm = stateFormChild);
        ((stateForm)? setStatesecond(!stateSecond): setStatesecond(stateSecond))
        }
   
   const Toggleimagtsecond = () => {
    setStatesecond(!stateSecond)
          }
    const Toggleimagt = () => {
        setState(!state);
        (stateSecond? setStatesecond(!stateSecond): setStatesecond(stateSecond));
      }

  return (
    <>
              <img src={email} alt="" onClick={Toggleimagt} className= {((state || stateForm) && state)? "hideimage":"image-fixed"}/>
              {(((state && !stateForm) || stateSecond)? <FormHomepage toggle={Toggleimagt} tr={toretrievechilddata} val={valeurs}/>:"")}
              {((stateForm && state) ? <SecondFormHomepage second={Toggleimagt} bout={Toggleimagtsecond} valu={values}/>: "")} 
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