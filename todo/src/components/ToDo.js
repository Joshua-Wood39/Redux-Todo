import React from 'react';
import { connect } from 'react-redux';
import { addNewTodo, toggleTodo, deleteTodo } from '../actions';


class ToDo extends React.Component {
    state = {
        inputText:''
    }

    handleAdd = e => {
        e.preventDefault();
        this.props.addNewTodo(this.state.inputText);
        this.setState({inputText: ''});
    }

    toggleTodo = id => {
        this.props.toggleTodo(id);
    }

    

    render() {
        return (
            <div>
                <h1>ToDo List</h1>
                <input
                    type="text"
                    value={this.state.inputText}
                    onChange={e => this.setState({ inputText: e.target.value})}
                />
                <button onClick={this.handleAdd}>Submit</button>
                <button onClick={this.props.deleteTodo}>Delete Completed</button>
                <div className="theList">
                    {this.props.todoFromMSTP.map(e => (
                        <h3 
                            onClick={() => this.toggleTodo(e.id)} 
                            key={e.id}
                            style={e.completed ? {textDecoration : 'line-through'} : null}
                            >{e.value}</h3>
                    ))}
                </div>
            </div>
        )
    }


};


const mapStateToProps = state => {
    return {
        todoFromMSTP: state.todo
    };
};

export default connect(mapStateToProps, { addNewTodo, toggleTodo, deleteTodo }) (ToDo);