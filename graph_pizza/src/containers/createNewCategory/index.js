import React from 'react';
import CreateNewCategoryForm from '../../components/forms/CreateNewCategory';
import { connect } from 'react-redux';
import { NewCategory } from '../../actions/goodAction';
 

const CreateNewCategory = props => {
    const handelSubmit = values => {
      
        props.NewCategory( values )
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
})
export default connect (mapStateToProps, mapDispatchStateToProps)(CreateNewCategory)