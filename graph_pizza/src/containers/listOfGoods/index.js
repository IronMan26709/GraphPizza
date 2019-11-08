import React, {Component } from 'react';
import { connect } from 'react-redux';
import { GetUsersGoods } from '../../actions/goodAction';
import { GoodPreview } from '../../components/goodPreview'; 

class ListOfGoods extends Component {
    componentDidMount(){
        this.props.GetUsersGoods()
    }
    render(){
        const{ arrayGoods } = this.props
        console.log("arrayGoods in listComponent", arrayGoods )
        return(
            <div className="list_of_goods">
                { arrayGoods.map( el => <GoodPreview  key={el._id} props={el} /> )}
            </div> 
        )
    }
}

const mapStateToProps = state =>({
    arrayGoods : state.orderReducer.arrayGoods
})
const mapDispatchToProps = dispatch =>({
    GetUsersGoods: ()=>dispatch(GetUsersGoods())
})

export default connect(mapStateToProps,mapDispatchToProps)(ListOfGoods)