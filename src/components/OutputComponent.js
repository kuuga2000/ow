import React, {Component} from 'react';

class OutputComponent extends Component{
    render(){
        return <div>
            Username : {this.props.username}
        </div>
    }
}

export default OutputComponent;