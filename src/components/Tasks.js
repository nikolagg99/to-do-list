import React, {Component} from 'react';
import AddTaskCard from '../components/AddTaskCard';
import Modal from '../components/AddTaskModal';
import '../style/Tasks.css';
import '../style/TaskCard.css';
import Moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from "@fortawesome/free-solid-svg-icons";

class Tasks extends Component{
    constructor(props){
        super(props);
        this.state={
            show: false,
            tasks:[]
        };
    }

    showModal = e =>{
        this.setState({
            show:true
        });
    };

    closeModal = e =>{
        this.setState({
            show: false
        });
    };

    readTask = () =>{
        fetch(`http://localhost:3000/read-tasks/${this.props.id}`, {
            method: 'get',
            headers: {'Content-Type': 'application/json'},      
        })
        .then(response => response.json())
        .then(tasks => {
            this.setState({tasks})
        })
    }

    componentDidMount(){
       this.readTask();
    }

    deleteTask = (id) =>{
        fetch(`http://localhost:3000/delete-task/${id}`, {
            method: 'delete',
            headers:{'Content-Type': 'application/json'}
        })
        .then(response => response.json())
        .then(tasks => {
            this.setState({tasks});
            this.readTask();
        })
    }

    render(){
        return(
            <div className="tasks-container">
                <AddTaskCard showModal = {this.showModal}/>
                <Modal readTask={this.readTask} show = {this.state.show} closeModal ={this.closeModal} id={this.props.id}/>
                {
                    this.state.tasks.map(data => {
                        return <div key={data.id} className="task-card">
                            <div className="date-container">
                                <h3>
                                {
                                    Moment(data.datefortask).format('DD-MM-YYYY')
                                }
                                </h3>
                            </div>
                            <div className="task-name-container">
                                <h4>{data.taskname}</h4>
                            </div>
                            <div className="task-explanation-container">
                                <p>{data.taskdescription}</p>
                            </div>
                            <button onClick={() => {this.deleteTask(data.id)}}><FontAwesomeIcon icon = {faTrash} /></button>
                        </div>
                        })
                }
            </div>
        );
    }
}

export default Tasks;