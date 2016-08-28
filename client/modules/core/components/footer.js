/**
 * Created by Mike on 8/28/16.
 */
import React from 'react';

const Footer = ({activeOne}) => (
  <div className="ui three item bottom fixed menu inverted">
    <a className={activeOne === 'Paid' ? 'active item' : 'item'} href="/paid">Paid Questions</a>
    <a className={activeOne === 'Free' ? 'active item' : 'item'} href="/free">Free Questions</a>
    <a className={activeOne === 'Ask' ? 'active item' : 'item'} href="/ask">Ask Questions</a>
  </div>
);

export default Footer;
