import React from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function Header() {
    return (
        <Navbar collapseOnSelect expand="lg" variant="dark">
            <Container fluid>
                <Navbar.Brand href="/accueil" className="ms-2 d-flex align-items-center">
                    <img
                        alt=""
                        src="./logo.png"
                        width="50"
                        className="d-inline-block align-top me-2"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto my-2 my-lg-0">
                    <Nav.Link href="/accueil" className="text-white" >Accueil</Nav.Link>
                    <Nav.Link href="/notre-expertise" className="text-white" >Notre Expertise</Nav.Link>
                    <Nav.Link href="/en-avant" className="text-white" >Créer le votre</Nav.Link>
                    <Nav.Link href="/contact" className="text-white" >Contact</Nav.Link>
                    <Nav.Link href="/connexion" className="text-white" >Connexion</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    //     <nav class="navbar navbar-expand-lg navbar-dark">
    //     <div class="container-fluid">
    //         <a class="navbar-brand" href="/">
    //             <img src="" alt="logo" class="logo" />
    //         </a>
    //         <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    //             <span class="navbar-toggler-icon"></span>
    //         </button>
    //         <div class="collapse navbar-collapse" id="navbarNavDropdown">
    //             <ul class="navbar-nav">
    //                 <li class="nav-item">
    //                     <a class="nav-link text-white" href="/">Accueil</a>
    //                 </li>
    //                 <li class="nav-item">
    //                     <a class="nav-link text-white" href="/gallery">Notre expertise</a>
    //                 </li>
    //                 <li class="nav-item">
    //                     <a class="nav-link text-white" href="/launch">Créer le votre</a>
    //                 </li>
    //                 <li class="nav-item">
    //                     <a class="nav-link text-white" href="/contact">Contact</a>
    //                 </li>
    //                 <li class="nav-item">
    //                     <a class="nav-link text-white" href="/login">Connexion</a>
    //                 </li>
    //                 <li class="nav-item">
    //                     <a class="nav-link text-white" href="/profile">profile</a>
    //                 </li>
    //                 <li class="nav-item">
    //                     <a class="nav-link text-white" href="/logout">
    //                         <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-box-arrow-right" viewBox="0 0 16 16">
    //                             <path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"/>
    //                             <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
    //                         </svg>
    //                     </a>
    //                 </li>
    //             </ul>
    //         </div>
    //     </div>
    // </nav>
    );
}