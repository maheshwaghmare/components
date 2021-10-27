import React from 'react';

const Badge = ( { children, round, red} ) => {

    const styles = {
        border: '1px solid #eee',
        borderRadius: round ? 14 : 3,
        color: '#FFFFFF',
        fontSize: 12,
        padding: round ? '3px 10px' : '3px 8px',
        backgroundColor: red ? '#ff601c' : '#1ea7fd',
    };

    return (
        <span style={styles}>{children}</span>
    )
}

export default Badge;