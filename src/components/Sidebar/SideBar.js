import React from "react";

function SideBar({ products, setProducts, category }) {
  // const filterCategory = (category) => {
  //   const catFilter = products.filter((catProducts) => {
  //     if (category === "") {
  //       console.log("No existe la categoria");
  //       return catProducts;
  //     }
  //     if (catProducts.caategory.includes(category)) {
  //       return catProducts;
  //     }
  //   });

  //   setProducts({
  //     ...products,
  //     catFilter: catFilter,
  //     filter: true,
  //   });
  // };

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
