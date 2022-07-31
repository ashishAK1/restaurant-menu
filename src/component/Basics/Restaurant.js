// First component -> Card showing dishes
import React from 'react';
import "./style.css"; //1st way to add CSS
import Menu from '../menuApi.js';
import MenuCard from './MenuCard';
import Navbar from './Navbar'

// getting categories from menu api using map and converting the object (received from map) to array using spread operator(...) and [] square brackets.. to get unique categories we use new Set
const uniqueList = [ ...new Set
  (Menu.map((curEle) => {
  return curEle.category;
})
), "All",
];

// console.log(uniqueList);  -> will print array


const Restaurant = () => {
    

    // useState hook -> return array of two elements ..it must be above return statement
    const [menuData,setMenuData] = React.useState(Menu);
    // console.log(menuData);

    const [menuList, setMenuKist] = React.useState(uniqueList);

  // Filtering out data using category i.e. breakfast,lunch,etc
  // Using fat arrow function 
  const filterItem = (category) => {

    if(category === "All"){
      setMenuData(Menu);
      return;
    }

    // using filter method to filter out
    const updatedList = Menu.filter((curEle) => {
      return curEle.category === category; // returning only elements with category 
    });

    setMenuData(updatedList);

  };


  return (
    <>

    <Navbar filterItem={filterItem} menuList={menuList} />

    {/* Line 41 Sending props to pass data from one component to another */}
    <MenuCard menuData={menuData}/> {/* menuData inside curly braces is same as written in useState line 11 */}
    </>
  );
}
export default Restaurant;