import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './UserManage.scss';
import { getAllUsers } from '../../services/userService'
class UserManage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            arrUsers: []
        }
    }



    async componentDidMount() {
        let { data } = await getAllUsers('all')
        if (data && data.errCode === 0) {
            this.setState({
                arrUsers: data.users
            })
        }
    }


    render() {
        let arrayUsers = this.state.arrUsers
        return (
            <div className="users-container">
                <div className='title text-center'>Manager Choco page</div>
                <div className='users-table mt-3 mx-1'>
                    <table id="customers">
                        <tr>
                            <th>Email</th>
                            <th>First name</th>
                            <th>Last name</th>
                            <th>Address</th>
                            <th>Action</th>
                        </tr>
                        {arrayUsers && arrayUsers.map((item) => {
                            return (
                                <tr key={item.id}>
                                    <td>{item.email}</td>
                                    <td>{item.firstName}</td>
                                    <td>{item.lastName}</td>
                                    <td>{item.address}</td>
                                    <td>
                                        <button className='btn-edit'><i className="fas fa-pencil-alt"></i></button>
                                        <button className='btn-delete'><i className="fas fa-trash"></i></button>
                                    </td>
                                </tr>
                            )
                        })}
                    </table>
                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
