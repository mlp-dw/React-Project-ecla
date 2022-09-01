import React from "react";

export default function Contact() {
    
    return (
        <div className="contact bgContact">
          <h3>Contactez-nous</h3>
            <div>
                <div>
                    <p className="pe-4">Adresse</p>
                    <p>Route de Paris, La Pacaudière</p>
                </div>

                <div>
                    <p>Un coup de main ?</p>
                    <p>E-mail: contact@ecla.com <br /> Phone: 061 294 8197</p>
                </div>

            </div>
            <form>
                <div className="form">
                    <div className="info-contact">
                        <div className="name">
                            <label for="contact_name" className="required">Votre Nom</label>
                            <input type="text" id="contact_name" name="contact[name]" required="required" className="input" />
                        </div>
                        <div className="email">
                            <label for="contact_email" className="required">Votre Email</label>       
                            <input type="email" id="contact_email" name="contact[email]" required="required" className="input" />
                        </div>
                    </div>
                    <div className="textarea">
                        <label for="contact_message" className="required">Votre Message</label>
                        <textarea id="contact_message" name="contact[message]" required="required" rows="6" cols="30" className="input"></textarea>
                    </div>
                    <div className="submit">
                        <button className="button2 button--tamaya button--round-s button--text-thick button--border-thin" data-text="Envoyer">Envoyer</button>
                    </div>
                </div>
            </form>
        </div>
    );
}