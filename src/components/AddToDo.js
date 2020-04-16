import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class AddToDo extends Component {
    state = {
        title: ''
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addToDo(this.state.title);
        this.setState({ title: '' });
    }

    onChange = e => this.setState({ title: e.target.value });

    // In case we have more than one input field e.g. name, age, whatever, .. 
    // [e.target.name] is the key title in the state object (if attribute name="title" is set in input tag)
    // onChange = e => this.setState({ [e.target.name]: e.target.value });

    render() {
        return (
           <form onSubmit={this.onSubmit} style={{ display: 'flex' }}>
               <input 
                    style={{ flex: '10', padding: '5px' }}
                    type="text"
                    name="title"
                    placeholder="Add Todo ..."
                    value={this.state.title}
                    onChange={this.onChange}
                />
                <input 
                    type="submit" 
                    value="Submit"
                    className="btn"
                    style={{flex: '1'}}                    
                />
           </form>
        )
    }
}

AddToDo.propTypes = {
    addToDo: PropTypes.func.isRequired    
}
export default AddToDo
