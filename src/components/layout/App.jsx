import React, {Component} from 'react'
import Navigation from './Navigation'
import Home from '../pages/Home.jsx'
import TodoList from "./TodoList";
import Todo from "../forms/Todo";
import FilterTodos from "../forms/FilterTodos";

class App extends Component {
    constructor() {
        super();
        this.state = {
            selected: 'add',
            todos: []
        };
        this.onNavClick = this.onNavClick.bind(this);
        this.onTodoAdd = this.onTodoAdd.bind(this);
        this.onTodoClick = this.onTodoClick.bind(this);
    }

    onNavClick(str) {
        this.setState({selected: str});
    }

    onTodoAdd(text) {
        console.log('adding '+ text);
        let todo = {
            text: text,
            complete: false
        };
        this.setState({todos: this.state.todos.concat(todo)}, () => {
            console.log(this.state.todos);
        });
    }

    onTodoClick(name) {
        this.setState({
            todos: this.state.todos.map((todo) => {
                if (todo.text === name) {
                    todo.complete = !todo.complete;
                    return todo;
                }
                return todo;
            })
        });

    }

    render() {
        return (
            <div className="wrapper">
                <Navigation currentSelected={this.state.selected}
                            onNavClick={this.onNavClick}/>

                <Home selected={this.state.selected} onTodoAdd={this.onTodoAdd}/>
                <TodoList todos={this.state.todos} onTodoClick={this.onTodoClick}/>
            </div>
        )
    }


}

export default  App