import React from "react";
import classes from './Topbar.module.css'

const Topbar = () => {
    return (
        <header>
            <nav className={classes.Topbar}>
                <img src="https://www.pngall.com/wp-content/uploads/15/Amazon-Logo-White-Transparent.png" alt="Amazon Logo" />
            </nav>
        </header>
    )
}
export default Topbar;