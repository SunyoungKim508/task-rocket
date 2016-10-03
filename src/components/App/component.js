import React from 'react'

import cssModules from 'react-css-modules';
import styles from './component.css'

class App extends React.Component {
  render () {
    const { onClick } = this.props

    return (
      <div styleName="wrapper">
        <div>hello</div>
        <button onClick={onClick}>click</button>
      </div>
    )
  }
}

export default cssModules(App, styles)
