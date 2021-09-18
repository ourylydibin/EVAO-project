import React from 'react'
import {Container, Button} from 'react-bootstrap'
import "./SecondFormHomepage.css"
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
//import RefreshOutlinedIcon from '@mui/icons-material/RefreshOutlined'
import RefreshOutlinedIcon from '@material-ui/icons/RefreshOutlined'

const SecondFormHomepage = (props) => {

    //const [state, setState] = useState(false);
      
    //const Toggleimagt = () => {
    //  setState(!state)
      //  }

    return (
         <div> 
             <Container>
                 <div className="fomulairetoogl">
                        <header className="header-toggl">
                                    <div className="div1-toggl">
                                    <strong> Contactez Nous </strong>
                                    </div>
                                    <Button  onClick={props.bout}
                                    className="circle-toggl">
                                    <RefreshOutlinedIcon/>
                                    </Button>
                                    <Button onClick={props.second}
                                    className="arrow-toggl">
                                    <ExpandMoreIcon/>
                                    </Button>
                        </header>
                        <div style={{backgroundColor: "lightcyan", width: "300px", marginLeft: "30px"}}>
                            <p className="para1">Email envoyé! </p>
                            <p className="para2">Prenom <br/> {String(props.valu.firstName)}</p>
                            <p className="para3">Nom<br/> {String(props.valu.lastName)}</p>
                            <p className="para4"> Email <br/> {String(props.valu.email)}</p>
                            <p className="para5">Question <br/> {String(props.valu.textarea)}</p>
                        </div>
                                
                 </div>
             </Container>
              
         </div> 
    )
}

export default SecondFormHomepage
