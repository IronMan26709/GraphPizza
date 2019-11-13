import React from 'react';
import { connect }  from 'react-redux';
import { makeOrder,
         clearArrayGoods, 
         incCountTheItemCart,
         decCountTheItemCart,
         delTheItemfromCart } from '../../actions/goodAction';
  
const Cart = props =>{
    const { cart, arrayGoods} = props
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
                <div key={el._id}>
                    <div>{el._id}</div>
                    <div className="counter">
                        <div id={el._id} onClick={ id => incr( id ) }> + </div>
                        <div>{el.count}</div>
                        <div id={el._id} onClick={ id => decr( id ) }> - </div>
                        <div id={el._id} onClick={ id => del( id ) }> Del </div>                        
                    </div>
                </div>)  }
            </div>
            
            <div className="action_block_wrap">
               {cart.length > 0 &&  <button onClick={clickMakeOrder}>Купить</button>}
                <button onClick={clearCart}>Очистить карзину</button>
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch =>({
    makeOrder : e => dispatch( makeOrder( e )),
    clearArrayGoods : () => dispatch(clearArrayGoods()),
    incCountTheItemCart : e => dispatch(incCountTheItemCart( e )),
    decCountTheItemCart : e => dispatch(decCountTheItemCart( e )),
    delTheItemfromCart : e => dispatch( delTheItemfromCart( e ))
})

const mapStateToProps = state =>({
    item : state.orderReducer.item,
    cart : state.orderReducer.cart,
    arrayGoods : state.orderReducer.arrayGoods
})
export default connect ( mapStateToProps, mapDispatchToProps)(Cart)