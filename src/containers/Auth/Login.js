import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";
import * as actions from "../../store/actions";
import './Login.scss';
import { FormattedMessage } from 'react-intl';


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            isShowPass: false
        }
    }

    handleOnChangeUsername = (e) => {
        this.setState({
            username: e.target.value
        })
    }

    handleOnChangePassword = (e) => {
        this.setState({
            password: e.target.value
        })
    }

    handleLogin = () => {

    }
    handleShowPassword = () => {
        this.setState({
            isShowPass: !this.state.isShowPass
        })
    }

    render() {
        return (
            <div className='login-background'>
                <div className='login-container'>
                    <div className='login-content row'>
                        <div className='col-12 text-login'>Login</div>
                        <div className='col-12 form-group login-input'>
                            <label>Username:</label>
                            <input onChange={(e) => this.handleOnChangeUsername(e)} value={this.state.username} type='text' className='form-control input' placeholder='Enter your username' />
                        </div>

                        <div className='col-12 form-group login-input'>
                            <label>Password:</label>
                            <input onChange={(e) => this.handleOnChangePassword(e)} value={this.state.password} type={this.state.isShowPass ? 'text' : 'password'} className='form-control input' placeholder='Enter your password' />
                        </div>
                        <i onClick={this.handleShowPassword} className={this.state.isShowPass ? "fas fa-eye eye-icon" : "fas fa-eye-slash eye-icon"}></i>
                        <div className='col-12'>
                            <button onClick={() => this.handleLogin()} className='btn-login'>Login</button>
                        </div>
                        <div className='col-12'>
                            <span className='forgot-password'>Forgot your password?</span>
                        </div>
                        <div className='col-12 text-center mt-3'>
                            <span className='text-other-login'> Or login with:</span>
                        </div>
                        <div className='col-12 social-login'>
                            <i className="fab fa-google google"></i>
                            <i className="fab fa-facebook-f facebook"></i>
                        </div>

                    </div>
                </div>
            </div >
        )
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        navigate: (path) => dispatch(push(path)),
        adminLoginSuccess: (adminInfo) => dispatch(actions.adminLoginSuccess(adminInfo)),
        adminLoginFail: () => dispatch(actions.adminLoginFail()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
