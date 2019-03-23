import React from 'react';
import ToDoItem from './item';
import {connect} from 'react-redux';
import {add} from '../../actions/notesActions';
import './list.css';
import uuidv4 from 'uuid/v4';


class ToDoList extends React.Component{
    state ={
        note:'',
    }
handleChange=(e)=>{
    const value =e.target.value;
    this.setState({note: value});
}
handleSubmit=(e)=>{
    e.preventDefault();
    if(!this.state.note) return;
    const input ={
        note:this.state.note ,
        done: false,
        deleted:false,
        id:uuidv4(),
    };
    this.props.addNote(input);
    this.setState({note:''});
}

render(){
    return(
        <div className="List-container">
        <form onSubmit={this.handleSubmit} >
            <input className="add-item" type="text" onChange={this.handleChange} value={this.state.note} />
            <button type="submit" className="add-btn" >+</button>
        </form>
          <div className="items">
                {this.props.data.filter(n=>!(n.deleted || n.done)).map(n=> <ToDoItem key={n.id} text={n.note} element={n}/>)}
                </div>
        </div>
   );
}
}
const mapStateToProps=state=>({
    data: state.data,
})
const mapDispatchToProps = dispatch =>({
    addNote: newNote => dispatch(add(newNote)),
});

export default connect(mapStateToProps,mapDispatchToProps)(ToDoList);