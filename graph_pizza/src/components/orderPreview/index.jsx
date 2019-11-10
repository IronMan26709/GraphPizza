import React from 'react' ;


export const OrderPreview = props =>{
    const { total, _id, owner } = props.props
    console.log( "OrderPreview", props.props)
    return(
        <div  className="good_preview_component">
            { _id  && <div >
                 <span>Id заказа :</span>
                 { _id !== null && <span>{_id}</span> }
            </div> }
            {/* {categories && categories !== null && <div >
                <span>Катигория :</span>
                <div>
                    { categories.map( category => <span key={category._id}>{category.name}</span> )}
               </div> 
            </div>} */}
            { owner && <div >
                <span>Заказчик :</span>
                {  owner !== null && <span>{owner.login}</span> }
            </div> }
            { total  && total !== null && <div >
                 <span>Счёт :</span>
                 {<span>{total}</span> }
            </div> }
            {/* { images  && images !== null && images.length !== 0 && <div >
               { images.map(img => 
                    <div>
                        {img.url !== null && 
                        <img alt="goodPhoto" 
                                key={img._id}
                                src={`http://shop-roles.asmer.fs.a-level.com.ua/${img.url}`} />
                                }
                    </div> )} 
            </div> }  */}
        </div>
    )
}
