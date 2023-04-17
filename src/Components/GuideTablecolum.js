import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import axios from "axios";



class GGtableRow extends Component {
    constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
    }
    delete(){
        axios.get('http://localhost:8090/guide/delete/'+this.props.obj._id)
            .then(this.setState({redirect: true}))
            .catch(err => console.log(err))
        //this.props.history.push('/index');
        alert(" Successfully Deleted....")
        window.location.replace('/GuideTableView');
    }
    render() {
        return (
           <tr>
               
               <th>
                   {this.props.obj.fullName}
               </th>
               <th>
                   {this.props.obj.location}
               </th>
          
              
           </tr>
        );
    }
}

export default GGtableRow;