import React, { useState } from 'react';
import { connect } from 'react-redux';
import { GetUsersGoods } from '../../actions/goodAction';
import  GoodComponent  from '../../containers/GoodComponent';

const ListOfGoods = props =>  {
    
    const[ param , setParam ] = useState( "" )
    const newParam = props.match.params.id
        if ( props.match.params.id !== param ) {
            props.GetUsersGoods(props.match.params.id)
            setParam( newParam ) 
        } 
         
        const{ arrayGoods} = props
    return(
            <div className="list_of_goods">
                { arrayGoods !== null && arrayGoods.map( el => <GoodComponent key={el._id} props={el} /> )}
            </div> 
     )
}

const mapStateToProps = state =>({
    arrayGoods : state.orderReducer.arrayGoods
})
const mapDispatchToProps = dispatch =>({
    GetUsersGoods: e =>dispatch(GetUsersGoods( e ))
})

export default connect(mapStateToProps,mapDispatchToProps)(ListOfGoods)