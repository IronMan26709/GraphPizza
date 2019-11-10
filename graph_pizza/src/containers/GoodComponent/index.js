import React, { Component }  from 'react'



export const GoodComponent = props =>{
    const{ images, name, description, price } = props.props
    return (
        <div className="order_component_wrap">
            <div className="img_wrap">
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
            <div className="good_name_wrap">
                <span>{name}</span>
            </div>
            <div className="description_wrap">
                <div>{description}</div>
            </div>
            <div className="prise_wrap">
                <div>Цена : {price} грн</div>
                
            </div>
            <div className="order_block_wrap">

            </div>
        </div>
    )
}