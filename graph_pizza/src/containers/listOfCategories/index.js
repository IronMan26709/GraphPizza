import React, { Component } from 'react';
import { GetAllCategories } from '../../actions/goodAction';
import { CategoryPreview } from '../../components/categoryPrewiev';
import { connect } from 'react-redux';
import './LIstOfCAtegories.css';
 

class ListOfCategories extends Component{
    componentDidMount(){
        this.props.GetAllCategories()
    }

    render(){
        const { arrayCategories } = this.props
        return(
            <div className="list_of_categories_wrap">
                { arrayCategories.map( el =><CategoryPreview  key={el._id} props={el} /> )}
            </div>
        )
    }
}

const mapDispatchToProps = dispatch =>({
    GetAllCategories: () => dispatch(GetAllCategories())
})
const mapStateToProps = state =>({
    arrayCategories : state.orderReducer.arrayCategories
})

export default connect (mapStateToProps, mapDispatchToProps)(ListOfCategories)