import React, {useState} from 'react';

export default function JoinMailingListForm() {
    const [emailVal, updateEmailVal] = useState('');
    return (
        <div id={'joinMailingList'}>
            <form
                onSubmit={e => onSubmit(e)}
            >
                <label
                    htmlFor={'joinMailingListInput'}
                >Sign up to stay in touch!</label>
                <input
                    name={'joinMailingListInput'}
                    type={'text'}
                    placeholder={'Email'}
                    value={emailVal}
                    onChange={e => {
                        updateEmailVal(e.target.value);
                    }}
                    onSubmit={e => onSubmit(e)}
                />
                <button>Be one of the cool kids</button>
            </form>
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