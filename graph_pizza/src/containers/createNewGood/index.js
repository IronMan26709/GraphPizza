import React from 'react';
import CreateNewGoodForm from '../../components/forms/CreateNewGood/';
import { connect } from 'react-redux';
import { NewGood } from '../../actions/goodAction';
 

const CreateNewGood = props => {
    const { newOrderSucс } = props
    const handelSubmit = values => {
        const { price, name, description, images, textOfPhoto, categories, id } = values
        const pricce = Number(price)
        const val = {
            "price" : pricce,
            "name" : name,
            "description" : description,
            "image" : images,
            "textOfPhoto" : textOfPhoto,
            "categories" : categories,
            "id" : id
        }
        props.NewGood( val )
      };
      if ( newOrderSucс === true ) return props.history.push("/")
    return(
        <div className="create_new_good_comp">
                <CreateNewGoodForm onSubmit={ e => handelSubmit(e)}/>
        </div>
    )
}

const mapDispatchStateToProps = dispatch =>({
    NewGood: e => dispatch(NewGood(e))
})
const mapStateToProps = state => ({
    newOrderSucс: state.orderReducer.newOrderSucс
})
export default connect (mapStateToProps, mapDispatchStateToProps)(CreateNewGood)