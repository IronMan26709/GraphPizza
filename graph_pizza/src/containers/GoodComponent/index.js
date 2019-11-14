import React, { useState }  from 'react';
import { addGoodInCart } from '../../actions/goodAction';
import { connect } from 'react-redux';
import './GooodComponent.css';
import  Button  from '../../components/Button/Button'





const GoodComponent = props =>{
    const [ counter , setCounter ] = useState( 1 )
    const incr = () => { setCounter( counter + 1) }
    const decr = () => { if( counter > 1 ) setCounter( counter - 1) }

    const{ images, name, description, price, _id} = props.props
   
    const ShopToCart = () =>{
        const val = { 
            "_id" : _id,
            "count" : counter 
        }
        props.addGoodInCart(val) 
    
        
    }
    return (
        <div className="order_component_wrap">
            <div className="img_wrap">
                { images  && images !== null && images.length !== 0 && <div >
                { images.map(img => <>
                     {img.url !== null && 
                            <img alt="goodPhoto" 
                                    key={img._id}
                                    alt="good"
                                    src={`http://shop-roles.asmer.fs.a-level.com.ua/${img.url}`} />
                                    }
                    </> )} 
                </div> }
            </div>
            <div className="good_name_wrap">
                <h3>{name}</h3>
            </div>
            <div className="description_wrap">
                <span>{description}</span>
            </div>
            <div className="prise_wrap">
                <h5>Цена : {price} грн</h5>
                
            </div>
            <div className="order_block_wrap">
                <div className="counter">
                    <div className="counter_incr" onClick={() =>incr ()}>
                        <span>+</span>
                    </div>
                    <div className="counter_display">{counter}</div>
                    <div className="counter_dicr" onClick={() => decr()}><span>-</span> </div>
                </div>
                <div className="wish_button_wrap">
                 { props.logined ?  <Button onClickFunc={ () =>ShopToCart()} text="Хочу"/> : <span>Для добавления товара, авторизуйтесь!</span> }
                </div>

            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    addGoodInCart : e => dispatch( addGoodInCart ( e ) )
})

const mapStateToProps = state =>({
    logined : state.userReducer.logined
})

export default connect(mapStateToProps, mapDispatchToProps )(GoodComponent)