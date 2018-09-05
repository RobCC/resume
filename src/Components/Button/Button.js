import React, {Component} from 'react';
import style from './Button.scss'

/*
  https://www.npmjs.com/package/babel-plugin-react-css-modules
  https://stackoverflow.com/questions/40092989/css-modules-object-import-returns-empty
*/

class Button extends Component {
  render () {
    const {className} = this.props
    return (
      <button type="button" className={`${className} ${style.button}`}>
        {this.props.children}
      </button>
    )
  }
}

// module.exports = Button
// import {Button} from ''
//https://stackoverflow.com/questions/31852933/why-es6-react-component-works-only-with-export-default

export default Button
// import Button from ''
