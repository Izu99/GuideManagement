import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import axios from "axios";



class GtableRow extends Component {
    constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
    }
    delete(){
        axios.get('http://localhost:8090/femaleGuide/delete/'+this.props.obj._id)
            .then(this.setState({redirect: true}))
            .catch(err => console.log(err))
        //this.props.history.push('/index');
        alert(" Successfully Deleted....")
        window.location.replace('/FemaleTableView');
    }
    render() {
        return (
           <tr>
               
               <td>
                   {this.props.obj.fullName}
               </td>
               <td>
                   {this.props.obj.location}
               </td>
               <td>
                   {this.props.obj.languages}
               </td>
               <td>
                   {this.props.obj.description}
               </td>
               <td>
                   {this.props.obj.contactNo}
               </td>
               <td>
                   {this.props.obj.Email}
               </td>
               <td className='profile-actions'>
               <button className='btn'>
								<Link to={'/EditFguide/' + this.props.obj._id}>Edit</Link>
							</button>
                 &nbsp;
                   <button onClick={this.delete} className="btn btn-danger">Delete</button>
               </td>
           </tr>
        );
    }
}

export default GtableRow;