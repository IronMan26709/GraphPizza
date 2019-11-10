import React, {Component } from 'react';
import { connect } from 'react-redux';
import { GetOrders } from '../../actions/goodAction';
import { OrderPreview } from '../../components/orderPreview'; 

class ListOfOrders extends Component {
    componentDidMount(){
        this.props.GetOrders()
    }
    render(){
        const{ arrayOrders } = this.props
        return(
            <div className="list_of_goods">
                { arrayOrders.map( el => <OrderPreview  key={el._id} props={el} /> )}
            </div> 
        )
    }
}

const mapStateToProps = state =>({
    arrayOrders : state.orderReducer.arrayOrders
})
const mapDispatchToProps = dispatch =>({
    GetOrders: ()=>dispatch(GetOrders())
})

export default connect(mapStateToProps,mapDispatchToProps)(ListOfOrders)