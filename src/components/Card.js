import React from 'react';

const Card = (props) => {
    const { name, email, id } = props;
    return (
        <div className='tc bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img src={`https://robohash.org/${id}?size=200x200`} alt='robot photos' />
            <div style={{ 'fontSize': '10px'}}>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;