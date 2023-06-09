import React from "react";
import { Component } from "react";
import { Link } from "react-router-dom";
import "../Styles/GuideRegister.css";
import axios from 'axios';

export default class FGuideRegister extends Component {

	
    constructor(props) {
        super(props);
        this.onChangefullName = this.onChangefullName.bind(this);
        this.onChangelocation = this.onChangelocation.bind(this);
        this.onChangelanguages = this.onChangelanguages.bind(this);
        this.onChangedescription = this.onChangedescription.bind(this);
        this.onChangecontactNo = this.onChangecontactNo.bind(this);
		this.onChangeEmail = this.onChangeEmail.bind(this);
       
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            fullName: '',
            location: '',
            languages:'',
            description:'',
            contactNo:'',
			Email:''
           
            
        
        }
    }
    onChangefullName(e){
        this.setState( {
            fullName: e.target.value
        });
    }
    onChangelocation(e){
        this.setState( {
            location: e.target.value
        });
    }
    onChangelanguages(e){
        this.setState( {
            languages: e.target.value,
        });
    }
    onChangedescription(e){
        this.setState( {
            description: e.target.value
        });
    }
    onChangecontactNo(e){
        this.setState( {
            contactNo: e.target.value
        });
    }
	onChangeEmail(e){
        this.setState( {
            Email: e.target.value
        });
    }
   
   
    
    
    onSubmit(e){
        e.preventDefault();
        const obj = {
            fullName : this.state.fullName,
            location : this.state.location,
            languages : this.state.languages,
            description : this.state.description,
            contactNo : this.state.contactNo,
			Email : this.state.Email
           
           
        };

                    if(this.state.contactNo.length === 10){
                      
                            axios.post('http://localhost:8090/femaleGuide/add',obj)
                                .then(res => {
                                    alert("add Successfully");
                                    this.setState({
										fullName: '',
										location: '',
										languages:'',
										description:'',
										contactNo:'',
										Email:''
                                       
                            
                                    })
                                    console.log(res.data)});
                            this.props.history.push('/guidefemale');
                      
					  window.location.replace('/guidefemale');
                        
                    } 
                    else {
                        alert('Pleace enter valid phone number.');
                    }
          
        
    }



	render() {
		return (
			<div className='GuideRegister'>
				<form onSubmit={this.onSubmit}>
					<h2>ADD Account</h2>
					<div className='form-row name'>
						<div className='form-group'>
							<p className="form-control">Guide's Full Name</p>
						
							<input
								type='text'
								className='form-control'
								id='name'
								
								required
								   value={this.state.fullName}
								   onChange={this.onChangefullName}
							/>
						</div>
						<div className='form-group'>
						
							<p className="form-control">Location</p>
							<input
								type='text'
								className='form-control'
								id='location'
								
								required
								  value={this.state.location}
								   onChange={this.onChangelocation}
							/>
						</div>
						<div className='form-group'>
					
							<p className="form-control">Speaking Languages</p>
							<input
								type='text'
								className='form-control'
								id='language'
							
								required
								   value={this.state.languages}
								   onChange={this.onChangelanguages}
							/>
						</div>
					 
						<div className='form-group'>
						
							<p className="form-control">A brief Description about himself/herself</p>
							<textarea
								className='form-control'
								id='description'
							
								required
								   value={this.state.description}
								   onChange={this.onChangedescription}
							/>
						</div>
                        <div className='form-group'>
						
							<p className="form-control">Contact Number</p>
							<input
								className='form-control'
								id='number'
								
								required
								   value={this.state.contactNo}
								  onChange={this.onChangecontactNo}
							/>
						</div>
                        <div className='form-group'>
						
							<p className="form-control">Email</p>
							<input
								className='form-control'
								id='email'
								
								required
								   value={this.state.Email}
								   onChange={this.onChangeEmail}
							/>
						</div>

					</div>
				
					<button type='submit'>
						<Link to='/homepage'>add</Link>
					</button>
				</form>
			</div>
		);
	}
}
