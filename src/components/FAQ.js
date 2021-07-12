import React from 'react';
import './FAQ.scss';
import terms from '../assets/KSS_terms.pdf';
import privacy from '../assets/KSS_privacy.pdf';

export default function FAQ({ currentView, setCurrentView }) {

    let sectionClasses = 'largeSection';
    if (currentView !== 'FAQs') {
        sectionClasses += ' inactive';
    }
    return (
        <div
            id='FAQs'
            className={sectionClasses}
        >
            <div id='FAQheader'>Frequently Asked Questions</div>

            <div className='faqQuestion'>
                How long does it take to get my order?
            </div>
            <div className='faqAnswer'>
                All non-custom items ship within 3 business days from the time of order, excluding holidays.
                All orders are shipped via ground shipping. Once your order ships, you will receive a tracking number.
                Current carrier delivery times are 1 to 5 business days depending on your location.
                For reference, all orders ship from California. So fill that cart! <span onClick={() => {
                    setCurrentView('Shop');
                }}>Shop The Shed!</span>
            </div>

            <div className='faqQuestion'>
                What are your return policies?
            </div>
            <div id='returnsFAQ' className='faqAnswer' >
                <div className='faqSubHeader'>Returns and Exchanges</div>
                <p>
                    All sales are final. Returns and/or exchanges are not accepted. Please don’t hesitate to reach out
                    if you would like additional info on any products in our shop. <span onClick={() => {
                        setCurrentView('Contact');
                    }}>Contact Us!</span>
                </p>
                <div className='faqSubHeader'>Damages and Issues</div>
                <p>

                    Please inspect your order upon receipt and contact us immediately if the item is defective,
                    damaged or if you receive the wrong item, so that we can evaluate the issue and make it right.
                </p>
                <p>
                    <div className='faqSubHeader'>Refunds for Damages and Issues</div>
                    We will notify you once we’ve received and inspected your return, and let you know if the
                    refund was approved or not. If approved, you’ll be automatically refunded on your original
                    payment method. Please remember it can take some time for your bank or credit card company
                    to process and post the refund too.
                </p>

            </div>
            <div className='faqQuestion'>
                Can I cancel my order?
            </div>
            <div className='faqAnswer'>
                All sales are final, and orders cannot be cancelled.
            </div>
            <div className='faqQuestion'>
                What do you do with my info you collect?
            </div>
            <div className='faqAnswer'>
                Rest assured; we NEVER sell your personal info.
                
                <a
                    className='footerLink'
                    href={privacy}
                >
                    Please click here for our Privacy Policy.
                </a>
                
                <a className='footerLink'
                    href={terms}
                >
                    Click here to review our Terms and Conditions
                </a>
            </div>

        </div>
    )
}