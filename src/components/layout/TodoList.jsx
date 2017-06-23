import React, {Component} from 'react'
import FilterTodos from "../forms/FilterTodos";
import Todo from "../forms/Todo";

class TodoList extends Component {
    render() {
        return (
            <div className="todo-list">
                <FilterTodos todos={this.props.todos} onTodoClick={this.props.onTodoClick}/>
            </div>
        )
    }
}

export default TodoList