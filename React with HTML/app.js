import React from 'react';
import ReactDOM from 'react-dom';

// const heading = React.createElement(
//     'h2',
//     {id: 'heading', name: 'React', className: 'react'},
//     'Hello React'
// );

const root1 = ReactDOM.createRoot(document.getElementById('root1'));
const root2 = ReactDOM.createRoot(document.getElementById('root2'));
// root.render(heading)

// console.log(heading);

const container1 = React.createElement(
    'div',
    {id: 'container'},
    [
        React.createElement(
        'h1',
        {id: 'heading'},
        "Good morning!!!"
        ),
        React.createElement(
            'p',
            {},
            [
                "This is paragraph tag.",
                React.createElement(
                    'div',
                    {},
                    ['I am div', 'I am your sibling']
                )
            ]
        )
    ]
);
const container2 = React.createElement(
    'div',
    {id: 'container'},
    [
        React.createElement(
        'h1',
        {id: 'heading'},
        "Good morning World!!!"
        ),
        React.createElement(
            'p',
            {},
            [
                "This is paragraph tag.",
                React.createElement(
                    'div',
                    {},
                    ['I am div', 'I am your sibling']
                )
            ]
        )
    ]
);

root1.render(container1)
root2.render(container2)

