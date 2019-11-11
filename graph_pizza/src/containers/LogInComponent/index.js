import React,{ useState }  from "react";
import { connect } from "react-redux";
import LogInForm from "../../components/forms/LogIn";
import { Auth, GetUsersInfo,
  //  GetGoods,
   GetCategoriById,
   GetAllPhotos,
   GetOWnersPhotos,
   UserUpsert } from "../../actions/userAction";

import { GetUsersGoods } from '../../actions/goodAction'
 

const LogInComponent = props => {
   const [ Val, setInpVal ] = useState( "" )
  const handelSubmit = values => {
    props.Auth(values);
  };
  const click = () => {
    props.GetUsersInfo();
  };
  const clickGoods = () => {
    props.GetUsersGoods();
  };

  const changeCategories = event => {
      setInpVal(event.currentTarget.value )
    
  };
  const clickInput = () =>{
    props.GetCategoriById(Val)
  } 
  
  const photoOnchange  =  async  event => {
    event.preventDefault()
    fetch('/upload', {
        method: "POST",
        headers: localStorage.JwtToken ? {Authorization: 'Bearer '  +localStorage.JwtToken} : {},
        body:  new FormData(event.currentTarget)
    })
    console.log(event.currentTarget)
  }  


  


  const UpsertUser = () =>{
    props.UserUpsert(Val)
  }


const getUsersOrders = () => {
  props.GetUsersGoods(Val)
}
  


  return (
    <>
      <LogInForm onSubmit={handelSubmit} />
      <button onClick={click}>Users</button>
      <button onClick={clickGoods}>Goods</button>
    
      <input type="string" onChange={e =>changeCategories(e)}/>
      <button onClick={clickInput}>Input</button>

      <form action="/upload" method="post" onSubmit={e => photoOnchange(e)}  encType="multipart/form-data" id='form'>
        <input type="file" name="photo" id='photo'/>
        <button>SUBMIT</button>
      </form>

      <button onClick={getUsersOrders}>UsersOrders </button>

      <div className="upsert_user" >
        <button onClick={UpsertUser}>Upsert user</button>
      </div>

    </>
  );
};

const mapDispatchToProps = dispatch => ({
  Auth: e => dispatch(Auth(e)),
  GetUsersInfo: e => dispatch(GetUsersInfo(e)),
  // GetGoods: () => dispatch(GetGoods()),
  GetCategoriById: e =>dispatch(GetCategoriById(e)),
  // GetAllPhotos: e =>dispatch(GetAllPhotos(e)),
  // GetOWnersPhotos: e =>dispatch(GetOWnersPhotos(e)),
  GetUsersGoods: e =>dispatch(GetUsersGoods(e)),  
  UserUpsert : e => dispatch( UserUpsert (e))
});

export default connect(
  null,
  mapDispatchToProps
)(LogInComponent);
