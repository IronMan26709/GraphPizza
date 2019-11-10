import React from 'react' ;


export const GoodPreview = props =>{
    const { name, _id, price, categories, description, images } = props.props
    // console.log( "GoodPreview", props.props)
    return(
        <div  className="good_preview_component">
            { name  && name !== null && <div >
                 <span>Название :</span>
                 {<span>{name}</span> }
            </div> }
            { _id  && <div >
                 <span>Id товара :</span>
                 { _id !== null && <span>{_id}</span> }
            </div> }
            { price &&  price === Number && <div >
                <span>Цена :</span>
                <span>{price}</span> 
            </div> } 
            {categories && categories !== null && <div >
                <span>Катигория :</span>
                <div>
                    { categories.map( category => <span key={category._id}>{category.name}</span> )}
               </div> 
            </div>}
            { description && <div >
                <span>Описание :</span>
                {  description !== null && <span>{description}</span> }
            </div> }
            { images  && images !== null && images.length !== 0 && <div >
               { images.map(img => 
                    <div>
                        {img.url !== null && 
                        <img alt="goodPhoto" 
                                key={img._id}
                                src={`http://shop-roles.asmer.fs.a-level.com.ua/${img.url}`} />
                                }
                    </div> )} 
            </div> } 
        </div>
    )
}
