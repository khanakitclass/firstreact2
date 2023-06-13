import React, { Component } from 'react';

class Employee extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            id: 101,
            name: 'amit',
            age: 50
        }
    }

    handleAge = () => {
        this.setState({
            age: 40
        })
    }
    
    render() {
        return (
            <div>
                <p>Name: {this.state.name}</p>
                <p>Age: {this.state.age}</p>
                <button onClick={this.handleAge}>Change Age</button>
            </div>
        );
    }
}

export default Employee;