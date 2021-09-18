import "./Souscrire.css"
import React from 'react'
import {Formik} from "formik"
import * as yup from "yup"
import {Row, Col, Button, Form, Container, Navbar} from 'react-bootstrap'
import "./Souscrire.css"
import logo from "./../../assets/images/logo.png"
import PhoneIcon from '@material-ui/icons/Phone'
import PhoneEnabledIcon from '@material-ui/icons/PhoneEnabled'
import EmailIcon from '@material-ui/icons/Email';



const schema = yup.object().shape({
  firstName: yup.string().required("Veullez remplir ce champs"),
  lastName: yup.string().required("Veullez remplir ce champs"),
  textarea: yup.string().required("Veullez remplir ce champs"),
  email: yup.string().email().required("Veullez remplir ce champs"),
});

const Souscrire = () => {
    return (
        <div>
   <div style={{height: "40px", color: "#666", left: "70%", position: "relative", width: "280px"}}>
     <PhoneIcon/> Besoin d'aide? +1514 243 8404</div>
  <Navbar bg="light" expand="lg">
  <Container>
  <Navbar.Brand href="/" className="org" ><img src={logo} alt="" className="logo"/></Navbar.Brand>
  </Container>
</Navbar>
       <Container> 
                      
                <h4 style={{marginTop: "10px"}}>Connexion</h4>            
                <Formik
                validationSchema={schema}
                onSubmit={(values, {setSubmitting}) => {
                  setTimeout(() => {
                   // alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                  }, 1000)
                }
              }
                initialValues={{
                  firstName: '',
                  lastName: '',
                  email: '',
                  textarea: ''
                }}
              >
                {({
                  handleSubmit,
                  handleChange,
                  handleBlur,
                  values,
                  touched,
                  isValid,
                  errors,
                  isSubmitting
                }) => (
                  
                  <Form noValidate onSubmit={handleSubmit}>
                  <fieldset style={{border: "1px solid", marginTop: "2%", marginRight: "auto", 
                  marginLeft: "auto", width: "80%", borderColor: "lightgray"}}>
                  <legend style={{width: "30px", marginBottom: "40px", marginLeft: "10px", fontSize: "15px"}}>Connexion:</legend>
                    <Row className="mb-3">
                      <Form.Group as={Col} md="4" controlId="validationFormik01" className="firstName">
                        <Form.Control
                          type="text"
                          name="firstName"
                          placeholder="Nom d'usager*"
                          value={values.firstName}
                          onChange={handleChange}
                          isInvalid={!!errors.firstName}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.firstName}
                        </Form.Control.Feedback>
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                      </Form.Group>
                      </Row>
                      
                     
                    <Row>
                      <Form.Group as={Col} md="4" controlId="validationFormik02" className="email">
                        <Form.Control
                          type="email"
                          name="email"
                          placeholder="Mot de passe*"
                          value={values.email}
                          onChange={handleChange}
                          isInvalid={!!errors.email}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.email}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Row>
                     
                      
                     <div style={{display: "flex"}}> <Button type="submit" 
                  style={{marginLeft: "10%", marginTop:"85px", marginBottom: "10px"}}
                  disabled={isSubmitting}>{isSubmitting ? "Svp attentez": "Connexion"}</Button>
                    <a href="oury" style={{marginTop: "90px", marginLeft: "10px"}}>Mot de passe oublié?</a>
                    </div>
                  </fieldset>
                  </Form>
                )}
             </Formik>
             
              <fieldset style={{border: "1px solid", marginTop: "10px", 
              borderColor: "lightgray", width: "80%", marginRight: "auto", 
              marginLeft: "auto"}}>
                <legend style={{fontSize: "15px", marginLeft: "10px"}}>Besoin d'aide?</legend>
                <p style={{fontSize: "13px", marginLeft: "10px"}}>Le service à la clientèle de AOVIA-X est disponible du lundi au vendredi de 09h00 à 17h00 HNE.</p>
                <ul style={{marginLeft: "25px"}}>
                  <li>
                  <PhoneEnabledIcon style={{fontSize: "20px", color: "lightskyblue"}}/> +1514 243 8404
                  </li>
                  <li>
                    <EmailIcon style={{color: "lightskyblue"}}/> <a href="mailto:ouryly084@gmail.com">ouryly084@gmail.com</a>
                  </li>
                </ul>
              </fieldset> 
              <hr/>   
              <div style={{display:"flex"}}>
              <a href="oury" style={{top: "89%", position: "absolute", fontSize: "13px"}}>Dérogation</a>  
              <a href="oury" style={{top: "89%", position: "absolute", fontSize: "13px", left: "88%"}}><strong>EVAO</strong></a> 
              </div>

              
            </Container> 
        </div>
    )
}

export default Souscrire
