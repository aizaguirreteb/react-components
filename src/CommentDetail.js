import React from 'react';
import faker from 'faker';

const CommentDetail = (props) => {
    return (
        <div className="comment">
            <a href="/" className="avatar">
                <img alt="avatar" src={props.avatar} />
            </a>
            <div className="content">
                <a href="/" className="author">
                    {props.author}
                    </a>
                <div className="metadata">
                    <span className="date">{props.timeAgo}</span>
                </div>
                    <div className="text">{props.commentText}</div>
            </div>
        </div>
    );
}
/**
 * To be able to use this component in the rest of the app
 * we have to add an export of it
 */
export default CommentDetail;