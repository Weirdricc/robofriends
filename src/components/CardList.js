import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {

    // throw error for catch
    if (false) {
        throw new Error('NOOOOO!');
    }

    return (
        robots.map((user, i) => {
            return (
                <Card 
                key={i} 
                id={robots[i].id} 
                name={robots[i].name} 
                email={robots[i].email} 
                />
            );
        })
    );
}

export default CardList;

