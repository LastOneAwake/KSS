import React from 'react';
import Mailchimp from "./Mailchimp";

export default function JoinMailingListForm() {
    return (
        <div id={'joinMailingList'}>
            {/*<form*/}
            {/*    onSubmit={e => onSubmit(e)}*/}
            {/*>*/}
            {/*    <label*/}
            {/*        htmlFor={'joinMailingListInput'}*/}
            {/*    > Sign up for launch updates & special offers!*/}
            {/*    </label>*/}
            {/*    <input*/}
            {/*        name={'joinMailingListInput'}*/}
            {/*        type={'text'}*/}
            {/*        placeholder={'Email'}*/}
            {/*        value={emailVal}*/}
            {/*        onChange={e => {*/}
            {/*            updateEmailVal(e.target.value);*/}
            {/*        }}*/}
            {/*        onSubmit={e => onSubmit(e)}*/}
            {/*    />*/}
            {/*    <button>Be one of the cool kids</button>*/}
            {/*</form>*/}


            <Mailchimp/>
        </div>
    )
}
