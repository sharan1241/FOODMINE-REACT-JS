import React from 'react'
import classes from './header.module.css'
import { Link } from 'react-router-dom'

export default function Header() {
    const user = {
        name:"sharan"
    }
    const cart={
        totalCount:10
    }
    const logout=()=>{

    }
  return <header className={classes.header}>
    <div className={classes.container}>
    <Link to="/" className={classes.logo}>
        Food Mine!
    </Link>
    <nav>
        <ul>
            {
               user?(
               <li className={classes.menu_container}>
                <Link to="/profile">{user.name}</Link>
                <div className={classes.menu}>
                    <Link to="/profile">profile</Link>
                    <Link to="/orders">orders</Link>
                    <a onClick={logout}>logout</a>
                </div>
               </li>
               ):(
               <Link to="/login">login</Link>
            )}
            <li>
                <Link to="/cart">
                    cart
                    {cart.totalCount > 0 && <span className={classes.cart_count}>{cart.totalCount}</span>}
                </Link>
            </li>
        </ul>
    </nav>
    </div>
  </header>
}
