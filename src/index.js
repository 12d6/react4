import React from 'react';
import ReactDOM from 'react-dom';
import Comment from './Comment.js'
import Button from './Button.js'
const Profile=()=>{
  return(
    <Button><Comment name="Jenny Lawrence"/></Button>
  );
};
ReactDOM.render(
  <Profile/>,
  document.getElementById('root')
);

