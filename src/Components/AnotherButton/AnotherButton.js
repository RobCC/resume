import React, {Component} from 'react';

class AnotherButton extends Component {
  render () {
    return (
      <button type="button">
        {this.props.children}
      </button>
    )
  }
}

export default AnotherButton
