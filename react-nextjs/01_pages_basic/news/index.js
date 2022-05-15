//domain.com/news
import React, {Fragment} from 'react';
import Link from "next/link";

const NewsPage = () => {
    return (
        <Fragment>
            <h1>The News Page</h1>
            <ul>
                <li>
                    <Link herf='/news/nextjs-is-a-great-framework'>
                        Nextjs is A Great Framework
                    </Link>
                </li>
                <li>Something Else</li>
            </ul>
        </Fragment>
    );
};

export default NewsPage;
