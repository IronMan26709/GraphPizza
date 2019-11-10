import React from 'react' ;
import { GoodPreview } from '../../components/goodPreview'


export const CategoryPreview = props =>{
    const { name, _id, goods } = props.props
    console.log( "categoryPreview", props.props)
    return(
        <div  className="good_preview_component">
            <div >
                 <span>Название категории :</span>
                 { name !== null && <span>{name}</span> }
            </div>
            <div >
                 <span>Id категории :</span>
                 { _id !== null && <span>{_id}</span> }
            </div>
            <div >
                <span>Товары в категории :</span>
                { goods !== null && <div>
                    { goods.map( el => <GoodPreview  key={el._id} props={el} /> )}
                </div> }
            </div> 
        </div>
    )
}
