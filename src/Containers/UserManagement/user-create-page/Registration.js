import { Select } from '@material-ui/core';
import { render } from '@testing-library/react';
import React, { Component } from 'react';
import { environment } from '../../../environment';
import axios from 'axios';
import ReCAPTCHA from 'react-google-recaptcha';
import Input from '../../../Components/UI/Input/Input'
export default class Registration extends Component {
constructor() {
    super();
    this.state = {
      fields: {
        username:'',
        firstName:'',
        lastName:'',
        email: '',
        organization:{value:''},
        department:{value:''},
        password: '',
        passwordConfirmation: '',
        role: 'user'
      },
      errors: {},
      organizationOptions: [],
      departmentOptions : []
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);
  };

  state = {
    regForm: {
        userName: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: ''
            }, 
            value: '',
            validation: {
                required: true
            },
            valid: false,
            touched: false
        },
        firstName: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: ''
            },
            value: '',
            validation: {
                required: false
            },
            valid: false,
            touched: false
        },
        LastName: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: ''
            },
            value: '',
            validation: {
                required: false
            },
            valid: false,
            touched: false
        },
        country: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: ''
            },
            value: '',
            validation: {
                required: true
            },
            valid: false,
            touched: false
        },
         password: {
          elementType: 'input',
          elementConfig: {
              type: 'password',
              placeholder: ''
          },
          value: '',
          validation: {
              required: true
          },
          valid: false,
          touched: false
      },
        email: {
            elementType: 'input',
            elementConfig: {
                type: 'email',
                placeholder: ''
            },
            value: '',
            validation: {
                required: true,
                isEmail: true
            },
            valid: false,
            touched: false
        },
        organization: {
            elementType: 'select',
            elementConfig: {
                options: [
                    {value: 'fastest', displayValue: 'Fastest'},
                    {value: 'cheapest', displayValue: 'Cheapest'}
                ]
            },
            value: '',
            validation: {},
            valid: true
        },
        department: {
          elementType: 'select',
          elementConfig: {
              options: [
                  {value: 'fastest', displayValue: 'Fastest'},
                  {value: 'other', displayValue: 'Other'}
              ]
          },
          value: '',
          validation: {},
          valid: true
      }
    },
    formIsValid: false,
    loading: false
}

  componentDidMount(){
    axios.get(`${environment.baseURL}${environment.departmentsURL}`)
    .then(response => {
      let data = response.data;
      if(data.length > 0){
        this.setState({departmentOptions: data})
      }
    }) 
    axios.get(`${environment.baseURL}${environment.organizationsURL}`)
    .then(response => {
     let data  = response.data;
      if(data.length > 0){
        this.setState({organizationOptions: data})
      }
    }) 
  }
  createSelectOptions(values){
      return values.map(val => {return {value:val,label:val}})
  }

  handleChange(e) {
    let fields = this.state.fields;
    fields[e.target.name] = e.target.value;
    this.setState({fields});
  }

  submituserRegistrationForm(e) {
    e.preventDefault();
    let selectValues= {'organization': this.state.fields.organization.value , 'department': this.state.fields.department.value}
    let formData = {...this.state.fields, ...selectValues}
    delete formData.passwordConfirmation;
    if (this.validateForm()) {
       axios({url: `${environment.baseURL}${environment.registerURL}`, 
        method: 'post',
        headers: { 'Content-Type': 'application/json'},
        data: formData
      })
      .then(response => {
        let fields = this.state.fields;
        Object.keys(fields).forEach(function(key,index) {
          if(key === 'organization' || key === 'department' ){
            fields[key]={value:'',label:''};
          }else{
            fields[key]='';
          }  

        })  
        this.setState({fields});
        alert("Form submitted");
      })
      .then(data => {
      })  
    }
  }
  handleSelectChange(value,{name}){
      let fields = this.state.fields;
      fields[name] = value;
      this.setState({fields})
  }
  validateForm() {

    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    if (!fields["username"]) {
      formIsValid = false;
      errors["username"] = "Can't be blank.";
    }

    if (!fields["email"]) {
      formIsValid = false;
      errors["email"] = "Can't be blank.";
    }
    if (!fields["password"]) {
      formIsValid = false;
      errors["password"] = "Can't be blank.";
    }
    if (!fields["passwordConfirmation"]) {
      formIsValid = false;
      errors["passwordConfirmation"] = "Can't be blank.";
    }
    if (typeof fields["password"] !== "undefined" && typeof fields["passwordConfirmation"] !== "undefined") {        
      if (fields["password"] != fields["passwordConfirmation"]) {
        formIsValid = false;
        errors["passwordConfirmation"] = "Passwords don't match.";
  
      }
  
  }
    this.setState({
      errors: errors
    });
    return formIsValid;
  }
   onChange(value) {
    console.log("Captcha value: ", value);
  }
render(){
    return <div>

<span className="standard-text side-text" >
Not ready to register? You can still
<a className="reg-link" href="/pages/show?page=gss%2Fgss_data">download the entire GSS dataset</a>
without an account.
</span>
<div className="form-header">
                <h2>Create an Account</h2>
                <p>Required <abbr>*</abbr></p>
            </div>  
        <form method="post"  className='simple_form form-horizontal'  name="userRegistrationForm"  onSubmit= {this.submituserRegistrationForm} >
            <div className="form-inputs">
              <div className="form-group string optional firstname form-inline">
              <div className="col-sm-3">
                        <label className="string optional control-label">First name</label>
                    </div>
                    <div className="col-sm-9">
                        <input className="string optional  form-control" type="text" name="firstName" id="firstName" value={this.state.fields.firstName} onChange={this.handleChange} />
                    </div>
                </div>
              <div className="form-group string optional lastname form-inline">
                    <div className="col-sm-3">
                        <label className="string optional control-label">Last name</label>
                    </div>
                    <div className="col-sm-9">
                        <input className="string optional  form-control" type="text" name="lastName" id="lastName" value={this.state.fields.lastName} onChange={this.handleChange} />
                    </div>
                </div>
              <div className="form-group username form-inline">
                    <div className="col-sm-3">
                        <label className="control-label"><abbr>*</abbr>Username</label>    
                    </div>  
                    <div className="col-sm-9">
                        <input type="text" className="form-control" name="username" value={this.state.fields.username} onChange={this.handleChange} />
                        {this.state.errors.username ? <div className="errorMsg">{this.state.errors.username}</div> : ''}
                    </div>  
                </div> 
              <div className="form-group form-inline">
                    <div className="col-sm-3">
                        <label><abbr>*</abbr>Email</label>
                    </div>
                    <div className="col-sm-9">
                        <input type="text" name="email" className="form-control" value={this.state.fields.email} onChange={this.handleChange}  />
                        {this.state.errors.email ? <div className="errorMsg">{this.state.errors.email}</div> : ''}
                    </div>
                </div>   
              <div className="form-group form-inline">
                    <div className="col-sm-3">
                        <label htmlFor="organization">Organization</label>
                    </div>  
                    <div className="col-sm-9">
                        <Select
                     
                        className="form-control"
                        name="organization" placeholder="Nothing Selected"
                        value={this.state.fields.organization}
                        onChange={this.handleSelectChange}
                        options={this.createSelectOptions(this.state.organizationOptions)}
                        theme={theme => ({
                            ...theme,
                            borderRadius: 0,
                            colors: {
                              ...theme.colors,
                              primary25: 'lightgrey',
                              primary: '#80bdff',
                            },
                          })}
                        />
                    </div>
                </div>
              <div className="form-group form-inline">
                  <div className="col-sm-3">
                      <label htmlFor="department">Department</label>
                  </div>  
                  <div className="col-sm-9">
                    <Select 
                      
                      className="form-control"
                      name="department" placeholder="Nothing Selected"
                      value={this.state.fields.department}
                      onChange={this.handleSelectChange}
                      options={this.createSelectOptions(this.state.departmentOptions)}
                      theme={theme => ({
                          ...theme,
                          borderRadius: 0,
                          colors: {
                            ...theme.colors,
                            primary25: 'lightgrey',
                            primary: '#80bdff',
                          },
                        })}
                    />
                  </div>
                </div>
              <div className="form-group form-inline">
                    <div className="col-sm-3">
                        <label><abbr>*</abbr>Password</label>
                    </div>
                    <div className="col-sm-9">
                        <input className="form-control" type="password" name="password" value={this.state.fields.password} onChange={this.handleChange} />
                        {this.state.errors.password ? <div className="errorMsg">{this.state.errors.password}</div> : '' }
                    </div>
                </div>
              <div className="form-group form-inline">
                    <div className="col-sm-3">
                      <label><abbr>*</abbr>Password Confirmation</label>
                    </div>
                    <div className="col-sm-9">
                      <input type="password" className="form-control" name="passwordConfirmation" value={this.state.fields.passwordConfirmation} onChange={this.handleChange} />
                      {this.state.errors.passwordConfirmation ? <div className="errorMsg">{this.state.errors.passwordConfirmation}</div> : '' }
                    </div> 
                </div>
               



                <ReCAPTCHA
  sitekey="6LftH-sZAAAAAFgV8e-t_flRXUEpSnQwVV9TWGUX"
  onChange={this.onChange}
/>
              <button type="submit" name="commit" className="submit-btn commit">REGISTER</button>
          </div>
        </form>
    </div>
}}
