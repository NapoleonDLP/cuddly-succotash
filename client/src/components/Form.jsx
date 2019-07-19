import React from 'react';
import Options from './Options.jsx';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ready: null
    }
  }

  decide (event) {
    if (event.target.value === 'Yes') {
      this.setState({ready: true});
    } else if (event.target.value === 'No') {
      this.setState({ready: false})
    }
  }

  render() {
    return (
      <div id="form">
        <form>
          <label>
            Do you know what you would like?
            <input type="button" onClick={this.decide.bind(this)} value="Yes" />
            <input type="button" onClick={this.decide.bind(this)} value="No" />
          </label>
        </form>
        <Options ready={this.state.ready}/>
      </div>
    )
  }
}

export default Form
