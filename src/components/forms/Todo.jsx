import React, {Component} from 'react'

class Todo extends Component {
    constructor(props) {
        console.log(props);
        super(props);
        this.state = {
            text: this.props.text,
            complete: this.props.complete
        };
    }

    render() {
        let style = {
            'color': 'red',
        };
        if (this.state.complete) {
            style = {
                'color': 'green',
            };
        }
        return (
            <li style={style} onClick={() => {
                  this.setState({complete: !this.state.complete});
                this.props.onTodoClick(this.state.text)
            }}>{this.state.text}</li>
        )
    }
}

export default Todo