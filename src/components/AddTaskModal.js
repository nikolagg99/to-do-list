import React, { Component } from  'react';
import '../style/AddTaskModalStyle.css';

class Modal extends Component{
    constructor(props){
        super(props);
        this.state={
            userid:this.props.id,
            datefortask:'',
            taskname: '',
            taskdescription: ''
        }
    }

    onDateChange = (event) => {
        this.setState({datefortask: event.target.value})
    }

    onTaskNameChange = (event) => {
        this.setState({taskname: event.target.value})
    }

    ontaskDescChange = (event) => {
        this.setState({taskdescription: event.target.value})
    }

    onSubmitTask = () => {
        fetch('https://mighty-anchorage-31699.herokuapp.com/add-task', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                userid: this.state.userid,
                datefortask:this.state.datefortask,
                taskname: this.state.taskname,
                taskdescription: this.state.taskdescription
            })
        })
        .then(response => response.json())
        .then(task => {
            if(task){
                this.props.closeModal();
                this.props.readTask(); 
            }  
        });
            
    }

    render(){
        if(!this.props.show){
            return null;
        }
        return(
            <div className='modal-div'>
                <p>Add task</p>
                <div className="date-container">
                    <label className="date-label" htmlFor="date"><b>Date: </b></label>
                    <input 
                        type="date" 
                        className="input-date" 
                        id="date" 
                        name="date"
                        onChange={this.onDateChange}
                        ></input>
                </div>
                <div className="form-group">
                    <label htmlFor="taskName"><b>Task name:</b> </label>
                    <input 
                        type="text" 
                        id="taskName" 
                        name="taskName"
                        className="add-task-input"
                        onChange={this.onTaskNameChange}
                        />
                </div>
                <div className="form-group">
                    <label htmlFor="taskDescription"><b>Task description:</b> </label>
                    <input 
                        type="text" 
                        id="taskDescription" 
                        name="taskDescription" 
                        className="add-task-input"
                        onChange={this.ontaskDescChange}
                        />
                </div>
                <hr/>
                <div className="btn-div">
                    <button className='close-btn' onClick={this.props.closeModal}>Close</button>
                    <button className='add-btn' onClick={this.onSubmitTask}>Add</button>
                </div>
            </div>
        );
    }
}

export default Modal;