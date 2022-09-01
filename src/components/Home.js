import React, { useState } from "react";
import Carousel from 'react-bootstrap/Carousel';


export default function Home() {

    return (
    <>
        <header>
            <div className="catch-phrase">
                <h1 className="text-black">Create<span>.</span>Realize<span>.</span>Yourself<span>■</span>ĒCLA</h1>
                <div className="pt-5">
                    <a className="btn btn-outline-dark fw-bold m-1" href="/notre-expertise">Voir plus</a>
                    <a className="btn btn-outline-dark fw-bold m-1" href="/en-avant">Créer</a>
                </div>
            </div>
        </header>

        <section className="about">
          <h3>Le projet</h3>
          <p>ĒCLA c'est une boîte incroyable qui vous propose un vêtement sur mesure aussi renouvelable que votre envie. Accumuler vos pièces brodées,
            et vous pourrez personnaliser votre tenue avec autant d'univers que vous le souhaitez.
            Pour commencer, on vous propose un petit quizz qui établira votre tout premier modèle !
          </p>
        </section>

        <section className="project">
            <h3>Quelques créations...</h3>
            <p>Vous adorerez votre réalisation.</p>
            <div>
              <img className="img1" src="./images/Blanc Liberté Long Ajourée Air.png" alt="modele blanc air" />
              <img className="img3" src="./images/Noir Liberté Court Opaque Feu.png" alt="modele noir feu" />
              <img className="img4" src="./images/Noir Confort Long Ajourée Eau.png" alt="modele noir eau" />
              <img className="img2" src="./images/Blanc Confort Court Opaque Terre.png" alt="modele blanc terre" />
            </div>
        </section>

        <section className="testimonial">
            <h3 className="text-white">Témoignages</h3>
            <Carousel>
                <Carousel.Item interval={5000}>
                    <div className="d-flex justify-content-center">
                        <img src="./images/icon/dino1.png" className="icon img-fluid" alt="icone" />
                    </div>
                    <p className="content">Magnifique créations réalisées par Merry. Du sur mesure pour de jolis cadeaux personnalisés.</p>
                    <h4 className="h4Home">Aurélie</h4>
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                    <div className="d-flex justify-content-center">
                        <img className="icon img-fluid" src="./images/icon/dino2.png" alt="icone" />
                    </div>
                    <p className="content">Message</p>
                    <h4 className="h4Home">personne</h4>
                </Carousel.Item>
            </Carousel>
        </section>

        <section className="services">
          <h3>Services</h3>
          <p>On se plit en 4 pour réaliser votre création.</p>
          <div>
            <div className="card">
              <div className="design raise">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-pencil" viewBox="0 0 16 16">
                    <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
                </svg>
                <h6>CRÉATION</h6>
                <p>
                    Les idées prennent vie d’abord sous la forme d’un croquis détaillé avec les échantillons de matières et de couleurs. Je prend le temps de répondre à toutes vos questions.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="essayage raise">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-bar-chart-line" viewBox="0 0 16 16">
                    <path d="M11 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h1V7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7h1V2zm1 12h2V2h-2v12zm-3 0V7H7v7h2zm-5 0v-3H2v3h2z"/>
                </svg>
                <h6>ESSAYAGE</h6>
                <p>
                    L’essayage de la toile, c’est le prototype de la tenue cousue dans tissus en coton. La toile permet de contrôler la forme sur vous, une étape indispensable pour un travail sur mesure.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="joy raise">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-suit-heart" viewBox="0 0 16 16">
                    <path d="m8 6.236-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345 4.776 2 4 2 2.324 2 1 3.326 1 4.92c0 1.211.554 2.066 1.868 3.37.337.334.721.695 1.146 1.093C5.122 10.423 6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064.425-.398.81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92 15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852-.545.515-.93 1.152-1.152 1.595L8 6.236zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.55 7.55 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z"/>
                </svg>
                <h6>JOIE</h6>
                <p>
                    Il faut compter 3 à 4 essayages pour votre robe. “L’apparence est le vêtement de la personnalité.” Vous pouvez désormais irradier le monde de votre éclat.               
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="numbers">
          <div className="pulse">
            <h2>260</h2>
            <p>PROJETS</p>
          </div>
          <div className="pulse">
            <h2>120</h2>
            <p>CLIENTS</p>
          </div>
          <div className="pulse">
            <h2>350</h2>
            <p>CAPPUCCINO</p>
          </div>
        </section>
        
    </>
    );
}