//domain.com/news/something-important
import React from 'react';
import {useRouter} from "next/router";

const DetailPage = () => {
    const router = useRouter()

    const newsId = router.query.newsId;
    //send a request to backend api to fetch the news item with newsId

    return (
        <h1>The Detail Page</h1>
    );
};

export default DetailPage;