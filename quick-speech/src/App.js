import React, { Component } from 'react';
import './App.css'



import Keyboard from './keyboard.jsx'
import TextZone from './textarea.jsx';
import Menu from './menu.jsx';


class App extends Component {
  constructor(props){
    super(props);

    this.addText = this.addText.bind(this);
    this.delText = this.delText.bind(this);
    this.getKeyboard = this.getKeyboard.bind(this);
    this.getText = this.getText.bind(this);
    this.changeKeyboard = this.changeKeyboard.bind(this);
    this.sayText = this.sayText.bind(this);

    this.state = {
      text: "",
      keyboard:"Custom Message"
    }

    speechSynthesis.getVoices()
  }

  getText(){
    return this.state.text;
  }

  getKeyboard(){
    return this.state.keyboard;
  }

  addText(inp){
    var newText = this.state.text + inp;
    this.setState({
      text: newText
    })
  }

  delText() {
    if (this.state.text.length > 0){
      var newText = this.state.text
      newText = newText.slice(0,newText.length-1);
      this.setState({
        text: newText
      })
    }
  }

  sayText(){
    var msg = new SpeechSynthesisUtterance(this.state.text);
    msg.voice = speechSynthesis.getVoices()[3]
    window.speechSynthesis.speak(msg);
    this.setState({
        text:""
    })
  }

  changeKeyboard(newKeyboard){
    this.setState({keyboard: newKeyboard})
  }



  render() {
    return (
      <div className="app">

        <TextZone text={this.getText()}></TextZone>
        <Menu
        selected={this.getKeyboard()}
        changeKeyboard={this.changeKeyboard}
        >
        </Menu>

        <Keyboard 
        addText={this.addText}
        delText={this.delText}
        sayText={this.sayText}
        selected={this.getKeyboard()}
        >
        </Keyboard>

      </div>
    );
  }
}

export default App;
