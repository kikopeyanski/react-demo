import React, {Component} from 'react'
import Todo from "./Todo";

class FilterTodos extends Component {
    constructor() {
        super();
        this.state = {
            filter: 'all'
        }
    }

    showAll() {
        this.setState({filter: 'all'})
    }

    showComplete() {
        this.setState({filter: 'complete'})

    }

    showIncomplete() {
        this.setState({filter: 'incomplete'})
    }

    render() {
        return (
            <div>
                <p>
                    <button onClick={() => {
                        this.showAll()
                    }}>All</button>
                    <button onClick={() => {
                        this.showComplete()
                    }}>Completed</button>
                    <button onClick={() => {
                        this.showIncomplete()
                    }}>Incomplete</button>
                </p>
                <ul>
                    {this.props.todos.map((todo) => {
                        console.log(this.state.filter);
                        if (todo.complete === (this.state.filter === 'complete')
                            || this.state.filter === 'all') {
                            return <Todo
                                key={todo.text}
                                text={todo.text}
                                complete={todo.complete}
                                onTodoClick={this.props.onTodoClick}/>;
                        }
                    })}

                </ul>

            </div>
        )
    }
}

export default FilterTodos