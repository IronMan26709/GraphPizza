import React, { Component } from 'react';
import { ImagePreview } from '../../components/ImagePreview';
import { connect } from 'react-redux';
import { GetAllPhotos } from '../../actions/goodAction';


class ListOfPhotos extends Component{
    componentDidMount(){
        this.props.GetAllPhotos()
    }
    
    render () {
        const { arrayPhotos } = this.props
        console.log( "Array with photos",arrayPhotos)
        return(
            <div className="list_of_photos">
                    { arrayPhotos.map( el => <ImagePreview  key={el._id} props={el} />)  }
            </div>
        )
    }
}


const mapStateToProps = state =>({
    arrayPhotos : state.orderReducer.arrayPhotos
})

const mapDispatchToProps = dispatch =>({
    GetAllPhotos: () => dispatch( GetAllPhotos () )
})
export default connect(mapStateToProps, mapDispatchToProps)(ListOfPhotos)