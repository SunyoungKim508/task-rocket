import React from 'react'

import cssModules from 'react-css-modules';
import styles from './App.css'

class App extends React.Component {
  render () {
    return (
      <div styleName="wrapper">Heloladfasd</div>
    )
  }
}

export default cssModules(App, styles)
