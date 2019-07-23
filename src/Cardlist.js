import React from 'react';
import Card from './Card';

const Cardlist = ({people}) => {
    return (
        <div>
            {
                people.map((peep, i) => {

                    return (
                    <Card name = {people[i].name}
                          height = {people[i].height}
                          mass = {people[i].mass}
                          birth_year = {people[i].birth_year} />
                    );
                })
            }

        </div>
    )
}

export default Cardlist;