import React from 'react'

let closedAddition = (leftOperand, rightOperand) => ()=> leftOperand + rightOperand

class ClosedAddition extends React.Component {
  render(){
    let lOp = this.props.leftOperand
    let rOp = this.props.rightOperand
    let addition = closedAddition(lOp, rOp)

    return (<span> {lOp} + {rOp} = {addition()}</span>)
  }
}

export default ClosedAddition
