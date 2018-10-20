import React, {Component} from 'react';
import Typography from '@material-ui/core/Typography'

class TextZone extends Component {
    render(){
        return (
            <div className="textzone"> 
                <Typography variant="h1" component="h1">
                    {this.props.text+"_"}
                </Typography>
            </div>
        );
    }
}

export default TextZone;