import React, {Component} from 'react';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

class MenuItem extends Component {
    render(){
        return(
            <div className="menuitem" onClick={()=>this.props.onClick()}>
                    <Typography variant="h5" component="h3">
                        {this.props.children}
                    </Typography>
            </div>
        );
    }
}



class Menu extends Component {
    constructor(props){
        super(props);

        this.options = ["Custom Message","Phrases","Activities","Names"]

    }

    render(){

        var items = this.options.map((item)=>{
            if (this.props.selected === item)
                return (<MenuItem key={item} onClick={() => this.props.changeKeyboard(item)}><u>{item}</u></MenuItem>)
            return (<MenuItem key={item} onClick={() => this.props.changeKeyboard(item)}>{item}</MenuItem>)
        })

        return(
            <Paper className="menu">
                {items}
            </Paper>

        );
    }


}

export default Menu;