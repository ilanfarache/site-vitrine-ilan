import React from 'react';
import Navigation from '../components/Navigation';
import Logo from '../components/Logo';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import SocialNetwork  from '../components/SocialNetwork';
import ButtonsBottom from '../components/ButtonsBottom';
import ContactForm from '../components/ContactForm';


const Contact = () => {
    return (
        <main>

            <div className="contact">
                <Navigation />
                <Logo />
                <ContactForm />

                <div className="contact-infos">
                    <div className="address">
                        <div className="content">
                            <h4> adresse </h4>
                            <p>david hameleh 32</p>
                            <p>Netanya</p>
                        </div>
                    </div>
                    <div className="phone">
                        <div className="content">
                            <h4>telephone</h4>
                            <CopyToClipboard text="0584440224" className="hover">
                                <p style={{ cursor: 'pointer' }} className="clipboard" onClick={() => {
                                    alert('Telephone copier')
                                }}>0584440224</p>
                            </CopyToClipboard>
                        </div>
                    </div>
                    <div className="email">
                        <div className="content">
                            <h4>email </h4>
                            <CopyToClipboard text="ilanfarache@gmail.com" className="hover">
                                <p style={{ cursor: 'pointer' }} className="clipboard" onClick={() => {
                                    alert('email copier')
                                }}>ilanfarache1994@gmail.com</p>
                            </CopyToClipboard>
                        </div>
                    </div>
                    <SocialNetwork />
                </div>
                <ButtonsBottom left={'/project4'} />
            </div>
        </main>
    );
};

export default Contact;