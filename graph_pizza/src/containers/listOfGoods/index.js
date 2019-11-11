import React, {Component } from 'react';
import { connect } from 'react-redux';
import { GetUsersGoods } from '../../actions/goodAction';
// import { GoodPreview } from '../../components/goodPreview'; 
import  GoodComponent  from '../../containers/GoodComponent';
// import { newGoodInCart } from '../../actions/goodAction'
import Cart from '../Cart'

class ListOfGoods extends Component {
    componentDidMount(){
        this.props.GetUsersGoods()
    }
    render(){
        const{ arrayGoods, cart } = this.props
        console.log(cart)
        return(
            <div className="list_of_goods">
                <Cart/>
                { arrayGoods.map( el => <GoodComponent key={el._id} props={el} /> )}
            </div> 
        )
    }
}

const mapStateToProps = state =>({
    arrayGoods : state.orderReducer.arrayGoods,
    cart : state.orderReducer.cart
})
const mapDispatchToProps = dispatch =>({
    GetUsersGoods: ()=>dispatch(GetUsersGoods()),
    // newGoodInCart : e => dispatch( newGoodInCart ( e ) )
})

export default connect(mapStateToProps,mapDispatchToProps)(ListOfGoods)