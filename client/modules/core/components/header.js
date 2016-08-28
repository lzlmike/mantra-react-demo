/**
 * Created by Mike on 8/28/16.
 */
import React from 'react';

const Header = () => (
    <div className="ui inverted fixed menu">
      <a href="" className="brand item logo">ANSWER ME</a>
      <div className="right menu">
        <a className="ui dropdown item">
          <i className="user icon"></i> Amy
          <i className="dropdown icon"></i>
          <div className="menu">
            <div className="item">User Account</div>
            <div className="item">Log out</div>
          </div>
        </a>
      </div>
    </div>
);

export default Header;
