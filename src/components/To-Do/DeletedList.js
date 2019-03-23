import React from 'react';
import ItemDeleted from './itemDeleted';
import {connect} from 'react-redux';
import {add} from '../../actions/notesActions';
import './list.css';
import uuidv4 from 'uuid/v4';


class DeletedList extends React.Component{
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
        <div className="deleted-list">
        <h2 className="title">Deleted</h2>
        <div className="items">
                {this.props.data.filter(n=>n.deleted).map(n=> <ItemDeleted key={n.id} text={n.note} element={n}/>)}
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

export default connect(mapStateToProps,mapDispatchToProps)(DeletedList);