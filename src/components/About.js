import React from 'react';
import KikiIMG from '../assets/Kiki_portrait.png'

export default function About() {

    return (
        <div id={'about'} className={'largeSection'}>
            <div id={'aboutHeader'}>
                About
            </div>
            <div id={'aboutContent'}>
                <div id={'aboutText'} className={'aboutSection'}>
                    <div id={'sheShedDefinition'}>
                        <span id={'term'}>She Shed</span> <span id={'termType'}>(noun)</span>
                        <span id={'definition'}> - Part of a
                            home where a woman can relax
                            and indulge in her interests. </span>
                    </div>
                    <p>
                        Kiki’s She Shed was born out of a desire to
                        create an environment that reflected my
                        eclectic style. This space would serve as a
                        place to relax, reflect and create.
                        <br />
                        We hope you find pieces from our collections
                        that inspire and motivate you!
                    </p>
                    <span id={'signOff'}>- Kiki</span>
                </div>
                <div id={'aboutPhoto'} className={'aboutSection'}>
                    <img src={KikiIMG} alt={'Kiki of Kiki\'s She Shed fame'} />
                </div>
            </div>
        </div>
    )
}