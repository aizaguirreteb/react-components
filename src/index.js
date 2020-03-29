import React from 'react';
import ReactDOM from 'react-dom';

/**
 * to import one of our components in our project we have to indicate 
 * the route to the file. It doesn't have to have the '.js' termination
 */
import CommentDetail from './CommentDetail';

const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetail author="Sam"/>
            <CommentDetail author="Alex"/>
            <CommentDetail author="Jane"/>
        </div>
    );
}

ReactDOM.render(<App />, document.querySelector('#root'));