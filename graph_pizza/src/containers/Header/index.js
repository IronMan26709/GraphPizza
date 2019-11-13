import React from 'react';
import { Link } from 'react-router-dom';
import  Cart  from '../Cart';
import { connect } from 'react-redux';
import { LogOut } from '../../actions/userAction'
  

const Header = props => {
    const { logined } = props
    const logOut = () =>{
        props.LogOut()
    }
    return(
        <header className="header_wrap">
            <div><Link to="/"> На главную </Link></div>
            {/* { logined && <Cart/>} */}
            <div className="nav_wrap">
                <ul>
                    <li><Link to="/goods/5dc94bd00e36db246e3049ee"> Пицца </Link></li>
                    <li><Link to="/goods/5dcabeeb6d09c45440d14cf6"> Лапша </Link></li>
                    <li><Link to="/goods/5dcac6cf6d09c45440d14cfd"> Напитки </Link></li>
                    <li><Link to="/goods/5dcacaeb6d09c45440d14d04"> Салаты </Link></li>
                    <li><Link to="/goods/5dcadc906d09c45440d14d11"> Суши </Link></li>
                    
                </ul>
                <Link to="/cart">Карзина</Link>
            </div>
            <div className="admin_bord">
                <li className="log_out_btn" onClick={()=>logOut()} > Выйти </li>
                <li className="log_in_btn" ><Link to="/login">Войти</Link></li>
                <li className="log_in_btn" ><Link to="/SignUp">Регистрация</Link></li>
            </div>
        </header>
    )
}
const mapSateToProps = state => ({
    logined : state.userReducer.logined
})
const mapDispatchToProps = dispatch =>({
    LogOut : () => dispatch(LogOut())
})
export default connect (mapSateToProps, mapDispatchToProps)(Header)