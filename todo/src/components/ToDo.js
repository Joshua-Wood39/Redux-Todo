import React from 'react';
import { connect } from 'react-redux';
import { addNewTodo } from '../actions';


class ToDo extends React.Component {
    state = {
        inputText:''
    }

    handleAdd = e => {
        e.preventDefault();
        this.props.addNewTodo(this.state.inputText);
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
                <div className="theList">
                    {this.props.todoFromMSTP.map(e => (
                        <h3>{e.value}</h3>
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

export default connect(mapStateToProps, { addNewTodo }) (ToDo);