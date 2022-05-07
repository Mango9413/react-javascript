import React from 'react';
import {Route, Routes} from "react-router-dom";

const Welcome = () => {
    return (
        <section>
            <h2>The welcome page.</h2>
            <Routes>
                {/*You won't need custom path resolving the route inside parents*/}
                <Route path='new-user' element={<p>Welcome, new user!</p>} />
            </Routes>
        </section>
    );
};

export default Welcome;
