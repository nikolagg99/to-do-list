import { Component } from 'react';
import '../style/TaskCard.css';
import plus from '../images/plus_button.png';

class AddTaskCard extends Component{
    constructor(props){
        super(props);
        this.state={};
    }

    render(){
        return(
            <>
            <div className="task-card" onClick={this.props.showModal}>
                <div className="plus-sign-container">
                    <img className='img-plus' src={plus} alt = "Plus" ></img>
                </div>
                <div className="add-task-container">
                    <h4>Add task...</h4>
                </div>
            </div>          
            </>
        );
    }
}

export default AddTaskCard;