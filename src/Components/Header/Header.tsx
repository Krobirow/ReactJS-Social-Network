import React, { FC } from 'react';
import s from './header.module.css';
import { NavLink } from 'react-router-dom';
import { HeaderMapDispatchToPropsType, HeaderMapStateToPropsType } from './HeaderContainer';

const Header: FC<HeaderMapStateToPropsType & HeaderMapDispatchToPropsType> = ({ isAuth, login, startLogout }) => {
	return (
		<header className={s.header}>
			<img
				src='https://www.designfreelogoonline.com/wp-content/uploads/2017/05/000840-Infinity-logo-maker-Free-infinito-Logo-design-06.png'
				alt=''
				width='100'
				height='50'
			/>
			<div className={s.loginBlock}>
			{ isAuth 
				? <div> {login} - <button onClick={startLogout}>Log out</button> </div>
				: <NavLink to={'/login'}>Login</NavLink> }
			
			</div>
		</header>
	);
};

export default Header;
