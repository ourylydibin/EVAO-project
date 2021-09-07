
import {Navbar, Container, Nav, Button} from 'react-bootstrap';
import "./NAVBAR.css"
import logo from "./../assets/images/logo.png"

const NAVBAR = () => {
    return (

     <Navbar className="NAVbar-customized" bg="light" expand="lg">
        <Container fluid> 
        <Navbar.Brand href="/" className="org" ><img src={logo} alt="" className="logo"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto navlist">
          <Nav.Link className="ms-3 nlink" href="/MarcheBeninois">Marchés Beninois</Nav.Link>
          <Nav.Link className="ms-3 nlink" href="/Offre">Offre</Nav.Link>
          <Nav.Link className="ms-3 nlink" href="/Prix">Prix</Nav.Link>
          <Nav.Link className="ms-3 mobile" href="#">|</Nav.Link>
          <Nav.Link className="ms-3 nlink" href="/Acheteurs">Acheteurs</Nav.Link>
          <Nav.Link className="ms-3 nlink" href="/EN">EN</Nav.Link>
          <Button className="ms-3 souscris" href="/Souscrire" variant="outline-secondary">Connexion</Button>
          <Button className="ms-3 souscris" href="/Sinscrire"  variant="success">S'inscrire</Button>
        </Nav>
      </Navbar.Collapse>
    </Container>
</Navbar>
    )
}

export default NAVBAR
