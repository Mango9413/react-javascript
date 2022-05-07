import {useCallback, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import LoadingSpinner from "../UI/LoadingSpinner";
import NewCommentForm from './NewCommentForm';
import useHttp from "../../hooks/use-http";
import {getAllComments} from "../../lib/api";
import CommentsList from "./CommentsList";

import classes from './Comments.module.css';

const Comments = () => {
    const [isAddingComment, setIsAddingComment] = useState(false);

    const params = useParams()

    const {quoteId} = params

    const {sendRequest, status, data:loadedComments} = useHttp(getAllComments)

    useEffect(()=>{
        sendRequest(quoteId)
    }, [sendRequest, quoteId])

    const startAddCommentHandler = () => {
        setIsAddingComment(true);
    };

    //需使用useCallback，让此函数不是每次都新建：
    // NewCommentForm的useEffect里使用onAddComment作为dependency，否则会触发无限循环
    const addedCommentHandler = useCallback(() => {
        sendRequest(quoteId)
    }, [sendRequest, quoteId])

    let comments;

    if (status === 'pending') {
        comments = <div className='centered'>
            <LoadingSpinner/>
        </div>
    }

    if (status === 'completed' && (loadedComments && loadedComments.length > 0)) {
        comments = <CommentsList comments={loadedComments}/>
    }

    if (status === 'completed' && (!loadedComments || loadedComments.length === 0)) {
        comments = <p>No comments were added yet.</p>
    }

    return (
        <section className={classes.comments}>
            <h2>User Comments</h2>
            {!isAddingComment && (
                <button className='btn' onClick={startAddCommentHandler}>
                    Add a Comment
                </button>
            )}
            {isAddingComment &&
                <NewCommentForm
                    quoteId={quoteId}
                    onAddedComment={addedCommentHandler}
                />}
            {comments}
        </section>
    );
};

export default Comments;
