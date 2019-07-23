import React from 'react';
import Card from './Card';

const Cardlist = ({people}) => {
    // return (
    //     <div>
    //         {
    //             people.map((peep, i) => {

    //                 return (
    //                 <Card name = {people[i].name}
    //                       height = {people[i].height}
    //                       mass = {people[i].mass}
    //                       birth_year = {people[i].birth_year} />
    //                 );
    //             })
    //         }

    //     </div>
    // )

    const CardArray = people.map((peeps,i) => {
        return <Card key={i} 
                name={people[i].name} 
                height={people[i].height} 
                mass={people[i].mass} 
                birth_year={people[i].birth_year} />
    })

    return <div className='tc'>
                {CardArray}
           </div>;
}

export default Cardlist;