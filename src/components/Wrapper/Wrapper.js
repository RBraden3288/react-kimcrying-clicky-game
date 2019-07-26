import React from 'react';

function Wrapper(props) {
    //return a div with the props from images
    return <div className="wrapper">{props.children}</div>;
};

export default Wrapper;