import React from 'react';
import './footer.scss';
import fbIcon from '../assets/smIcons/facebook.png';
import instaIcon from '../assets/smIcons/instagram.png';
import tikTokIcon from '../assets/smIcons/tikTok.png';
import pinterestIcon from '../assets/smIcons/pinterest.png';
import terms from '../assets/KSS_terms.pdf';
import privacy from '../assets/KSS_privacy.pdf';

export default function Footer({ currentView }) {
    const onContact = currentView === 'Contact';

    return (
        <div id='footer'>

            <div
                id='footerLinks'
                className={onContact ? 'onContact' : ''}
            >
                <div className='linkHolder'>
                    <a
                        className='footerLink'
                        href={privacy}
                    >
                        Privacy
                    </a>
                </div>
                <div className='linkHolder'>
                    <a className='footerLink'
                        href={terms}
                    >
                        Terms of Use
                    </a>
                </div>
            </div>
            {!onContact &&
                <div id='footerSMIcons'>
                    <div
                        tabIndex='0'
                        className='smIconHolder'
                        onClick={() => {
                            window.open('https://www.facebook.com/kikissheshed', '_blank')
                        }}
                    >
                        <img src={fbIcon} alt='facebook link' />
                    </div>
                    <div
                        tabIndex='0'
                        className='smIconHolder'
                        onClick={() => {
                            window.open('https://www.instagram.com/kikis.she.shed/', '_blank')
                        }}
                    >

                        <img src={instaIcon} alt='Instagram link' />
                    </div>
                    <div
                        tabIndex='0'
                        className='smIconHolder'
                        onClick={() => {
                            window.open('https://www.tiktok.com/@kikis.she.shed', '_blank')
                        }}
                    >

                        <img src={tikTokIcon} alt='TikTok link' />
                    </div>
                    <div
                        tabIndex='0'
                        className='smIconHolder'
                        onClick={() => {
                            window.open('https://www.pinterest.com/kikissheshed/_created/', '_blank')
                        }}
                    >
                        <img src={pinterestIcon} alt='Pinterest link' />
                    </div>
                </div>
            }
        </div >
    )
}