import React,{ useState }  from "react";
import { connect } from "react-redux";
import LogInForm from "../../components/forms/LogIn";
import { Auth, GetUsersInfo, GetGoods,GetCategoriById,GetAllPhotos,GetOWnersPhotos,GetUsersGoods } from "../../actions/userAction";
import Button from "../../components/Button/Button";

const LogInComponent = props => {
   const [ Val, setInpVal ] = useState( "" )
  const handelSubmit = values => {
    //    console.log(values)
    props.Auth(values);
  };
  const click = () => {
    props.GetUsersInfo();
  };
  const clickGoods = () => {
    props.GetGoods();
  };

  const changeCategories = event => {
      console.log( event.currentTarget.value )
      setInpVal(event.currentTarget.value )
    
  };
  const clickInput = () =>{
      console.log("input",Val)
    props.GetCategoriById(Val)
  } 
  const photoOnchange  =  async  event => {
    event.preventDefault()
    console.log(event.currentTarget)
    fetch('/upload', {
        method: "POST",
        headers: localStorage.JwtToken ? {Authorization: 'Bearer ' + localStorage.JwtToken} : {},
        body: new FormData(event.currentTarget)
    })  
  } 


  
  const getPhotos = () =>{
    console.log("клик")
    props.GetAllPhotos()
  }
 
  const getMyPhotos = () =>{
    
    props.GetOWnersPhotos(Val)
  }



const getUsersOrders = () => {
  props.GetUsersGoods(Val)
}
  


  return (
    <>
      <LogInForm onSubmit={handelSubmit} />
      <button onClick={click}>Users</button>
      <button onClick={clickGoods}>Goods</button>
      {/* <img
        src={
          "http://shop.asmer.fs.a-level.com.ua/" +
          "images/0bb6a38293dbb44c7688440909b1d1f8"
        } */}
      <input type="string" onChange={e =>changeCategories(e)}/>
      <button onClick={clickInput}>Input</button>

      <form action="/upload" method="post" onSubmit={e => photoOnchange(e)}  encType="multipart/form-data" id='form'>
        <input type="file" name="photo" id='photo'/>
        <button>SUBMIT</button>
      </form>

      <button onClick={getPhotos}>GetAllPhotos</button>
      <button onClick={getMyPhotos}>My Photos</button>
      <button onClick={getUsersOrders}>UsersOrders </button>

    </>
  );
};

const mapDispatchToProps = dispatch => ({
  Auth: e => dispatch(Auth(e)),
  GetUsersInfo: e => dispatch(GetUsersInfo(e)),
  GetGoods: e => dispatch(GetGoods(e)),
  GetCategoriById: e =>dispatch(GetCategoriById(e)),
  GetAllPhotos: e =>dispatch(GetAllPhotos(e)),
  GetOWnersPhotos: e =>dispatch(GetOWnersPhotos(e)),
  GetUsersGoods: e =>dispatch(GetUsersGoods(e))  
});

export default connect(
  null,
  mapDispatchToProps
)(LogInComponent);
