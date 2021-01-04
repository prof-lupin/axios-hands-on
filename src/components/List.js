import React from 'react';

const List = ({events}) => {
    //const { books } = props
    if(events===[]) {
        return <p>Sorry, no events available.</p>;
    }
    // console.log(books);

    return(
        <ul>
            <h1>Available events:</h1>
            {events.map((event) => {
                return (
                    <li key={event._id}>
                        {/* <span>{event.name} {event.location}</span>   */}
                        <h1>{event.name}</h1>
                        <h2>{event.location}</h2>
                    </li>
                );
            })}
            {/* <div style={{flex:1}}>{events}</div> */}
        </ul>
    );
}

export default List;