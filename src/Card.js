import React from 'react';

const Card = (props) => {
    return (
        <div>
            <h3>{props.name}</h3>
            <h3>{props.height}</h3>
            <h3>{props.mass}</h3>
            <h3>{props.birth_year}</h3>
        </div>
    );
}

export default Card;