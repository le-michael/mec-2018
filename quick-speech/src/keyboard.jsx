import React, {Component} from 'react';

import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography';

import Icon from '@material-ui/core/Icon'


class Key extends Component{
    render() {
        return (

                <Paper onClick={()=>this.props.addText(this.props.children)} className={"key"}>
                    <Typography variant="h5" component="h3">
                        {this.props.children}
                    </Typography>
                </Paper>

        );
    }

}

class CustomKeyboard extends Component {
    render() {
        return(null);
    }
}


class Keyboard extends Component {

    constructor(props){
        super(props);
        this.qwerty = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
    }


    render() {
        const keys = this.qwerty.map((char) => <Key addText={this.props.addText} key={char}>{char}</Key> );
        return(
            <div className="keyboard">
                    {keys}
                    <Paper onClick={()=>this.props.addText(" ")} className="space"> <Typography variant="h5" component="h3"> SPACE </Typography></Paper>
                    <Paper onClick={()=>this.props.delText()}  className="back"><Icon>DEL</Icon></Paper>
                    <Paper onClick={()=>this.props.sayText()}  className="back"><Icon>TALK</Icon></Paper>
            </div>
        );
    }

}


export default Keyboard;