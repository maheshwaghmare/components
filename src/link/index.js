import React from 'react';

const Link = ({ href, text }) => {
    return (
        <a href={href}>{text}</a>
    )
}

export default Link;