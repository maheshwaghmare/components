import React from 'react';

const Button = ({ text, primary, secondary }) => {

    const styles = {
        border: '1px solid #eee',
        borderRadius: 3,
        color: primary ? '#FFFFFF' : '#1ea7fd',
        backgroundColor: primary ? '#1ea7fd' : secondary ? '#f2f2f2' : '#FFFFFF',
        cursor: 'pointer',
        fontSize: 15,
        padding: '3px 10px',
        margin: 10,
    };


    return (
        <button style={styles} type="button">{text}</button>
    )
}

export default Button;