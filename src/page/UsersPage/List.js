import axios from "axios";
import React, { Component } from "react";
import { connect } from "react-redux";
import { setUserAction } from "../../redux/action/user";
import { message } from "antd";

class List extends Component {
  componentDidMount() {
    this.props.handleSetUser();
  }
  handleRenderTable = () => {
    return this.props.users.reverse().map((user, index) => {
      return (
        <tr key={index}>
          <td>{user.id}</td>
          <td>{user.name}</td>
          <td>{user.account}</td>
          <td>{user.password}</td>
          <td>
            <button
              onClick={() => {
                this.handleDelelte(user.id);
              }}
              className="btn btn-danger"
            >
              Delete
            </button>
            <button
              onClick={() => {
                this.handleGetDetail(user.id);
              }}
              className="btn btn-info mx-1"
            >
              Edit
            </button>
            <button className="btn btn-success">Update</button>
          </td>
        </tr>
      );
    });
  };

  handleDelelte = (id) => {
    axios
      .delete(`https://64de24a0825d19d9bfb22b3d.mockapi.io/users/${id}`)
      .then((res) => {
        console.log(res);
        message.success("xoá thành công");
        this.props.handleSetUser();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  handleGetDetail = (id) => {
    axios
      .get(`https://64de24a0825d19d9bfb22b3d.mockapi.io/users/${id}`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Accout</th>
              <th>password</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{this.handleRenderTable()}</tbody>
        </table>
      </div>
    );
  }
}
let mapStateToProps = (state) => {
  return {
    users: state.userReducer.users,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    handleSetUser: () => {
      dispatch(setUserAction());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(List);