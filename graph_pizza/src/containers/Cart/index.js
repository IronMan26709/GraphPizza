import React from 'react';
import { connect }  from 'react-redux';
import { makeOrder,
         clearArrayGoods, 
         incCountTheItemCart,
         decCountTheItemCart,
         delTheItemfromCart,
         getTheGood,
         delTheItemfromCurrentGoodArray } from '../../actions/goodAction';
import { Redirect } from "react-router-dom"        
import './Cart.css' 
  
const Cart = props =>{
    const { cart, arrayGoods, orderSuccess,
        currentGood, getTheGoodDun } = props
    const length = cart.length

    const IDs = cart.map( goodId => goodId._id )
    !getTheGoodDun && cart.length > 0 &&  props.getTheGood(IDs)
    
    const clickMakeOrder = () =>{
    const cartArray =  cart.map ( orderItem =>  
        ({  "count" : orderItem.count,
            "good" : { "_id" : orderItem._id }
        }) )
    const val = { "orderGoods" : cartArray }                                            
    props.makeOrder(val)
    }
    const clearCart = () =>{
        props.clearArrayGoods()
    }
    const incr = event =>{
        props.incCountTheItemCart(event.target.id)
    }
    const decr = event =>{
        props.decCountTheItemCart(event.target.id)
    }
    const del = event =>{
        props.delTheItemfromCart(event.target.id)
        props.delTheItemfromCurrentGoodArray(event.target.id)
    } 
if ( orderSuccess === true ) { return <Redirect to="/"/> }
    return(
        <div className="cart_wrap">
           { length === 0 && <div className="carts_header">
                <span>
                    Пока нет товаров
                </span>
            </div>}
            <div className="list_of_orders_wrap">
                <div className="nameBlock">
                    {currentGood.map( ell =>
                        <div key={ell._id}>{ell.name}</div>
                    )}
                </div>
                <div className="counterBlock">
                { cart && cart.map( el => 
                    <div key={el._id} className="counter">
                        <div className="counter_incr_cart" id={el._id} onClick={ id => incr( id ) }> + </div>
                        <div>{el.count}</div>
                        <div className="counter_dicr_cart" id={el._id} onClick={ id => decr( id ) }> - </div>
                        {/* <div className="del_button_the_good_in_cart" id={el._id} onClick={ id => del( id ) }> Del </div>                         */}
                    </div>
                )  }
                </div>
                
            </div>
            
            <div className="action_block_wrap">
               {cart.length > 0 &&  <button onClick={clickMakeOrder}>Купить</button>}
               {cart.length > 0 &&  <button onClick={clearCart}>Очистить карзину</button>} 
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch =>({
    makeOrder : e => dispatch( makeOrder( e )),
    clearArrayGoods : () => dispatch(clearArrayGoods()),
    incCountTheItemCart : e => dispatch(incCountTheItemCart( e )),
    decCountTheItemCart : e => dispatch(decCountTheItemCart( e )),
    delTheItemfromCart : e => dispatch( delTheItemfromCart( e )),
    getTheGood : e => dispatch(getTheGood(e)),
    delTheItemfromCurrentGoodArray : e => dispatch(delTheItemfromCurrentGoodArray( e ))
})

const mapStateToProps = state =>({
    item : state.orderReducer.item,
    cart : state.orderReducer.cart,
    arrayGoods : state.orderReducer.arrayGoods,
    orderSuccess : state.orderReducer.orderSuccess,
    currentGood : state.orderReducer.currentGood,
    getTheGoodDun : state.orderReducer.getTheGoodDun
})
export default connect ( mapStateToProps, mapDispatchToProps)(Cart)