import React from 'react'
import './categoryItem.css'
 
export const CategoryItem = props =>{
    const { name, src } = props.props
    return(
        <div className="category_Item">
            <div className="category_img">
                <img src={src}/>
            </div>
            <div className="category_name"><h3>{name}</h3></div>
        </div>
    )
}