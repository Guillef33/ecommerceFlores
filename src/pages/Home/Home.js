import React, { useState } from 'react';
import ItemContainer from '../../components/ItemListContainer';
import { NavBar } from '../../components/Navbar/NavBar';
import Newnav from '../../components/Navbar/Newnav';

const Home = () => {

 const [contador, setContador] = useState(0)

    return (
      <>
        {/* <NavBar /> */}
        <Newnav contador={contador} setContador={setContador} />
        <ItemContainer
          greeting={"Hola desde Home.Js"}
          contador={contador}
          setContador={setContador}
        />
      </>
    );
}

export default Home;