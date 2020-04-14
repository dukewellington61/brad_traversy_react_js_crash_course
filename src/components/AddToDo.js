import React, { Component } from 'react'

export class AddToDo extends Component {
    render() {
        return (
           <form style={{ display: 'flex' }}>
               <input 
                    style={{ flex: '10', padding: '5px' }}
                    type="text"
                    name="title"
                    placeholder="Add Todo ..."
                    required
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

export default AddToDo
