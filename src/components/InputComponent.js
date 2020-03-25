import React, {Component} from 'react';

class InputComponent extends Component{
    
    render(){
        return <div>
            <input type="text" onChange={this.props.changed} placeholder={this.props.currentUsername} />
        </div>
    }

}

export default InputComponent