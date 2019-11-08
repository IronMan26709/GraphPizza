import React from 'react';



export const ImagePreview = props =>{
    const{ _id, url} = props.props
    return(
        <div className="image_preview_wrap" >
            <div className="img_wrap" >
                <img alt="good" src={`http://shop-roles.asmer.fs.a-level.com.ua/${url}`}/>
            </div>
            <div className="info_container">
                <span>{_id}</span>
            </div>
        </div>
    )
}