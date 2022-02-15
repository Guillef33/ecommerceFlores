import React from "react";

function SideBar({ products, setProducts, category }) {

  return (
    <>
      <ul>
        {/* <li onClick={(e) => filterCategory(category)}> */}
        <li>
          Jewelery
          {/* <FaAngleDown  onClick={filterItems('jewelery')} />*/}
        </li>
        <li>
          Electronics
          {/* <FaAngleDown onClick={filterItems("electronics")} /> */}
        </li>
        <li>
          Men
          {/* <FaAngleDown onClick={filterItems("menu")} /> */}
        </li>
        <li>
          Woman
          {/* <FaAngleDown onClick={filterItems("woman")} /> */}
        </li>
      </ul>
    </>
  );
}

export default SideBar;
