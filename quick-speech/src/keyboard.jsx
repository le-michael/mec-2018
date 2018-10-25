import React, {Component} from 'react';

import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography';

import Icon from '@material-ui/core/Icon';

import Phrases from './constants';

 
class Key extends Component{
    render() {
        return (

                <Paper onClick={() => this.props.addText()} className={this.props.type}>
                    <Typography variant="h3" component="h3">
                        {this.props.children}
                    </Typography>
                </Paper>

        );
    }

}


class CustomKeyboard extends Component {
    constructor(props){
        super(props);
        this.qwerty = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
    }

    render() {
        const keys = this.qwerty.map((char) => <Key type={"key"} addText={()=>this.props.addText(char)} key={char}>{char}</Key> );
        return(            
            <div className="keyboard">
                {keys}
                <Paper onClick={()=>this.props.addText(" ")} className="space"> <Typography variant="h3" component="h3">SPACE</Typography></Paper>
                <Paper onClick={()=>this.props.delText()} className="back"><Typography variant="h3" component="h3">DEL</Typography></Paper>
            </div>
        );
    }
}

class PhrasesKeyboard extends Component{

    render(){
        const phrases = this.props.phrases.map((phrase) => {
            return <Key key={phrase} addText={() => this.props.addText(" "+phrase)} type="message"> {phrase}</Key>
        } );
        return(
            <div className="keyboard">
                {phrases}
            </div>
        );
    }
}





class Keyboard extends Component {

    constructor(props){
        super(props);
        this.currentKeyboard = this.currentKeyboard.bind(this);
    }

    currentKeyboard(){
        var phrases=null;

        switch(this.props.selected){
            case "Custom Message":
                return <CustomKeyboard 
                        addText={this.props.addText} 
                        delText={this.props.delText}
                        sayText={this.props.sayText}
                        clearText={this.props.clearText}
                        ></CustomKeyboard>;

            case "Names":
                phrases=Phrases.Names;
                break;
            case "Greetings":
                phrases=Phrases.Greetings;
                break;
            case "Responses":
                phrases=Phrases.Responses;
                break;
            case "Activities":
                phrases=Phrases.Activities;
                break;
            default:
                return null;
        }


        return <PhrasesKeyboard                         
        addText={this.props.addText} 
        delText={this.props.delText}
        sayText={this.props.sayText}
        clearText={this.props.clearText}
        phrases={phrases}
        ></PhrasesKeyboard>


    }



    render() {
        return(
            <div>
                {this.currentKeyboard()}
                <div className="keyboard">                
                    <Paper onClick={()=>this.props.clearText()} className="talk"><Typography variant="h3" component="h3">CLEAR</Typography></Paper>
                    <Paper onClick={()=>this.props.sayText()} className="talk"><Typography variant="h3" component="h3">TALK</Typography></Paper>
                </div>
            </div>
        );
    }

}


export default Keyboard;