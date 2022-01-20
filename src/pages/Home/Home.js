import React from 'react';
import ItemContainer from '../../components/ItemListContainer';
import { NavBar } from '../../components/Navbar/NavBar';

const Home = () => {
    return (
        <>
        <NavBar />
        <ItemContainer greeting={'Hola desde Home.Js'} />
        </>
    )
}

export default Home;