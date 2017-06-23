import React, {Component} from 'react'
import AddTodoForm from '../forms/AddTodoForm'
import RemoveTodoForm from '../forms/RemoveTodoForm'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: this.props.selected
        };

        this.onTodoAdd = this.onTodoAdd.bind(this);
    }
    onTodoAdd(text){
        this.props.onTodoAdd(text);
    }
    render() {
        return (
            <div>
                {(this.props.selected === 'add')
                    ? <AddTodoForm onTodoAdd={this.onTodoAdd}/>
                    : <RemoveTodoForm/>}
            </div>
        )
    }
}
export default Home