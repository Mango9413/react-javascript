import React, {Fragment} from 'react';
import MainNavigation from "./MainNavigation";

import classes from './Layout.module.css'

const Layout = (props) => {
    return (
        <div>
            <Fragment>
                <MainNavigation/>
                <main className={classes.main}>{props.children}</main>
            </Fragment>
        </div>
    );
};

export default Layout;
