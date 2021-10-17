import React from 'react';
import MailingList from './JoinMailingListForm';
import './contact.scss';
import './mailingList.scss';
import fbIcon from '../assets/smIcons/facebook.png';
import instaIcon from '../assets/smIcons/instagram.png';
import tikTokIcon from '../assets/smIcons/tikTok.png';
import pinterestIcon from '../assets/smIcons/pinterest.png';

export default function About({ currentView }) {
    window.history.pushState({}, '', `?section=contact`);

    let sectionClasses = 'largeSection';
    if (currentView !== 'Contact') {
        sectionClasses += ' inactive';
    }

    return (
        <div
            id={'contact'}
            className={sectionClasses}
        >
            <div id={'aboutContent'}>
                <div id={'contactHeader'}>
                    Contact Us
                </div>
                <div id={'contactInfo'}
                    className={'contactSection'}
                >
                    <MailingList />
                    <div
                        id='contactEmail'
                    >
                        <label>Email Us</label>
                        <a id='mailLink' href="mailto:support@kikissheshed.com"> Support@KikisSheShed.com</a>
                    </div>
                    <div id='contactSocialMedia'>
                        <div id='contactSMHeader'>
                            Let's Keep In Touch!
                        </div>
                        <div id='contactSMIcons'>

                            <div
                                className='smIconHolder'
                                tabIndex='0'
                                onClick={() => {
                                    window.open('https://www.facebook.com/kikissheshed', '_blank')
                                }}
                            >
                                <img
                                    src={fbIcon}
                                    alt='facebook link'

                                />
                            </div>
                            <div
                                className='smIconHolder'
                                tabIndex='0'
                                onClick={() => {
                                    window.open('https://www.facebook.com/kikissheshed', '_blank')
                                }}
                            >
                                <img
                                    src={instaIcon}
                                    alt='instagram link'
                                    onClick={() => {
                                        window.open('https://www.instagram.com/kikis.she.shed/', '_blank')
                                    }}
                                />
                            </div>
                            <div
                                className='smIconHolder'
                                tabIndex='0'
                                onClick={() => {
                                    window.open('https://www.facebook.com/kikissheshed', '_blank')
                                }}
                            >
                                <img
                                    src={tikTokIcon}
                                    alt='tiktok link'
                                    onClick={() => {
                                        window.open('https://www.tiktok.com/@kikis.she.shed', '_blank')
                                    }}
                                />
                            </div>
                            <div
                                className='smIconHolder'
                                tabIndex='0'
                                onClick={() => {
                                    window.open('https://www.facebook.com/kikissheshed', '_blank')
                                }}
                            >
                                <img
                                    src={pinterestIcon}
                                    alt='instagram link'
                                    onClick={() => {
                                        window.open('https://www.pinterest.com/kikissheshed/_created/', '_blank')
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                    {/* <div id='shopPolicies'>
                        <a className='shopPolicy' href='google.com'>Privacy Policy</a>
                        <a className='shopPolicy' href='google.com'>Terms of Use</a>
                    </div> */}
                </div>
            </div>
            <div
                id={'contactImg'}
                className={'contactSection'}
            >
                <div id="ghostShape" />
            </div>
        </div>
    )
}