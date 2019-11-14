import React from 'react';
import { Link } from 'react-router-dom';
import  Cart  from '../Cart';
import { connect } from 'react-redux';
import { LogOut } from '../../actions/userAction';
import './Header.css';
import backImg  from '../../img/left.png';
import cartImg from '../../img/cart-4.png';
  

const Header = props => {
    const { logined, cart, userInfo } = props
    const userNick = localStorage.userNick
    const count = cart.length 
    const logOut = () =>{
        props.LogOut()
    }
    return(
        <header className="header_wrap">
            
            {/* { logined && <Cart/>} */}
          
            <div className="admin_bord">
                <ul>
    { logined && <li className="admin_btn" onClick={()=>logOut()} ><div className="linc">Выйти</div></li> }    
{ logined  ? <li className="admin_btn">{userNick}</li> : <li className="admin_btn" ><Link to="/login"><div className="linc">Войти</div ></Link></li>} 
{ !logined && <li className="admin_btn" ><Link to="/SignUp"><div className="linc">Регистрация</div></Link></li> }   
                </ul> 
            </div>
            
            <Link className="home_link" to="/"><img src={backImg} className="back"/></Link>
            <Link className="cart_img" to="/cart">
                { count > 0 && <div className="cart_counter">{count}</div> }
                <img src={cartImg} />
            </Link>
            <div className="nav_wrap">
                <ul>
                    <li><Link to="/goods/5dc94bd00e36db246e3049ee"> Пицца </Link></li>
                    <li><Link to="/goods/5dcabeeb6d09c45440d14cf6"> Лапша </Link></li>
                    <li><Link to="/goods/5dcac6cf6d09c45440d14cfd"> Напитки </Link></li>
                    <li><Link to="/goods/5dcacaeb6d09c45440d14d04"> Салаты </Link></li>
                    <li><Link to="/goods/5dcadc906d09c45440d14d11"> Суши </Link></li>
                    
                </ul>
            </div>
        </header>
    )
}
const mapSateToProps = state => ({
    logined : state.userReducer.logined,
    cart : state.orderReducer.cart,
    userInfo : state.userReducer.userInfo
})
const mapDispatchToProps = dispatch =>({
    LogOut : () => dispatch(LogOut())
})
export default connect (mapSateToProps, mapDispatchToProps)(Header)