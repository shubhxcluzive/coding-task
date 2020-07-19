import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class SignUp extends Component{
    constructor() {
        super();
        this.stete = {
            email: '',
            password: '',
            phone: ''
        }
    }
    handleChange = (e) => {
        console.log(e,"eee")
        this.setState({
            email: e.target.value,
            password: e.target.value,
            phone: e.target.value
        })
console.log(this.state,'state')
    }
    registration = (e) => {
        
    }
    render() {
        return (
            <div>
                <div id="form-id">
                    <h2 className="sign" style={{ background: '#e6dede8f' }}>Register</h2>
                    <hr className="line" />
                    <form onSubmit={this.registration}>
                        <div className="form-group " >
                            <label htmlFor="email" className="control-label mail">Username or email*</label>
                            <input name="email" className="form-control"  onChange={this.handleChange} />
                        </div>
                        <div className="form-group ">
                            <label htmlFor="phone" className="control-label password">Phone no*</label>
                            <input name="phone" className="form-control"  onChange={this.handleChange} />
                        </div>
                        <div className="form-group ">
                            <label htmlFor="password" className="control-label password">Password*</label>
                            <input name="password" className="form-control"  onChange={this.handleChange} />
                        </div>
                        <div className="form-group">
                            <button className="btn btn-primary signs">Sign Up</button>

                        </div>
                    </form>
                </div>
                <div>
                </div>
            </div>

        );
    }
}
export default SignUp;
