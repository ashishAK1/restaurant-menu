import React from 'react'

// accepting props
const MenuCard = ({ menuData }) => {

    const redCol = { color: "red" }; // 2nd way to add CSS ..3rd way in notebook

    return (
        <>
            <section className='main-card-container'>
                {/* Map method to return the whole array od Api i.e. dishes card*/}
                {menuData.map((curEle) => {

                    // object destructuring so that we can use only id,category,name,etc instead of curEle.id,curEle.category,etc.
                    const {id,name,category,image,description} = curEle;

                    return (
                        <>
                            <div className='class-container' key={id}> {/* passing key to the map method */}
                                <div className='card'>
                                    <div className='card-body'>
                                        <span className='card-number card-circle subtle'>{id}</span> {/* using key to fetch data */}
                                        <span className='card-author subtle' style={redCol}>{category}</span>
                                        <h2 className='card-title'>{name}</h2>
                                        <span className='card-descripton subtle'>{description}</span>
                                        <div className='card-read'>Read</div>
                                    </div>
                                    <img src={image} alt = "image" className='card-media'/>
                                    <span className='card-tag subtle'>Order Now</span>
                                </div>
                            </div>
                        </>
                    )
                })};
            </section>
        </>
    )};

export default MenuCard;