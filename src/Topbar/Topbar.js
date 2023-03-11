import React from "react";

import classes from './Topbar.module.css';

const Topbar = ()=>{
    return(
        <header>
        <nav className={classes.Topbar }>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy8L1HIH2ZlhTcSR2x5c993GIA6DFFs06YEg&usqp=CAU" alt="Amazon logo" />
        </nav>
        </header>
    )
}

export default Topbar;