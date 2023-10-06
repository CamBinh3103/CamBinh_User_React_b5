import axios from "axios";
import React, { Component, createRef } from "react";
import { connect } from "react-redux";
import { SET_DATA_FORM, SET_USER } from "../../redux/constant/user";
import { setUserAction } from "../../redux/action/user";

class Form extends Component {
  componentDidMount() {
    this.inputRef.current.focus();
    this.inputRef.current.value = "";
    this.inputRef.current.style.color = "red";
  }
  inputRef = createRef();
  formRef = createRef();

  handleChangeForm = (event) => {
    let { value, name } = event.target;
    let user = { ...this.props.user, [name]: value };
    this.props.hanleSetDataForm(user);
  };
  handleAddUser = () => {
    axios({
      url: "https://651fdb19906e276284c39f85.mockapi.io/users",
      method: "POST",
      data: this.props.user,
    })
      .then((res) => {
        console.log(res);
        this.formRef.current.reset();
        this.props.handleSetUser();
        //
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    return (
      <div>
        <form ref={this.formRef} className="form-inline">
          <input
            ref={this.inputRef}
            onChange={this.handleChangeForm}
            value={this.props.user.name}
            type="text"
            class="form-control"
            name="name"
            placeholder="Name"
          />
          <input
            onChange={this.handleChangeForm}
            value={this.props.user.account}
            type="text"
            class="form-control"
            name="account"
            placeholder="Account"
          />
          <input
            onChange={this.handleChangeForm}
            value={this.props.user.password}
            type="text"
            class="form-control"
            name="password"
            placeholder="Passowrd"
          />
          <button
            onClick={this.handleAddUser}
            type="button"
            className="btn btn-dark"
          >
            Thêm
          </button>
        </form>
      </div>
    );
  }
}
let mapStateToProps = (state) => {
  return {
    user: state.userReducer.user,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    handleSetUser: () => {
      dispatch(setUserAction());
    },
    hanleSetDataForm: (user) => {
      dispatch({
        type: SET_DATA_FORM,
        payload: user,
      });
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Form);