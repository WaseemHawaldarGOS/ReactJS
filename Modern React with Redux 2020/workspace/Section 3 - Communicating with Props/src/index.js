import React from 'react';
import ReactDOM from 'react-dom';
 // eslint-disable-next-line
import faker from 'faker';
// eslint-disable-next-line
import CommentDetailWithHardcodeValues from './CommentDetailWithHardcodeValues';
import CommentDetailWithProps from './CommentDetailWithProps';
import ApprovalCard from './ApprovalCard';

// eslint-disable-next-line
{/*Below App component can be used to check whether semantic has been loaded successfully.
const App = () => {
    return <div> Hi there!</div>;
};*/}


// eslint-disable-next-line
{/*Below App component is to show how bad a code can be when we use duplicate code.
const App = () => {
    return (
        <div className="ui container comments">
            <div className="comment">
              <a href="/" className="avatar">
                <img alt="avatar" src={faker.image.avatar()} />
              </a>
              <div className="content">
                <a href="/" className="author">
                  Sam
                </a>
                <div className="metadata">
                  <span className="date">Today at 6:00PM</span>
                </div>
                <div className="text">Nice Blog Post!</div>
              </div>
            </div>
            <div className="comment">
              <a href="/" className="avatar">
                <img alt="avatar" src={faker.image.avatar()} />
              </a>
              <div className="content">
                <a href="/" className="author">
                  Sam
                </a>
                <div className="metadata">
                  <span className="date">Today at 6:00PM</span>
                </div>
                <div className="text">Nice Blog Post!</div>
              </div>
            </div>
            <div className="comment">
              <a href="/" className="avatar">
                <img alt="avatar" src={faker.image.avatar()} />
              </a>
              <div className="content">
                <a href="/" className="author">
                  Sam
                </a>
                <div className="metadata">
                  <span className="date">Today at 6:00PM</span>
                </div>
                <div className="text">Nice Blog Post!</div>
              </div>
            </div>
        </div>

    );
}*/}


// eslint-disable-next-line
{/*Below App component how we can just move Reusable code to different component yet hardcode and invoke it.
const App = () => {
    return (
    <div className="ui container comments">
        <CommentDetailWithHardcodeValues/>
        <CommentDetailWithHardcodeValues/>
        <CommentDetailWithHardcodeValues/>
        <CommentDetailWithHardcodeValues/>
        <CommentDetailWithHardcodeValues/>
    </div>
    );
}*/}


// eslint-disable-next-line
{/*Below App component shows how to pass values as props instead of hardcoded values.
const App = () => {
    return (
    <div className="ui container comments">
        <CommentDetailWithProps author="Sam" timeAgo="Today at 4:45PM" comment="Good Read!" profilePic={faker.image.avatar()}/>
        <CommentDetailWithProps author="Alex" timeAgo="Today at 9PM" comment="Nice Post!" profilePic={faker.image.avatar()}/>
        <CommentDetailWithProps author="Jane" timeAgo="Yesterday at 2AM" comment="Lot to Learn!" profilePic={faker.image.avatar()}/>
    </div>
    );
}*/}

// eslint-disable-next-line
{/*Below App component shows how to pass component as props
to another component and access it as a children.*/}
const App = () => {
    return (
    <div className="ui container comments">
        <ApprovalCard>
            <h4>
                Warning!
            </h4>
            Are you sure you want to do this?
        </ApprovalCard>
        <ApprovalCard>
            <CommentDetailWithProps
                author="Sam"
                timeAgo="Today at 4:45PM"
                comment="Good Read!"
                profilePic={faker.image.avatar()}
            />
        </ApprovalCard>
        <ApprovalCard>
        <CommentDetailWithProps
            author="Alex"
            timeAgo="Today at 9PM"
            comment="Nice Post!"
            profilePic={faker.image.avatar()}
        />
        </ApprovalCard>
        <ApprovalCard>
        <CommentDetailWithProps
            author="Jane"
            timeAgo="Yesterday at 2AM"
            comment="Lot to Learn!"
            profilePic={faker.image.avatar()}
        />
        </ApprovalCard>
    </div>
    );
}


ReactDOM.render(<App />, document.querySelector('#root'));