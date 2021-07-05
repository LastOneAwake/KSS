import React from 'react';
import './FAQ.scss';


const faqs = [
    {
        question: 'question',
        answer: 'answer'
    },
    {
        question: 'question',
        answer: 'answer'
    },
    {
        question: 'question',
        answer: 'answer'
    },
    {
        question: 'question',
        answer: 'answer'
    },
    {
        question: 'question',
        answer: 'answer'
    },
    {
        question: 'question',
        answer: 'answer'
    },
    {
        question: 'question',
        answer: 'answer'
    },
    {
        question: 'question',
        answer: 'answer'
    },
    {
        question: 'question',
        answer: 'answer'
    },
]

export default function FAQ({ currentView }) {

    let sectionClasses = '';
    if (currentView !== 'FAQs') {
        sectionClasses += ' inactive';
    }
    return (
        <div
            id='FAQs'
            className={sectionClasses}
        >
            <ul>
                {faqs.map((faq, i) => {
                    return (
                        <li
                            className='faqItem'
                            key={`${i}faq`}
                        >
                            <div className='faqQuestion'>{faq.question}</div>
                            <div className='faqAnswer'>{faq.answer}</div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}