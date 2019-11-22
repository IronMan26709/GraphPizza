import React, { useState } from 'react';
import { connect } from 'react-redux';
import { GetUsersGoods } from '../../actions/goodAction';
import  GoodComponent  from '../../containers/GoodComponent';
import './listOfGoods.css'

const ListOfGoods = props =>  {
    
    const[ param , setParam ] = useState( "" )
    const newParam = props.match.params.id
        if ( newParam !== param ) {
            props.GetUsersGoods(newParam)
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