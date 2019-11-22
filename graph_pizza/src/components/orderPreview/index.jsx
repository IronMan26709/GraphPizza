import React from 'react' ;


export const OrderPreview = props =>{
    const { total, _id, owner } = props.props
    return(
        <div  className="good_preview_component">
            { _id  && <div >
                 <span>Id заказа :</span>
                 { _id !== null && <span>{_id}</span> }
            </div> }
            { owner && <div >
                <span>Заказчик :</span>
                {  owner !== null && <span>{owner.login}</span> }
            </div> }
            { total  && total !== null && <div >
                 <span>Счёт :</span>
                 {<span>{total}</span> }
            </div> }
        </div>
    )
}
