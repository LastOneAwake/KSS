import React from 'react';
import KikiIMG from '../assets/Kiki_portrait.png'

export default function About() {

    return (
        <div id={'about'} className={'largeSection'}>
            <div id={'aboutContent'}>
                <div id={'aboutText'} className={'aboutSection'}>
                    Kiki’s She Shed was born out of a desire to
                    create an environment that reflected my
                    eclectic style. This space would serve as a
                    place to relax, reflect and create.
<br/>
                    We hope you find pieces from our collections
                    that inspire and motivate you!
                </div>
                <div id={'aboutPhoto'} className={'aboutSection'}>
                    <img src={KikiIMG} alt={'Kiki of Kiki\'s She Shed fame'}/>
                </div>
            </div>
        </div>
    )
}