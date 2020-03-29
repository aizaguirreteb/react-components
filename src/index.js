import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
/**
 * to import one of our components in our project we have to indicate 
 * the route to the file. It doesn't have to have the '.js' termination
 */
import CommentDetail from './CommentDetail';

const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetail author="Sam"
                timeAgo="Today at 4:45PM"
                commentText="Great course!"
                avatar={faker.image.avatar()} />
            <CommentDetail author="Alex"
                timeAgo="Today at 2:00PM"
                commentText="Nice blog" 
                avatar={faker.image.avatar()}/>
            <CommentDetail author="Jane"
                timeAgo="Today at 5:00PM"
                commentText="Could you do another one?" 
                avatar={faker.image.avatar()}/>
        </div>
    );
}

ReactDOM.render(<App />, document.querySelector('#root'));