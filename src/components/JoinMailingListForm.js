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
                >Join our mailing list to stay up to date!</label>
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
                <button>Join Our Mailing List!</button>
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