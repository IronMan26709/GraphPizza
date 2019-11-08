import React from 'react' ;


export const GoodPreview = props =>{
    const { name, _id, price, categories, description, images } = props.props
    console.log( "GoodPreview", props.props)
    return(
        <div  className="good_preview_component">
             <div >
                 <span>Name :</span>
                 { name !== null && <span>{name}</span> }
            </div>
            <div >
                 <span>Id товара :</span>
                 { _id !== null && <span>{_id}</span> }
            </div>
            <div >
                <span>Цена :</span>
                { price === Number && <span>{price}</span> }
            </div> 
            <div >
                <span>Катигория :</span>
               { categories !== null && <div>
                    { categories.map( category => <span key={category._id}>{category.name}</span> )}
               </div> }
            </div>
             <div >
                <span>Описание :</span>
                {  description !== null && <span>{description}</span> }
            </div>
            { <div >
               { images !== null && images.length !== 0 && images.map(
               img => <div>{img.url !== null && <img alt="goodPhoto" key={img._id} src={`http://shop-roles.asmer.fs.a-level.com.ua/${img.url}`} />}</div> ) }
            </div> } 
        </div>
    )
}
