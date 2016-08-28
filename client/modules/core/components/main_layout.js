import React from 'react';
import Navigation from './navigation';
import Footer from './footer';
import Header from './header';

const metaInfo_viewport = {name: "viewport", content: "width=device-width, initial-scale=1"};
const metaInfo_mobile = {name: "mobile-web-app-capable", content: "yes"};
const linkInfo1 = {rel: "stylesheet", type: "text/css", href: "https://fonts.googleapis.com/css?family=Open+Sans:400,700,300&subset=latin,vietnamese"};
const linkInfo2 = {rel: "stylesheet", href: "https://fonts.googleapis.com/css?family=Orbitron"};
DocHead.addLink(linkInfo1);
DocHead.addLink(linkInfo2);
DocHead.addMeta(metaInfo_viewport);
DocHead.addMeta(metaInfo_mobile);

const rowStyle = {
  marginTop : '40px'
};

const Layout = ({content = () => null, name}) => (
  <div className="ui grid">
    <Header/>
      <div className="row" style={rowStyle}>
        <div className="column">
          <h1 className="ui header">{name} Question</h1>
          <div className="ui divider"></div>
          {content}

        </div>
    </div>
    <Footer activeOne={name}/>
  </div>
);

export default Layout;
