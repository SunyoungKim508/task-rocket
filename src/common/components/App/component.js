import React from 'react'

import cssModules from 'react-css-modules'
import styles from './component.css'

class App extends React.Component {
  render () {
    const { onClick, onIncrementAsync, onIncrement, test } = this.props

    return (
      <div styleName="wrapper">
        <div>hello</div>

        <button onClick={onClick}>click</button>

        <button onClick={onIncrementAsync}>Async click</button>

        <button onClick={onIncrement}>Sync click</button>

        <button onClick={test}>Test</button>
      </div>
    )
  }
}

export default cssModules(App, styles)
