import React, { Component } from 'react';
import { GetAllCategories } from '../../actions/goodAction';



export class ListOfCategories extends Component{
    componentDidMount(){
        this.props.GetAllCategories()
    }

    render(){
        return(
            <div className="list_of_categories_wrap">

            </div>
        )
    }
}