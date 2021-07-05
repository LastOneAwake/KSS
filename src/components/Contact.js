import React from 'react';
import MailingList from './JoinMailingListForm';
import './contact.scss';
import './mailingList.scss';


export default function About({ currentView }) {

    let sectionClasses = 'largeSection';
    if (currentView !== 'Contact') {
        sectionClasses += ' inactive';
    }

    return (
        <div
            id={'contact'}
            className={sectionClasses}
        >
            <div id={'contactHeader'}>
                Contact Us!
            </div>
            <div id={'aboutContent'}>

                <div
                    id={'contactText'}
                    className={'contactSection'}
                >
                    <p>
                        Kiki’s She Shed was born out of a desire to
                        create an environment that reflected my
                        eclectic style. This space would serve as a
                        place to relax, reflect and create.
                        <br />
                        We hope you find pieces from our collections
                        that inspire and motivate you!
                    </p>
                    <span id={'signOff'}>~ Kiki</span>
                </div>
                <div
                    id={'contactInfo'}
                    className={'contactSection'}
                >
                    <MailingList />
                    <div
                        id='contactEmail'
                    >
                        <a id='mailLink' href="mailto:kikissheshed@gmail.com">Click here to email us!</a>
                    </div>
                    <div id='contactSocialMedia'>
                        <div id='contactSMHeader'>
                            Let's Keep In Touch!
                        </div>
                        <div id='contactSMIcons'>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}