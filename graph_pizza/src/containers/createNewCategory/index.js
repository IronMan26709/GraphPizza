import React from 'react';
import CreateNewCategoryForm from '../../components/forms/CreateNewCategory';
import { connect } from 'react-redux';
import { NewCategory } from '../../actions/goodAction';
 

const CreateNewCategory = props => {
    // const { newOrderSucс } = props
    const handelSubmit = values => {
        // const { name, id, idGood } = values
        // const pricce = Number(price)
        // const val = {
        //     "price" : pricce,
        //     "name" : name,
        //     "description" : description,
        //     "image" : images,
        //     "textOfPhoto" : textOfPhoto,
        //     "categories" : categories
        // }
        props.NewCategory( values )
        console.log(props)
      };
    //   if ( newOrderSucс === true ) return  props.history.push("/")
    return(
        <div className="create_new_good_comp">
                <CreateNewCategoryForm onSubmit={ e => handelSubmit(e)}/>
        </div>
    )
}

const mapDispatchStateToProps = dispatch =>({
    NewCategory: e => dispatch(NewCategory(e))
})
const mapStateToProps = state => ({
    newOrderSucс: state.orderReducer.newOrderSucс
})
export default connect (mapStateToProps, mapDispatchStateToProps)(CreateNewCategory)