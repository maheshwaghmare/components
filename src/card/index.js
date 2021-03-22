import React from 'react';

const Card = ({ heading, thumbnail, btn }) => {

    const imgStyle = {
        background: '#fff',
        border: '1px solid #DCD9E2',
        borderRadius: '3px',
        display: 'block',
        marginBottom: '10px',
        padding: '14px',
        position: 'relative',
        zIndex: 10,
        maxWidth: '100%',
    };

    const styles = {
        border: '1px solid #eee',
        borderRadius: 3,
        cursor: 'pointer',
        fontSize: 15,
        padding: '3px 10px',
        margin: 10,
    };

    const h1Style = {
        color: '#2f3f50',
        fontSize: '16px',
        fontWeight: 600,
    }

    const btnStyle = {
        display: 'inline-block',
        padding: '5px 16px',
        background: '#5C2EDE',
        fontSize: '14px',
        textShadow: 'none',
        fontWeight: '600',
    }

    return (
        <div style={styles}>
            <img src={thumbnail} style={imgStyle} />
            <h2 style={h1Style}>{heading}</h2>
            <button style={btnStyle}>{btn}</button>
        </div>
    )
}

export default Card;