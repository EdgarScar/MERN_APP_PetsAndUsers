import React from 'react';
import ReactDOM from 'react-dom';

import './SideDrawer.css';

//Generates an SideDrawer pop out for mobile ratios 
const SideDrawer = props => {
    //Can define variables as a JSX element/s
    const content = <aside className='side-drawer'>{props.children}</aside>;
  
  //Create a portal to render this JSX 'content' in a different DOM element to where 
  //  this parent component is called and rendered. 
  return ReactDOM.createPortal(content, document.getElementById('drawer-hook'));
}

export default SideDrawer
