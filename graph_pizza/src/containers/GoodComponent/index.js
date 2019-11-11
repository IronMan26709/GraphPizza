import React, { useState }  from 'react';
import { addGoodInCart } from '../../actions/goodAction';
import { connect } from 'react-redux';





const GoodComponent = props =>{
    const { addGoodInCart } = props
    const [ counter , setCounter ] = useState( 1 )
    const incr = () => { setCounter( counter + 1) }
    const decr = () => { if( counter > 1 ) setCounter( counter - 1) }

    const{ images, name, description, price, _id} = props.props
   
    const ShopToCart = () =>{
        const val =[{
            "count" : counter,
            "good" : {
                "_id" : _id
            }
        }]
        console.log(val)
        addGoodInCart(val)
    }
    return (
        <div className="order_component_wrap">
            <div className="img_wrap">
                { images  && images !== null && images.length !== 0 && <div >
                { images.map(img => 
                        <div>
                            {img.url !== null && 
                            <img alt="goodPhoto" 
                                    key={img._id}
                                    src={`http://shop-roles.asmer.fs.a-level.com.ua/${img.url}`} />
                                    }
                        </div> )} 
                </div> }
            </div>
            <div className="good_name_wrap">
                <span>{name}</span>
            </div>
            <div className="description_wrap">
                <div>{description}</div>
            </div>
            <div className="prise_wrap">
                <div>Цена : {price} грн</div>
                
            </div>
            <div className="order_block_wrap">
                <div className="counter">
                    <div className="counter_incr" onClick={() =>incr ()}> + </div>
                    <div className="counter">{counter}</div>
                    <div className="counter_dicr" onClick={() => decr()}> - </div>
                </div>
                <div className="wish_button_wrap">
                    <button onClick={ () =>ShopToCart()}>Хочу</button>
                </div>

            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    addGoodInCart : e => dispatch( addGoodInCart ( e ) )
})



export default connect(null, mapDispatchToProps )(GoodComponent)