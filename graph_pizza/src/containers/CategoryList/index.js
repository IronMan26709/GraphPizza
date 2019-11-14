import React from 'react';
import { CategoryItem } from '../../components/categoryItem';
import { Link } from 'react-router-dom';
import  Pizza  from '../../img/pim.png';
import  Pasta  from '../../img/thumb_plos1.png';
import  Drinks  from '../../img/pdrinks2.png';
import  Salat  from '../../img/pisalat.png';
import  Sushi from '../../img/pij.png';
import './CategoryList.css'


const categories =[
    { 
        name: "Пицца" ,
        url: "/goods/5dc94bd00e36db246e3049ee",
        src: Pizza
    },
    { 
        name: "Лапша"  ,
        url: "/goods/5dcabeeb6d09c45440d14cf6",
        src: Pasta
    },
    { 
        name: "Напитки" ,
        url: "/goods/5dcac6cf6d09c45440d14cfd",
        src: Drinks
    },
    { 
        name: "Салаты" ,
        url: "/goods/5dcacaeb6d09c45440d14d04",
        src: Salat
    },
    { 
        name: "Суши" ,
        url: "/goods/5dcadc906d09c45440d14d11",
        src: Sushi
    }
]




export const CategoryList = props =>{
    return(
        <ul className="category_list">
              { categories.map(el => 
              <Link className="category_list_item" to={el.url}>
                  <CategoryItem  props={el}></CategoryItem>
               </Link> 
               )}
        </ul>
        
    )
}