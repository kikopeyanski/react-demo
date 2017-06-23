import React, {Component} from 'react'

class AddTodoForm extends Component {
    constructor() {
        super();
        this.state = {
            value: ''
        };

        this.handleValueChange = this.handleValueChange.bind(this);
    }

    handleValueChange(e) {
        this.setState({value: e.target.value})
    }

    render() {
        return (
            <div className="AddTodo-form">
                <input value={this.state.value} type="text" name="todo"
                       onChange={this.handleValueChange}/>
                <input type="submit" onClick={() => {
                    this.props.onTodoAdd(this.state.value)
                }}/>
            </div>
        )
    }
}
export default AddTodoForm;