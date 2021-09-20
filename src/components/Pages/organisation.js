import React from 'react'
import {Row, Col, Carousel, InputGroup, FormControl, Button, Container, Card,
   CardGroup, Accordion} from 'react-bootstrap'
import "./organisation.css"
import benin from "./../../assets/images/benin.jpg"
import canada from "./../../assets/images/canada.jpg"
import senegal from "./../../assets/images/senegal.jpg"
import SearchIcon from '@material-ui/icons/Search'
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt'
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward'
import NAVBAR from "./../../components/NAVBAR"
//import SecondFormHomepage from './SecondFormHomepage'
//import FormHomepage from './FormHomepage'
//import email from "./../../assets/images/email.webp"


const Organisation = () => {
    return (
        <div className="hauteurRowsection1">
          <NAVBAR /> 
            <Row className="Row1 g-0">
                <Col sm={5} className="col1">
                    <Carousel fade>
                        <Carousel.Item>
                            <img style={{height: "520px"}}
                            className="d-block w-100"
                            src={benin}
                            alt="First slide"
                            />
                            <Carousel.Caption>
                            <h3>Nos activités au Benin</h3>
                            <p>Notre ambition, votre satisfaction.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img style={{height: "520px"}}
                            className="d-block w-100"
                            src={canada}
                            alt="Second slide"
                            />

                            <Carousel.Caption>
                            <h3 style={{color: "#253652"}}>Nos activités au Canada</h3>
                            <p style={{color: "#253652"}}>Notre ambition, votre satisfaction.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img style={{height: "520px"}}
                            className="d-block w-100"
                            src={senegal}
                            alt="Third slide"
                            />

                            <Carousel.Caption>
                            <h3 style={{color: "#253652"}}>Nos activités au Sénégal</h3>
                            <p style={{color: "#253652"}}>Notre ambition, votre satisfaction.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Col>

                <Col sm={7} className="col2">
                    <div>
                    <h2 className="titleCol2"> <em style={{color: "#57F8F8"}}>La source #1</em> des appels <br/>d'offres au Benin</h2>
                    </div>
                    <InputGroup className="mb-3 ps-5 pe-5 inpugroupdecal">
                        <FormControl
                        placeholder="Trouver votre prochain contrat"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        />
                        <InputGroup.Text id="basic-addon1"><SearchIcon style={{cursor: "pointer"}}/></InputGroup.Text>
                    </InputGroup>
                    <h6 className="h6col2">Catégories Populaires</h6>
                    <div>
                        <div>
                            <Button href="md" variant="primary" className="btncol2 p-0" 
                            style={{backgroundColor: "#2f466a", borderColor: "transparent"}} size="sm">
                            Service de construction <strong>840</strong></Button>
                        </div>
                         
                         <div>
                            <Button href="md" className="btncol2 p-0"
                             style={{backgroundColor: "#2f466a", borderColor: "transparent"}} size="sm">
                                Service de soutien prof., adm. et à la gestion <strong>424</strong></Button>
                          </div>
                          <div className="btnpluscategoriecol2">
                            <Button href="ourylydibin" className=" btnpluscategoriecol2Button">
                                Plus de Catégories <ArrowRightAltIcon/></Button> 
                         </div>
                         <div>
                         <h6 style={{marginLeft: "20%", color: "#fff", marginTop: "40px", marginBottom: "0px"}}>
                         En recherche d'une solution d'approvisionnment stratégique?</h6>
                            <a href="ourylydibin" className="btnacheurscol2 p-0" size="sm">
                            Visiter l'espace Acheteurs <ArrowRightAltIcon/></a>
                         </div>
                         <div className="animate-arrow">
                            <a href="#cardsection">
                            <ArrowDownwardIcon style={{color: "lightcyan"}}/></a>
                         </div>
                    </div>
                </Col>
               </Row> 
      



    <Container>
  <Row className="justify-content-center">
    <Col sm="12" className="col1-section2">
      <p style={{marginTop: "30px", color: "#00BAFF"}}>FONCTIONALITÉS CLÉS</p>
    </Col>
    <Col sm="12" className="col2-section2">
        <h2 style={{color: "#253765", fontWeight: "50", fontSize: "1.8em", marginTop: "18px"}}>
            Nous <span style={{fontWeight: "400"}}> réinventons </span> la recherche 
            <p style={{marginTop: "10px"}}>d'offres</p>
        </h2>
        <div className="line">
        </div>
    </Col>
  </Row>
</Container>
<Container fluid className="container3">
    <Row className="row3" id="cardsection">
     <Col lg={6}className="col1-card">
       
                <Card className="card1">
            <Card.Img variant="top" 
            src="https://s3.amazonaws.com/images.wpr.com/flag-pages/svg/bj.svg"
             style={{width: "30px", height: "30px", marginTop: "-10px"}} />
            <Card.Body>
                <Card.Title>Accès aux marchés publics du Benin</Card.Title>
                <Card.Text>
                Nous vous permettons de naviguer les appels d'offres publics des principaux contracteurs beninois.
                 Vous ne trouvez pas celui que vous recherchez? Demandez nous!
                </Card.Text>
            </Card.Body>
            </Card>
            
     </Col>
     <Col lg={6} className="col2-card">
       
     <Card className="card2">
  <Card.Img variant="top" 
  src="https://uploads-ssl.webflow.com/5e3c7c14260abef18b746a7c/5e4045a2320157cfc2be911a_cpu.svg"
  style={{width: "30px", height: "30px", marginTop: "-10px"}} />
  <Card.Body>
    <Card.Title>L'intelligence artificielle pour améliorer votre recherche sur les contrats publics</Card.Title>
    <Card.Text>
    C'est là que notre expertise fait la différence: nos puissants algorithmes améliorent constamment la précision 
    de vos recherches afin de prioriser les meilleures opportunités!
    </Card.Text>
  </Card.Body>
</Card>

     </Col>

    </Row>


    <Row className="row4">
     <Col lg={6} className="col3-card">
       
                <Card className="card3">
            <Card.Img variant="top" src="https://uploads-ssl.webflow.com/5e3c7c14260abef18b746a7c/5e404d055b31cb16b74b3c1b_layout.svg" 
            style={{width: "30px", height: "30px", marginTop: "-10px"}} />
            <Card.Body>
                <Card.Title>Un agrégateur d'appels d'offres simple et centralisé</Card.Title>
                <Card.Text>
                Grâce à notre plateforme, vous gagnerez un temps précieux 
                en naviguant dans un outil centralisé et intuitif. 
                Choisissez une série de mots-clés et nous programmerons
                 la plateforme pour que vous ne receviez que les résultats pertinents. 
                Trouver les meilleures opportunités est désormais un jeu d'enfant!
                 Ne laissez plus passer un contrat public.
                </Card.Text>
            </Card.Body>
            </Card>
            
     </Col>
     <Col lg={6} className="col4-card">
     <Card className="card4">
  <Card.Img variant="top" src="https://uploads-ssl.webflow.com/5e3c7c14260abef18b746a7c/5e4048aa8eeae51193fac24f_mail.svg"
  style={{width: "30px", height: "30px", marginTop: "-10px"}}  />
  <Card.Body>
    <Card.Title>Courriel récapitulatif quotidien des opportunités pertinentes pour votre entreprise</Card.Title>
    <Card.Text>
    En plus d'une plateforme élégante et efficace, vous recevrez quotidiennement 
    un récapitulatif par e-mail des offres pertinentes pour votre entreprise.
    </Card.Text>
  </Card.Body>
</Card>
     
     </Col>

    </Row>
</Container>


<Container fluid className="container4"> 
<Row className="justify-content-center">
    <Col sm="12" className="col1-section2">
      <p style={{marginTop: "30px", color: "#00baff"}}>PRINCIPAUX AVANTAGES</p>
    </Col>
    <Col sm="12" className="col2-section2">
        <h2 style={{color: "#253765", fontWeight: "50", fontSize: "1.8em", marginTop: "18px"}}>
            Des <span style={{fontWeight: "400"}}> avantages importants </span> pour 
            <p style={{marginTop: "10px"}}>votre entreprise</p>
        </h2>
    </Col>
  </Row>


  <Row style={{paddingTop: "140px"}} className="">
    
  <CardGroup>
  <Col lg={4}>
  <Card className="card-group1">
    <Card.Img variant="top" 
    src="https://uploads-ssl.webflow.com/5e3c7c14260abef18b746a7c/5e3e3fc6e17036fd8dfce371_kingdom-unsubscribe.svg"
    style={{width: "100px", height: "100px", marginTop: "10px", marginLeft: "35%"}}  />
    <Card.Body>
      <Card.Title>Optimisez votre temps de recherche</Card.Title>
      <Card.Text>
      Ne perdez plus de temps à chercher les meilleures offres pour votre entreprise, 
      nous pouvons filtrer les offres correspondant à vos critères de recherche.
      </Card.Text>
    </Card.Body>
  </Card>
  </Col>
  <Col lg={4}>
  <Card className="card-group2">
    <Card.Img variant="top" src="https://uploads-ssl.webflow.com/5e3c7c14260abef18b746a7c/5e40407d5b31cb2b6e4ac3ea_kingdom-4.svg" 
    style={{width: "100px", height: "100px", marginTop: "10px", marginLeft: "35%"}} />
    <Card.Body>
      <Card.Title>Augmentez votre taux de réussite</Card.Title>
      <Card.Text>
      En passant moins de temps à rechercher des appels d'offres,
       vous pouvez vous concentrer sur ce qui compte vraiment: la qualité de votre réponse.{' '}
      </Card.Text>
    </Card.Body>
  </Card>
  </Col>
  <Col lg={4}>
  <Card className="card-group3">
    <Card.Img variant="top" src="https://uploads-ssl.webflow.com/5e3c7c14260abef18b746a7c/5e3e3fc6eb91df55c1658640_kingdom-6.svg"
     style={{width: "100px", height: "100px", marginTop: "10px", marginLeft: "35%"}} />
    <Card.Body>
      <Card.Title>Ne ratez plus d'opportunités</Card.Title>
      <Card.Text>
      La peur de rater des opportunités appartient désormais au passé. 
      Nos robots soutenus par notre intelligence artificielle s'occupent de tout pour vous.
      </Card.Text>
    </Card.Body>
  </Card>
  </Col>
</CardGroup>
  </Row>
</Container>



<Container fluid className="container5"> 
<Row className="justify-content-center">
    <Col sm="12" className="col1-section2">
      <p style={{marginTop: "30px", color: "#00baff", fontSize: "25px"}}>Bientôt disponible</p>
    </Col>
    <Col sm="12" className="col2-section2">
        <h2 style={{color: "#253765", fontWeight: "30", fontSize: "20px", marginTop: "60px"}}>
            Des outils pour vous aider à <span style={{fontWeight: "bold"}}>
               qualifier plus rapidement </span> <span>vos marchés publics et</span>
            <p style={{marginTop: "10px"}}> 
             vous permettre d'augmenter votre
             <strong style={{fontWeight: "bold"}}> taux de réussite.</strong></p>
        </h2>
    </Col>
  </Row>


  <Row style={{paddingTop: "140px"}} className="justify-content-space-evenly">
    
  <CardGroup>
  <Col lg={3}>
  <Card className="card-group-disponoble1">
  <div className="div-disponible1"><Card.Img variant="top" 
    src="https://uploads-ssl.webflow.com/5e3c7c14260abef18b746a7c/5e619e5c00cf5280cd503af7_thermometer.svg"
    style={{height: "50px", width: "50px", marginLeft: "20%"}} /></div>
    <Card.Body>
      <Card.Title>Taux de pertinence</Card.Title>
      <Card.Text>
      Grâce à nos algorithmes, nous attribuons un score à chaque appel d'offres en fonction de critères et nous ajoutons notre sauce secrète basée sur l'intelligence artificielle
       (Avez-vous déjà répondu à un AO similaire? Gagnez-vous souvent des AO de ce ministère?...).
      </Card.Text>
    </Card.Body>
  </Card>
  </Col>
  <Col lg={3}>
  <Card className="card-group-disponoble2">
  <div className="div-disponible1"><Card.Img variant="top" 
  src="https://uploads-ssl.webflow.com/5e3c7c14260abef18b746a7c/5e404d123201576c5fbeecd2_layers.svg" 
  style={{height: "50px", width: "50px", marginLeft: "20%"}}   /> </div>
    <Card.Body>
      <Card.Title>Extraction des contenus</Card.Title>
      <Card.Text>
      Plus besoin de naviguer dans l’appel d’offres pour trouver 
      les informations pertinentes qui vous permettent de le qualifier : nous les extrayons pour vous.
      </Card.Text>
    </Card.Body>
  </Card>
  </Col>
  <Col lg={3}>
  <Card className="card-group-disponoble3">
    <div className="div-disponible1"><Card.Img variant="top"
     src="https://uploads-ssl.webflow.com/5e3c7c14260abef18b746a7c/5e40492e1149f1e5a79ac596_file-text.svg"
     style={{height: "50px", width: "50px", marginLeft: "20%"}}   /></div>
    <Card.Body>
      <Card.Title>Génération de résumé "smart"</Card.Title>
      <Card.Text>
      Résumer des dizaines de pages est devenu possible. Nous avons développé une expertise en traitement automatique du langage,
       ce qui nous permet de comprendre l'essence d'un texte et de vous en proposer une version résumée.
      </Card.Text>
    </Card.Body>
  </Card>
  </Col>

  <Col lg={3}>
  <Card className="card-group-disponible4">
  <div className="div-disponible1"> <Card.Img variant="top" 
     src="https://uploads-ssl.webflow.com/5e3c7c14260abef18b746a7c/5e4048ed3201575ebebebd50_pie-chart.svg"
     style={{height: "50px", width: "50px", marginLeft: "20%"}}  /> </div>
    <Card.Body>
      <Card.Title>Taux de pertinence</Card.Title>
      <Card.Text>
      Grâce à nos algorithmes, nous attribuons un score à chaque appel d'offres en fonction de critères et nous ajoutons notre sauce secrète basée sur l'intelligence artificielle
       (Avez-vous déjà répondu à un AO similaire? Gagnez-vous souvent des AO de ce ministère?...).
      </Card.Text>
    </Card.Body>
  </Card>
  </Col>
</CardGroup>
  </Row>
</Container>
<Container fluid className="container6" 
style={{height: "160px", backgroundColor: "#fff", marginTop: "100px"}}> 
<Row className="justify-content-center">
    <Col lg={12}>
        <h2 style={{color: "#253765", fontWeight: "50",
         fontSize: "1.8em", 
         marginTop: "18px", marginLeft: "38%"}}>
            <p style={{marginLeft: "10%"}} className="augmentez">Augmentez votre</p>
            <p style={{marginTop: "1%"}}><strong>taux de réussite</strong> maintenant!</p>
        </h2>
    </Col>
    <Col lg={12}> 
    <div style={{marginLeft: "43%", marginTop: "20px"}}>
          <Button href="ourylydibin" size="lg"
           style={{borderRadius: "50px", backgroundColor: "#18cdca",
            borderColor: "transparent"}} className="tester-gratuitement-1-2">
          Tester gratuitement <ArrowRightAltIcon className="arrow-tester-gratuit"/></Button> 
    </div>
    </Col>
  </Row>
  </Container>

  <Container fluid className="container7">
    <div style={{backgroundColor: "rgb(250, 250, 250)"}}>
      <Row>
      <Col lg={12} className="col1-container7">
        <h2 style={{color: "#253765", fontWeight: "50",
         fontSize: "1.8em", 
         marginTop: "18px", marginLeft: "38%"}}>
            <p style={{marginLeft: "20%", marginTop: "300px"}} className="augmentez">FAQ</p>
            <p style={{marginTop: "1%"}}><strong>Questions</strong> fréquement posées</p>
        </h2>
    </Col>
  
     <Col className="mt-4">
     <Accordion className="col2-container7">
  <Accordion.Item eventKey="0">
    <Accordion.Header>Je souhaite couvrir une zone géographique plus grande</Accordion.Header>
    <Accordion.Body>
    Nous ajouterons régulièrement de nouveaux marchés et avons publié un calendrier de ceux-ci. 
    Nos robots couvrent actuellement les appels d'offres publics beninois.
     <br/>
     <br/>
     <br/> 
     Cependant, nous sommes toujours à l'écoute de nos clients. Si vous souhaitez ajouter d'autres marchés, 
     nous sommes disponibles à l'évaluer. Vous pouvez envoyer vos demandes à 
     <span style={{color: "blue"}}> ouryly084@gmail.com</span>.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>Vais-je manquer des appels d'offres?</Accordion.Header>
    <Accordion.Body>
    Nos robots analysent toutes les plateformes en permanence pour voir 
    si un nouvel appel d'offres est lancé pour vous.
     Si tel est le cas, l'offre apparaîtra instantanément sur votre liste.
     <br/>
     <br/>
     <br/>
     De plus, pour être sûr de ne rien manquer,
      nous vous envoyons un mail tous les soirs récapitulant 
      le nombre de contrats publics que nous avons trouvés au cours des dernières 24 heures.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="2">
    <Accordion.Header>Pour quel type d'industrie sont les appels d'offres d'EVAO?</Accordion.Header>
    <Accordion.Body>
    Toutes les industries! Que vous vendiez des biens, des services, que vous soyez dans la construction, etc.
     Dès que vous souhaitez répondre aux appels d'offres publics Beninois, EVAO est parfait pour vous. 
     Notre objectif est de vous faire gagner du temps dans la recherche et la qualification 
    des appels d’offres afin que vous puissiez vous consacrer sur ce qui compte: <strong>augmenter votre taux de réussite</strong>.
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
     
     </Col>
      </Row>
      </div>
  </Container>
  
  <Container fluid className="container8" 
style={{height: "160px", backgroundColor: "#fff", marginTop: "200px"}}> 
<Row className="justify-content-center">
  <div style={{backgroundColor: "rgb(250,250,250)"}}>
    <Col lg={12}>
        <h2 style={{color: "#253765", fontWeight: "50",
         fontSize: "1.8em", 
         marginTop: "18px", marginLeft: "25%"}}>
            <p style={{marginLeft: "12%"}} className="augmentez">
              Nous travaillons pour votre <button style={{backgroundColor: "lightblue", 
              borderColor: "transparent", cursor: "context-menu"}}>
                <strong>réussite</strong></button></p>
            <p style={{marginTop: "1%", fontSize: "20px", marginLeft: "6%"}} >
              AOVIA-X identifie et qualifie tous les contrats publics pertinents pour vous.</p>
            <p style={{marginTop: "1%", fontSize: "20px", marginLeft: "12%"}}>
              Concentrez vous sur ce qui compte: <strong>écrire et gagner</strong>.</p>
        </h2>
    </Col>
    <Col lg={12}> 
    <div style={{marginLeft: "43%", marginTop: "70px", borderColor: "transparent"}} className="div-tester-gratuit">
          <Button href="ourylydibin" size="lg" style={{borderRadius: "50px",
           backgroundColor: "#18cdca", borderColor: "transparent"}} className="tester-gratuitement-1-2">
          Tester gratuitement <ArrowRightAltIcon className="arrow-tester-gratuit"/></Button> 
    </div>
    </Col>
    </div>
  </Row>
  </Container>
  <div>
    <Container fluid className="container9">
      <Row>
        <Col lg={12} className="col1-container9">
          <p style={{color: "#fff", marginLeft: "10%", marginTop: "15%"}}> Découvrez notre solution complète</p>
          
            <span> <h3 style={{color: "#fff", marginLeft: "10%", marginTop: "-1%"}}>
              AOVIA-X fait partie d'une solution <br/>
              complète d'automatisation de réponse <br/> aux appels d'offres: <strong>EVAO</strong></h3>
              <Button href="ourylydibin" className="button-container9"
              style={{borderRadius: "50px", backgroundColor: "#fff", color: "black", 
               borderColor: "transparent", height: "12%"}}>
                Découvrez AOVIA <ArrowRightAltIcon className="arrow-footer"/>
              </Button></span>
        </Col>

        <Col lg={12} className="col2-container9">
        <div className="div-container99">
            <p className="evao">©2021&nbsp;EVAO&nbsp;Technologies&nbsp;Inc.&nbsp;&nbsp;|&nbsp;&nbsp;<a href="ourylydibin" className="anchor1-container9">légal</a>
            </p>
            <p className="paragraph1-col2-container9">&nbsp;&nbsp;|&nbsp;&nbsp;
            <a href="ourylydibin" className="paragraph2-col2-container9">Nouvelles&nbsp;fonctionnalités</a>
            </p><img src="https://uploads-ssl.webflow.com/5e3c7c14260abef18b746a7c/5ebaecf32dfbac82e4753e0e_external-link-grey.svg"
            alt="" className="image-container9" />
            <p className="evao evaoo">&nbsp;&nbsp;développé&nbsp;au&nbsp;Canada&nbsp;par&nbsp;</p>
            <a href="ourylydibin" className="anchor2-container9">EVAO</a>

          </div>
           </Col>
         </Row>
       </Container>
     </div>
  </div>
    )
}

export default Organisation
