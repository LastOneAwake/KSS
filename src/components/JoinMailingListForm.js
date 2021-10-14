import React from 'react';
import Mailchimp from "./Mailchimp";

export default function JoinMailingListForm({ placeholderValue }) {
    placeholderValue = placeholderValue ? placeholderValue : "Drop Us Your Email!";
    return (
        <div id={'joinMailingList'}>
            <Mailchimp
                placeholderValue={placeholderValue}
            />
        </div>
    )
}
