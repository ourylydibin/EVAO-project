import React, {useState} from 'react'
import {Formik} from "formik"
import * as yup from "yup"
import {Row, Col, Button, Form} from 'react-bootstrap'
import "./FormHomepage.css"
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

const schema = yup.object().shape({
  firstName: yup.string().required("Veullez remplir ce champs"),
  lastName: yup.string().required("Veullez remplir ce champs"),
  textarea: yup.string().required("Veullez remplir ce champs"),
  email: yup.string().email().required("Veullez remplir ce champs"),
});

const FormHomepage = (props) => {

  
  var [stat, setSt] = useState(false)

  const appel = (valo) =>{
     setSt(stat=valo)
  }
  //var [statee, setState] = useState(false)

  //const Toggleimagte = () => { 
    //setSt(!stat)
     // }

  return (
      <div>

       <div className="fomulairetoogle"> 
                      <header className="header-toggle">
                        <div className="div1-toggle">
                           <strong> Contactez Nous </strong>
                        </div>
                          <Button
                          className="arrow-toggle" onClick={props.toggle}>
                            <ExpandMoreIcon/></Button>
                        </header>

                            <div>  
                              <p className="paragraph-form"> 
                              Contactez nous pour une réponse rapide...</p>

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
                    {console.log(isSubmitting)}
                    <Row className="mb-3">
                      <Form.Group as={Col} md="4" controlId="validationFormik01" className="firstName">
                        <Form.Control
                          type="text"
                          name="firstName"
                          placeholder="Prenom*"
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
                      <Form.Group as={Col} md="4" controlId="validationFormik02" className="lastName">
                        <Form.Control
                          type="text"
                          name="lastName"
                          placeholder="Nom*"
                          value={values.lastName}
                          onChange={handleChange}
                          isInvalid={!!errors.lastName}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.lastName}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Row>
                     
                    <Row>
                      <Form.Group as={Col} md="4" controlId="validationFormik03" className="email">
                        <Form.Control
                          type="email"
                          name="email"
                          placeholder="Email*"
                          value={values.email}
                          onChange={handleChange}
                          isInvalid={!!errors.email}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.email}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Row>
                     <Row>
                      <Form.Group as={Col} md="4" controlId="validationFormik04" className="textarea">
                        <Form.Control
                          as="textarea" rows={3}
                          name="textarea"  
                          placeholder="Envoyez votre question*"
                          value={values.textarea}
                          onChange={handleChange}
                          isInvalid={!!errors.textarea}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.textarea}
                        </Form.Control.Feedback>
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                      </Form.Group>
                      </Row>
                      {appel(Boolean(values.firstName) && Boolean(values.lastName) && Boolean(values.email) && Boolean(values.textarea))}
                       
                      
                      <Button type="submit" 
                  style={{marginLeft: "120px", marginTop:"80px"}}
                  disabled={isSubmitting}>{isSubmitting ? "Svp attentez": "Envoyez"} </Button>
                  {props.tr(isSubmitting && stat)}
                  {props.val(values)}
                  </Form>
                )}
               
                
             </Formik>
                              
              </div>
            </div> 
           
      </div>
  )
}

export default FormHomepage
