import React from 'react' ;


export const CatgoryPreview = props =>{
    // const { name, _id, price, categories, description, images } = props.props
    console.log( "categoryPreview", props.props)
    return(
        <div  className="good_preview_component">
             {/* <div >
                 <span>Name :</span>
                 { name !== null && <span>{name}</span> }
            </div>
            <div >
                 <span>Id категории :</span>
                 { _id !== null && <span>{_id}</span> }
            </div>
            <div >
                <span>Товары в категории :</span>
                { arrayGoods !== null && <div>
                    { arrayGoods.map( el => <GoodPreview  key={el._id} props={el} /> )}
                </div> }
            </div>   */}
        </div>
    )
}
