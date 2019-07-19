import React from 'react';

function Options (props) {
  if (props.ready === true) {
    return (
      <div id='choice'>
        <form>
          <label>
            Where are we going?
            <input type="text"></input>
            <input type="submit" value="Submit"></input>
          </label>
        </form>
      </div>
    )
  } else if (props.ready === false) {
    return (
      <div id="decide">
        Lets look at some options!
        <div className="options">Sunnies</div>
        <div className="options">Taco Sundays</div>
        <div className="options">Flavored Spoon</div>
        <div className="options">McDonuts</div>
        <div className="options">Charlies Chocolate Factory</div>
        <div className="options">Yams</div>
        <div className="options">Butcher</div>
      </div>
    )
  } else {
    return (
      <div id="waiting">...</div>
    )
  }
}

export default Options
