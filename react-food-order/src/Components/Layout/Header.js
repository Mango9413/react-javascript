import React, {Fragment} from 'react';
import mealsImage from '../../assets/meals.jpg'
import HeaderCardButton from "./HeaderCardButton";

import classes from "./Header.module.css"

const Header = (props) => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>FancyOrder</h1>
                <HeaderCardButton onClick={props.onShowCart}/>
            </header>
            <div className={classes['main-image']}>
                <img src={mealsImage} alt='A table full of delicious food!'/>
            </div>
        </Fragment>
    );
};

export default Header;