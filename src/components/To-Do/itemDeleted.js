import React from 'react';
import './item.css';
import {connect} from 'react-redux';
import {restore} from '../../actions/notesActions';

class ItemDeleted extends React.Component{
  
    handleDone=()=>{
        this.props.dispatch(restore(this.props.element.id));
    }
    
render(){
   const {text} = this.props;
    return(
        <div className="item-container">
            <h2 className="text" >{text}</h2>
            <div>
               <button onClick={this.handleDone} className="edit-btn">Restore</button>
            </div> 
        </div>
    );

}
}



export default connect()(ItemDeleted);