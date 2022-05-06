import React from 'react';
import {Route} from "react-router-dom";

const Welcome = () => {
    return (
        <section>
            <h2>The welcome page.</h2>
            <Route path='/welcome/new-user'>
                <p>Welcome, new user!</p>
            </Route>
        </section>
    );
};

export default Welcome;
