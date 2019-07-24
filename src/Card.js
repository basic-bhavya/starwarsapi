import React from 'react';

const Card = (props) => {
    return (
        <div className='white dib pa5 grow border-box bg-dark-blue br3 ma3'>
            <h3>{props.name}</h3>
            <h3>{props.height}</h3>
            <h3>{props.mass}</h3>
            <h3>{props.birth_year}</h3>

            {/* <h3 className='white'>Hey Guys</h3>
            <h1 className='white'>Sample Text</h1> */}
        </div>
    );
}

export default Card;