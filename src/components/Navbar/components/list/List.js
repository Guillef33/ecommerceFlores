import React from 'react';
import listado from './Listado';

const List = () => {
return (
    <ul>
        {listado.map ( (lista, index) => {
            return <li key={index}>{lista}</li>;
        })}
    </ul>
    )
}

export default List;