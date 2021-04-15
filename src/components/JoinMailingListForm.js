import React, {useState} from 'react';

export default function JoinMailingListForm() {
    const [emailVal, updateEmailVal] = useState('');
    return (
        <div id={'joinMailingList'}>
            <div>
                <form
                    onSubmit={e => onSubmit(e)}
                >
                    <input type={'text'}
                           placeholder={'Email'}
                           value={emailVal}
                           onChange={e => {
                               updateEmailVal(e.target.value);
                           }}
                           onSubmit={e => onSubmit(e)}
                    />
                </form>
            </div>
        </div>
    )
}


function onSubmit(e, emailValue) {
    e.preventDefault();
    e.stopPropagation();
    if (emailValue.indexOf('@') === -1) {
        return;
    }

    console.log('send');
    // add send
}