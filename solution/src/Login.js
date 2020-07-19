import React, { Component } from 'react';
// import { login } from '../services/auth';
import { Link } from 'react-router-dom';
import './Login.css'

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
        // this.emailInputRef = React.createRef();
        // this.passwordInputRef = React.createRef();
    }
    login = (event) => {
        localStorage.setItem('email',this.state.email);
        event.preventDefault();
        this.props.history.push('/Home')

    }
    handleChange = (event) => {
        this.setState(
            {email : event.target.value}
        );

    }
    // updateCredentials = () => {
    //     this.setState({
    //         email: this.emailInputRef.current.value,
    //         password: this.passwordInputRef.current.value
    //     });
    // }
    render() {
        return (
            <div>
                <div id="form-id">
                    <h2 className="sign" style={{ background: '#e6dede8f' }}>Sign In</h2>
                    <hr className="line" />
                    <form onSubmit={this.login}>
                        <div className="form-group " >
                            <label htmlFor="email" className="control-label mail">Username or email*</label>

                            <input name="email" className="form-control" value={this.state.email} onChange={this.handleChange} />
                        </div>
                        <div className="form-group ">       
                            <label htmlFor="password" className="control-label password">Password*</label>
                            <input name="password" className="form-control" value={this.state.password} onChange={this.handleChange} />
                        </div>
                        <div className="checkbox">
                            <label>
                                <input type="checkbox" value="Remember me" />Remember me
                   </label>
                        </div>
                        <div className="form-group">
                            <button className="btn btn-primary signs">Sign In</button>
                           
                        </div>
                        <Link to="/register" className="last">Need an account? sign in now</Link>
                    </form>
                </div>
                <div>
                </div>
            </div>
        );
    }
}

export default Login;