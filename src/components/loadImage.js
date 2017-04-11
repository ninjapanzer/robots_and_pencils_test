import React from 'react'

class LoadImage extends React.Component {
  constructor(){
    super()
    this.state = {loaded: false}
  }

  componentDidMount(){
    var self = this
    var img = new Image()
    img.onload = () => self.setState({loaded: true})
    img.src = this.props.url
  }

  render(){
    if(this.state.loaded) {
      return (<img style={{margin: 'auto'}} src={this.props.url} />)
    } else {
      return <span>Loading...</span>
    }
  }
}

export default LoadImage
