/**
 * Created by Mike on 8/28/16.
 */
import React , { Component } from 'react';

class AskQuestion extends Component {
  componentDidMount () {
    $('.ui.checkbox').checkbox();
    $('.ui.dropdown').dropdown();
  }

  render() {
    return (
      <div className="ui form">
        <div className="ui fluid selection dropdown">
          <input type="hidden" name="user" />
          <i className="dropdown icon"></i>
          <div className="default text">Category</div>
          <div className="menu">
            <div className="item" data-value="jenny">
              Jenny Hess
            </div>
            <div className="item" data-value="elliot">
              Elliot Fu
            </div>
          </div>
        </div>
        <div className="field">
          <br />
          <input type="text" name="first-name" placeholder="Title" />
        </div>
        <div className="inline fields">
          <div className="field">
            <div className="ui radio checkbox">
              <input type="radio" name="fruit" checked="" tabIndex="0" className="hidden" />
              <label>Paid Questions</label>
            </div>
          </div>
          <div className="field">
            <div className="ui radio checkbox">
              <input type="radio" name="fruit" tabIndex="0" className="hidden"/>
              <label>Free Questions</label>
            </div>
          </div>
        </div>
        <div className="field">
          <div className="ui left labeled input">
            <div className="ui label">$</div>
            <input type="text" placeholder="Amount" />
          </div>
        </div>
        <div className="field">
          <label>Question Detail: </label>
          <textarea></textarea>
        </div>
        <button className="ui button" type="submit">Post Your Questions</button>
      </div>
    );
  }
};

export default AskQuestion;
