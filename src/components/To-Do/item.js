import React from 'react';
import './item.css';
import {connect} from 'react-redux';
import {del} from '../../actions/notesActions';
import {done} from '../../actions/notesActions';

class ToDoItem extends React.Component{
  
    handleDelete=()=>{
        this.props.dispatch(del(this.props.element.id));
    }
    handleDone=()=>{
        this.props.dispatch(done(this.props.element.id));
    }
    
render(){
   const {text} = this.props;
    return(
        <div className="item-container">
            <h2 className="text" >{text}</h2>
            <div>
               <button onClick={this.handleDone} className="edit-btn">Done</button>
               <button onClick={this.handleDelete} className="edit-btn">X</button>
            </div> 
        </div>
    );

}
}



export default connect()(ToDoItem);