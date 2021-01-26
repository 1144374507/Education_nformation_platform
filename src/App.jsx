
import React, { PureComponent } from 'react'

import Header from './components/content/Header'
import Container from './components/content/Container'

export default class App extends PureComponent {

  render() {
    return (
      <div className="App">
       <Header/>
       <hr style={{height:'1px' ,border:'none',marginBottom:'19px' ,borderTop:"1px solid #e2e2e2"}}/>
       <Container/>
      </div>
    );
  }
}

