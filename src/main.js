const root = document.getElementById('root');

/** Without REACT */
// const el = document.createElement('div');
//  el.textContent = 'Hello World';
//  el.className = 'container';
//  root.appendChild(el);

/************************************************************************************************************************************************/

/** Either use import on each file to use the libs or (somehow else with webpack) load them in the HTML. That way, window.React exists */

/*
    For ES6, instead of require (which ies from ES5), we use import

    if :
      module.export = {
        Component1: Component1,
        Component2: Component2,
      }
    then :
      import {Component1} from './Components'
  }
*/
import React from 'react';
import ReactDOM from 'react-dom';







/**
  With React.createElement API, you can create element as a React object
  React.createElement([tag] , [props], [children...])

  const el = React.createElement('div', {className : 'container'}, 'Hello World', ' Goodbye World')
  same as:
  const el = React.createElement('div', {className : 'container', children : ['Hello World', ' Goodbye World'] })
*/


/*
  WITH JSX
  Curvy braces on JSX exists JSX syntax to enter JS syntax
*/
var text  = 'Hello World'
var cName = 'container'
var props = {
  className : 'container',
  children  : 'Hello World'
}

var el = <div className={cName}>Hello World</div> //{( () => text)()}

/**
  Similar to above. Using 'spreading' to spread the props to the React obj
  default will be applied if the props does not have a className. If it does, it ovewrites it

  If you want to ovewrite props, just move className ahead:
    <div {...props} className="default" />
*/

var el = (
  <div className="default" {...props} />
)

/**
  You can append JSX separately as well
*/
var helloWorld = <div>Hello World</div>

var el = (
  <div className="container">
    {helloWorld}
    {helloWorld}
  </div>
)

/**
  You can append it using functions
  NOTE: Both message and message2 are compiled into the same thing
*/
var message = props => <div> {props.msg} </div>
var message2 = function(props) { return <div> {props.msg} </div> }

var el = (
  <div className="container">
    {message({msg : 'Hello World'})}
    {message2({msg : 'Goodbye World'})}
    {React.createElement(message, {msg : 'Hello again, World'})}
  </div>
)

/*
  <message /> inside the JSX above will not work. Babel compiles it to React.createElement('message', null)
  In order to Babel to differenciate it between 'message' as String and as a component, it needs to start with **uppercase**
*/

var Message3 = props => <div>{props.msg}</div>
var Message4 = props => <div>{props.children}</div>

var el = (
  <div className="container">
    <Message3 msg="Hello World :)" />
    <Message4>Goodbye World</Message4>
  </div>
)

// console.log(el)
// ReactDOM.render(el, root)

/********************************************************************************************************************
  Validate Custom React Component's props with PropTypes
*/
function SayHello(props) {
  return (
    <div>
      Hello {props.firstName} {props.lastName || 'Unknown'}!
    </div>
  );
}

/*
  ReactDOM.render(
    <SayHello firstName={true} />
  , root)

  Trying to append the component above will print Hello ! It takes 'true' as a boolean.
  To set the component types, you add a propTypes property to the component.
*/

const PropTypes = {
  string(props, propName, componentName) {
    if (typeof props[propName] !== 'string')
      return new Error(`You should pass a String for ${propName} in ${componentName},
        but you passed a ${typeof props[propName]}`)
  }
}

SayHello.propTypes = {
  firstName : PropTypes.string,
  lastName  : PropTypes.string
}

// ReactDOM.render(
//   <SayHello firstName={true} />
// , root)

/*
  There's a library with PropTypes to validate a lot more
  https://www.npmjs.com/package/prop-types

  With that library:

  SayHello.propTypes = {
    firstName : PropTypes.string.isRequired,
    lastName  : PropTypes.string.isRequired
  }

  It is more common to declare them as a static property in a Component CLASS
*/

class Greet extends React.Component {

  static propTypes : {
    firstName : PropTypes.string,
    lastName  : PropTypes.string
  }

  render() {
    <div>
      Hello {props.firstName} {props.lastName || 'Unknown'}!
    </div>
  }
}


/*
  **********************************************************************************************************************
  Conditionally Render A React Component
*/

/*
  The curvys  inside the fn parameter is known as destructuring assigment syntax (A feature on ECMAS 6).
  Simply put, it is a simplified way of accessing specific field of a given variable for further use in that scope.

  You'll send an object with an attribute called message, and you'll be able to access it directly (without xxx.message)
  It is the equivalent of:
      function Msg(props) {
        return <div>{props.message}</div>
      }

  For conditionally print something within JSX curvys {}, you can't use JS if. You need to use ternarys
*/
function Msg({message}) {
  // if (!message)
  //   return <div>No msg</div>
  // return <div>{message}</div>

  // return (
  //   <div>
  //     {message
  //       ? React.createElement('div', null, message)
  //       : React.createElement('div', null, 'No msg')
  //     }
  //   </div>
  // )

  return (
    <div>
      {message
        ? (<div>{message}</div>)
        : (<div>No msg</div>)
      }
    </div>
  )
  /** Parenthesis between inner JSX are not required */
}

ReactDOM.render(
  <Msg message={null} />
, root)



/*
  **********************************************************************************************************************
  Rerender a React Application
*/

var time = new Date().toLocaleString()
var tEl  = <div>It is {time}</div>
// ReactDOM.render(tEl, root) //<- This prints current time. In order to hour to update, you must refresh

function tick() {
  var time = new Date().toLocaleString()
  var tEl  = <div>It is <input value={time} /></div>
  ReactDOM.render(tEl, root)
}

// tick()
// setInterval(tick, 1000)

/*
  There is a subtle difference between re-rendeing a react component that rerendering with JS.
  React will only update what's changing only (in this case, the content between the div). It will not re-render the div itself
*/




/*
  **********************************************************************************************************************
  Style React Components with className and In Line Styles

  Notice that, when applying styles using JSX:
    - Properties are camelCase (fontWeight, fontSize)
    - Pixel values are just integers (50)
*/

var styles = {
  color : 'red',
  fontWeight : 'bold',
  fontSize : 50
}

var props = {
  style : styles,
  className : 'container'
}

// var sEl  = <div style={styles}>Hello there</div>
var sEl  = <div {...props}>Hello there</div>
// ReactDOM.render(sEl, root)

/*
    function Box(props) {
      return (
        <div className="box" style={{fontSize: 50}} {...props} ></div>
      )
    }
    var test = <Box style={{color: 'red'}}>test</Box>

    Doing this will override the fontSize above (since it's first adding it, then applying props, which includes a new style attribute(color red))
    To prevent this, we again use destructuring assigment (similar solution with className, using template literal and, if className is not given
    in myBox, we assign it a default value of '' in the Box parameter)
*/

function Box({style, size, className = '', ...rest}) {
  const sizeClassName = size ? `box--${size}` : ''
  return (
    <div
      className={`box ${className} ${sizeClassName}`}
      style={{fontSize: 50, ...style}}
      {...rest}
    />
  )
}

var myBoxy = <Box style={{color: 'blue'}} className="myBox" size="small">Hello World</Box>
ReactDOM.render(myBoxy, root)


/*
  **********************************************************************************************************************
  Use Event Handlers with React


  <button onClick={() => setState({eventCount : state.eventCount + 1})}>Hi</button>
          onChange={event => setState({username : event.target.value})}
*/

var state = {eventCount : 0, username: ''}
function App() {
  return (
    <div>
      <p>
        There have been {state.eventCount} events
      </p>
      <p>
        <button onClick={increment}>Hi</button>
      </p>
      <p>
        You typed: {state.username}
      </p>
      <p>
        <input onChange={updateName} />
      </p>
    </div>
  )
}

function increment() {
  setState({eventCount : state.eventCount + 1})
}

function updateName(e) {
  console.log(e) //React hangles its own event object. To get the original event, use e.nativeEvent
  setState({username : e.target.value})
}

function setState(nState) {
  Object.assign(state, nState)
  renderApp()
}

function renderApp() {
  ReactDOM.render(<App />, root)
}

renderApp()




/*
  **********************************************************************************************************************
  Use Component State with React


  <button onClick={() => setState({eventCount : state.eventCount + 1})}>Hi</button>
          onChange={event => setState({username : event.target.value})}

  ---------------------

  setState() is internally defined by React. It will automatically re render the component
  setState() is async

  React will also try to group or batch setState calls into a single call

    this.setState({ value: this.state.value + 1});
    this.setState({ value: this.state.value + 1});
    this.setState({ value: this.state.value + 1});

  After all this calls, value will be 1, not 3. To go around this...

  setState accepts a function as its parameter.

  If you pass a function as the first argument of setState, React will call it...
  with the at-call-time-current state and expect you to return an Object to merge into state.

    this.setState((state) => ({ value: state.value + 1}));
    this.setState((state) => ({ value: state.value + 1}));
    this.setState((state) => ({ value: state.value + 1}));


  This will give us a value of 3



  setState accepts a callback
  If you need to execute some function, or verify if the state did indeed update correctly you can pass a function as the second argument
*/



/*
  **********************************************************************************************************************
  React lifecycle

  http://busypeoples.github.io/post/react-component-lifecycle/

  ::Initial::
  getDefaultProps()           //enables to set the initial state value, that is accessible inside the component via this.state.
  getInitialState()           //analogously, getDefaultProps can be used to define any default props which can be accessed via this.props.
  componentWillMount()        //componentWillMount is called before the render method is executed. It is important to note that setting the state in this phase will not trigger a re-rendering.
  render()
  componentDidMount()         //As soon as the render method has been executed the componentDidMount function is called.
                              //...The DOM can be accessed in this method, enabling to define DOM manipulations or data fetching operations. \
                              //Any DOM interactions should always happen in this phase not inside the render method.

  ::Updating State::
  shouldComponentUpdate(nextProps, nextState)  //shouldComponentUpdate is always called before the render method and enables to define if a re-rendering is needed or can be skipped. Returns a value
  componentWillUpdate(nextProps, nextState)    //componentWillUpdate gets called as soon as the the shouldComponentUpdate returned true
                                               //Any state changes via this.setState are not allowed as this method should be strictly used to prepare for an upcoming update not trigger an update itself.
  render()
  componentDidUpdate(prevProps, prevState)     //Finally componentDidUpdate is called after the render method. Similar to the componentDidMount,
                                               //this method can be used to perform DOM operations after the data has been updated.



  ::Updating Props::
  componentWillReceiveProps(nextProps)        //componentWillReceiveProps is only called when the props have changed and when this is not an initial rendering
  shouldComponentUpdate(nextProps, nextState)
  componentWillUpdate(nextProps, nextState)
  render()
  componentDidUpdate(prevProps, prevState)


  ::Unmounting::
  componentWillUnmount()                     //This method can be beneficial when needing to perform clean up operations

*/

class StopWatch extends React.Component {
  state = {
    lapse: 0,
    running : false
  }

  clearLapse = () => {
    clearInterval(this.timer)
    this.setState({lapse : 0, running : false})
  }

  handleRunClick = () => {
    //setState() can also receive a function to condition the return state value
    this.setState(state => {
      if (state.running) {
        clearInterval(this.timer)
      } else {
        const sTime = Date.now() - this.state.lapse
        this.timer = setInterval(() => {
          this.setState({lapse: Date.now() - sTime})
        })
      }

      return {running : !state.running}
    })
  }

  componentWillUnmount = () => {
    clearInterval(this.timer)
  }

  render() {
    const {lapse, running} = this.state
    return (
      <div>
        <div>{lapse}ms</div>
        <button onClick={this.handleRunClick} >{running ? 'Stop' : 'Start'}</button>
        <button onClick={this.clearLapse}>Clear</button>
      </div>
    )
  }
}


var element = <StopWatch />
ReactDOM.render(element, root)



/*
  **********************************************************************************************************************
  Use Class Components with React
*/

class Counter extends React.Component {
  constructor(...args) {
    super(...args)
    this.state = {count : 0}
  }

  // Function on the instance (with lexical this)
  // increaseCount = () => {
  //   this.setState({count : this.state.count + 1})
  // }

  // Function on the prototype
  // increaseCount() {
  //   this.setState( () => {
  //       return { count : this.state.count + 1 }
  //     }
  //   )
  // }

  //Examples above are the same as the fn below
  //this.increaseCount.bind(this)


  increaseCount() {
    this.setState( ({count}) =>
      ({ count : count + 1 })
    )
  }

  render() {
    return (
      <button
        onClick={this.increaseCount.bind(this)}
      >
      {this.state.count}
      </button>
    )
  }
}

ReactDOM.render(<Counter />, root)


/*
  **********************************************************************************************************************
  Manipulate the DOM with React refs

  ref gets a reference to the DOM node as arg
  On a React Component, ref gets the scope (this) if that component
  On a node, it gets the DOM node
*/

class Element extends React.Component {
  componentDidMount() {
    console.log(this.rootNode)
  }

  render() {
    return (
      <div
        ref={node => (this.rootNode = node)}
        className="root"
      >
        <div {...this.props} />
      </div>
    )
  }
}

var element = (
  <div>
    <Element>
      Example
    </Element>
  </div>
)

// ReactDOM.render(element, root)


/*
  **********************************************************************************************************************
  Make Basic Forms with React
*/

class NameForm extends React.Component {

  submitForm = e => {
    e.preventDefault()
    console.log({target : e.target})
    // console.log(e.target[0].value) //First element of the form
    // console.log(e.target.elements.username.value)
    console.log(this.username.value)
  }

  render() {
    return (
      <form onSubmit={this.submitForm}>
        <label>
          Name: <input type="text" name="username" ref={node => this.username = node} />
        </label>
        <button type="submit">Submit</button>
      </form>
    )
  }
}

ReactDOM.render(<NameForm />, root)

/*
  **********************************************************************************************************************
  Make Basic Forms with React
*/

class OtherForm extends React.Component {
  state = { error : this.props.getError('') }

  submitForm = e => {
    e.preventDefault()
    const val = e.target.elements.username.value
    const error = this.props.getError(val)

    if (error){
      alert(`Error: ${error}`)
    } else {
      alert(`Success: ${val}`)
    }
  }

  handleChange = e => {
    const {value} = e.target
    this.setState({
      error : this.props.getError(value)
    })
  }

  // componentDidMount() {
  //   this.setState({
  //     error : this.props.getError('')
  //   })
  // }

  render() {
    const {error} = this.state
    return (
      <form onSubmit={this.submitForm}>
        <label>
          Name:
          <input type="text" onChange={this.handleChange} name="username" />
        </label>
        {error ? <div style={{color:'red'}}>{error}</div> : null}
        <button disabled={Boolean(error)} type="submit">Submit</button>
      </form>
    )
  }
}

ReactDOM.render(<OtherForm getError={value => value.length < 3 ? `At least 3 chars, right now it's ${value.length}` : null } />, root)


/*
  **********************************************************************************************************************
  Controlling Form Values with React
*/

class OtherForm2 extends React.Component {
  static availableOptions = [
    'apple', 'grape', 'pear'
  ]

  state = {
    multiline : '',
    commaSeparated : '',
    multiSelect : []
  }

  handleCommaSeparatedChange = event => {
    const {value} = event.target
    const allVals = value
    this.setState({
      commaSeparated : value,
      multiline      : value.split(',').map(v => v.trim()).filter(Boolean).join('\n'),
      multiSelect    : allVals.filter(v => OtherForm2.availableOptions.includes(v))
    })
  }

  handleMultilineChange = event => {
    const {value} = event.target
    const allVals = value
    this.setState({
      multiline      : value,
      commaSeparated : value.split('\n').map(v => v.trim()).filter(Boolean).join(','),
      multiSelect    : allVals.filter(v => OtherForm2.availableOptions.includes(v))
    })
  }

  handleMultiSelectChange = event => {
    const allVals = Array.from(event.target.selectedOptions).map(o => o.value)
    this.setState({
      multiline      : allVals.join('\n'),
      commaSeparated : allVals.join(','),
      multiSelect    : allVals
    })
  }

  render() {
    const {commaSeparated, multiline, multiSelect} = this.state
    return (
      <form>
        <div>
          <label>
            Comma separated values:
            <br />
            <input type="text" onChange={this.handleCommaSeparatedChange} value={commaSeparated} />
          </label>
        </div>

        <div>
          <label>
            Multiline values:
            <br />
            <textarea rows={OtherForm2.availableOptions.length} onChange={this.handleMultilineChange} value={multiline}></textarea>
          </label>
        </div>

        <div>
          <label>
            MultiSelect values:
            <br />
            <select multiple size={OtherForm2.availableOptions.length} value={multiSelect} onChange={this.handleMultiSelectChange}>
              {OtherForm2.availableOptions.map(
                optionValue => (<option key={optionValue} value={optionValue}>{optionValue}</option>)
              )}
            </select>
          </label>
        </div>
      </form>
    )
  }
}

ReactDOM.render(<OtherForm2 />, root)


/*
  **********************************************************************************************************************
  Use the key prop when Rendering a List with React

  When rendering a list. React needs to know which items are removed/added.
  It needs to know how to keep track
  If there's no way to differenciate them it prints

    Warning: Each child in an array or iterator should have a unique "key" prop.

  This is where the key attribute comes. It is not recommended to use index (the index in the map fn) as as key
*/

class Appy extends React.Component {
  static allItems = [
    {id: 'a', value : 'apple'},
    {id: 'o', value : 'orange'},
    {id: 'g', value : 'grape'},
    {id: 'p', value : 'pear'},
  ]

  state = {
    multiline : '',
    commaSeparated : '',
    multiSelect : []
  }

  render() {
    return (
      <div>
        {Appy.allItems.map( i => (<div key={i.id}>{i.value}</div>) )}
      </div>
    )
  }
}

// ReactDOM.render(<Appy />, root)


/*
  ANOTHER EXAMPLE


  When you run this code, you’ll be given a warning that a key should be provided for list items.
  A “key” is a special string attribute you need to include when creating lists of elements.

  Keys help React identify which items have changed, are added, or are removed.
  Keys should be given to the elements inside the array to give the elements a stable identity (like the listItems uncommented)

  When you don’t have stable IDs for rendered items, you may use the item index in the map as a key as a last resort
  We don’t recommend using indexes for keys if the order of items may change.
  This can negatively impact performance and may cause issues with component state.
*/

const numbers = [1, 2, 3, 4, 8];
// const listItems = numbers.map((number) =>
//   <li>{number}</li>
// );

const listItems = numbers.map((number) =>
  <li key={number.toString()}>{number}</li>
);

ReactDOM.render(<ul>{listItems}</ul>, root);



/*
  **********************************************************************************************************************
  Make HTTP Requests with React

  axios is a lib to make requests
*/

class Company extends React.Component {
  state = { company : undefined, loaded : false }

  componentDidMount() {
    axios({
      url : 'https://api.github.com/ghraphql',
      method: 'post',
      data : {
        query:  `{
          user(login: "${this.props.username}") {
            company
          }
        }`
      },
      headers: {Authorization : `bearer 8af87vh7wv8gh`}
    }).then(response => {
      this.setState({
        company : respose.data.data.user.company,
        loaded : true
      })
    }, error => {
      //...
    })
  }

  render() {
    return this.state.loader ? this.state.company || 'Unknown' : '...'
  }
}

const username = 'test'
const hElement = (
  <div>
    {`@${username} works at `}
    <Company username={username} />
  </div>
)

// ReactDOM.render(<Appy />, root)

/**
  Promise example
*/

var isMomHappy = false

var willIGetPhone = new Promise( (resolve, reject) => {
    if (isMomHappy)
      resolve({color: 'black'})
    else
      reject(new Error('Mom is not happy'))
})

/*
  reject is optional
  We can shorten this sample like using Promise.resolve instead.
*/
// var showOff = phone => {
//   return new Promise( (resolve, reject) => {
//     var msg = 'Hey, I got a new phone'
//     resolve(msg)
//   })
// }

var showOff = phone => {
  var msg = 'Hey, I got a new phone'
  return Promise.resolve(msg)
}


/*
  then is used to take action once promise is resolved or rejected
*/

var askMom = () => {
  willIGetPhone.then(showOff)
  .then(fullfilled => {
    console.log(fullfilled) //output {color: black}
  })
  .catch(error => {
    // console.log(error.message)
  })
}

askMom()


///////////////////////////////////////////////////////////////

import Button         from './Components/Button/Button'
import AnotherButton  from './Components/AnotherButton/AnotherButton'

ReactDOM.render(
  <div>
    <Button className="my btn-default">Hello World</Button>
    <AnotherButton>Hello Another World</AnotherButton>
  </div>
, root)
