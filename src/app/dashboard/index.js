import React from 'react'

import homeImg from './assets/TOP-STAR-LOGO.png'

module.exports = class extends React.Component {

  render() {
    return <div style={{margin:'auto',  width: '80%', textAlign: 'center'}}>
      <img src={homeImg} />
      <span style={{fontSize: '50'}}> Hello would ! </span>
    </div>
  }
}
