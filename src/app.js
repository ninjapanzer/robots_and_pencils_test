import React    from 'react'
import ReactDOM from 'react-dom'

import Section        from './components/section'
import ClosedAddition from './components/ClosedAddition'
import LoadImage      from './components/loadImage'
import LoadJSON       from './components/loadJSON'

const countdown = function(current=1, end=10){
  console.log(current);
  if(current >= end){
    console.log('Done')
    return 'Done';
  }
  setTimeout(countdown, 1000, current + 1);
}
countdown()

ReactDOM.render(
  <Section elementId="sectionThree">
    <LoadImage url="https://doc-14-5g-docs.googleusercontent.com/docs/securesc/ha0ro937gcuc7l7deffksulhg5h7mbp1/pnisi2n51hik91177g5m9u5rpabs0rkd/1491904800000/06669529452632129553/*/0B10p3-qnSC49ckVGTWhjS2Q1d1k" />
  </Section>,
  document.getElementById('sectionThree')
)

ReactDOM.render(
  <Section className="text-left" elementId="sectionFour">
    <LoadJSON url="https://jsonplaceholder.typicode.com/users" />
  </Section>,
  document.getElementById('sectionFour')
)

ReactDOM.render(
  <Section elementId="sectionFive">
    <ClosedAddition leftOperand={1} rightOperand={2} />
  </Section>,
  document.getElementById('sectionFive')
)
