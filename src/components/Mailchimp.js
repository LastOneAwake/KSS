import React, { useState } from 'react';

export default function Mailchimp({ placeholderValue }) {
    const [emailValue, updateEmailValue] = useState('');
    const [fakeboiValue, setfakeboiValue] = useState('');


    return (<div>
        <div id="mc_embed_signup">
            <form
                action="https://kikissheshed.us1.list-manage.com/subscribe/post?u=e522f5bb77fc5652f90621e9f&amp;id=c3e7700af3"
                method="post"
                id="mc-embedded-subscribe-form"
                name="mc-embedded-subscribe-form"
                className="validate"
                target="_blank"
                noValidate
            >
                <div id="mc_embed_signup_scroll">
                    <label htmlFor="mce-EMAIL">Join Our Mailing List</label>
                    <div id='formSeperator'>
                        <input
                            type="email"
                            value={emailValue}
                            onChange={e => updateEmailValue(e.target.value)}
                            name="EMAIL"
                            className="email"
                            id="mce-EMAIL"
                            placeholder={placeholderValue}
                            required={true}

                        />
                        <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
                            <input type="text"
                                name="b_e522f5bb77fc5652f90621e9f_c3e7700af3"
                                tabIndex="-1"
                                value={fakeboiValue}
                                onChange={e => setfakeboiValue(e.target.value)}

                            />
                        </div>
                        <div className="clear">
                            <input type="submit"
                                value="Subscribe"
                                name="subscribe"
                                id="mc-embedded-subscribe"
                                className="button"
                            />
                        </div>
                    </div>
                </div>
            </form>
        </div>

    </div>);
}


// function MC_antiBot_markup() {

//     return (
//         <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
//             <input type="text"
//                 name="b_e522f5bb77fc5652f90621e9f_c3e7700af3"
//                 tabIndex="-1"
//                 value="" />
//         </div>
//     );
// }