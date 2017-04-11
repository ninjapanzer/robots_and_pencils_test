import React from 'react'
import fetch from 'isomorphic-fetch'

class LoadJSON extends React.Component {
  constructor(){
    super()
    this.state = {loaded: false}
  }

  componentDidMount(){
    var self = this
    fetch(this.props.url)
      .then(response => response.json())
      .then(json => self.setState({loaded: true, response: json}))
  }

  render(){
    if(this.state.loaded) {
      return (<pre>
        {JSON.stringify(this.state.response,null, 2)}
      </pre>)
    } else {
      return <span>Loading...</span>
    }
  }
}

export default LoadJSON
