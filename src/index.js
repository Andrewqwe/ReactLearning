import React from 'react'
import { render } from 'react-dom'
import Hello from './Hello'
import Card from './Card'
import Form from './Form'

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};


class App extends React.Component {
  state = {
      userData: [
          {
              name: "Andrzej",
              avatar: "https://avatars0.githubusercontent.com/u/23003373?v=4",
              location: "Wroclaw"
          }, {
              name: "Adam",
              avatar: "https://www.imore.com/sites/imore.com/files/styles/large/public/field/image/2017/03/snapchat-mikah-bitmoji-questions.jpg?itok=P3ht2KMi",
              location: "Los Angeles"
          }
      ]
  }

  incrementCounter = (value) => {
    this.setState((prevState)=> ({
      counter: prevState.counter + value
    }))
  }

  addNewCard = (data) => {
      this.setState(prevState => ({
          userData: prevState.userData.concat(data)
      }))
  }

  render(){
      return(
          <div style={styles}>
              <Form onSubmit={this.addNewCard} />
              <table>
                  {this.state.userData.map(card =>(<Card {...card}/>))}
              </table>

          </div>
      )
  }

  /*render(){
    return (
      <div style={styles}>
        <Hello name="CodeSandbox" />
        <h2>Start editing to see some magic happen {'\u2728'}</h2>
        <Button incrementValue={1} onClickFunction={this.incrementCounter}/>
        <Button incrementValue={5} onClickFunction={this.incrementCounter}/>
        <Button incrementValue={10} onClickFunction={this.incrementCounter}/>
        <Button incrementValue={100} onClickFunction={this.incrementCounter}/>
        <Result counter={this.state.counter}/>
      </div>
    )
  }*/
}

class Button extends React.Component{
  handleClick = () =>{
    this.props.onClickFunction(this.props.incrementValue)
  }
  render(){
    return(
      <button onClick={this.handleClick}>
      +{this.props.incrementValue}
      </button>
    )
  }
}

const Result = (props) =>{
  return(
    <h2>
    {props.counter}
    </h2>
  )
}

render(<App/>, document.getElementById('root'));
