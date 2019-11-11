import React from 'react';
import { connect }  from 'react-redux';
import { makeOrder } from '../../actions/goodAction'
  
const Cart = props =>{
    const { cart, arrayGoods } = props
    const clickMakeOrder = () =>{
        
    const val = { "orderGoods" : cart }
    props.makeOrder(val)
    // console.log("click", val)
    }
    
    return(
        <div className="cart_wrap">
            <div className="carts_header">
                <span>
                    Карзина
                </span>
            </div>
            <div className="list_of_orders_wrap">
                { cart && cart.map( el => 
                <div>
                    <span>{el.count}</span>
                    <span>  { arrayGoods && arrayGoods.find( good => good._id ===  el.good._id ).name  } </span>
                </div>)  }
            </div>
            <div className="action_block_wrap">
                <button onClick={clickMakeOrder}>Купить</button>
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch =>({
    makeOrder : e => dispatch( makeOrder( e ) ) 
})

const mapStateToProps = state =>({
    cart : state.orderReducer.cart,
    arrayGoods : state.orderReducer.arrayGoods
})
export default connect ( mapStateToProps, mapDispatchToProps)(Cart)