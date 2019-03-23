import React from 'react';
import './item.css';
import {connect} from 'react-redux';
import {del} from '../../actions/notesActions';

class ItemDone extends React.Component{
  
    handleDelete=()=>{
        this.props.dispatch(del(this.props.element.id));
        
    }
  
render(){
   const {text} = this.props;
    return(
        <div className="item-container">
            <h2 className="text" >{text}</h2>
            <div>
               <button onClick={this.handleDelete} className="edit-btn">X</button>
            </div> 
        </div>
    );

}
}



export default connect()(ItemDone);