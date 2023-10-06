import axios from "axios";
import { SET_USER } from "../constant/user";

export let setUserAction = () => {
  return (dispatch) => {
    axios({
      url: "https://64de24a0825d19d9bfb22b3d.mockapi.io/users",
      method: "GET",
    })
      .then((res) => {
        let action = {
          type: SET_USER,
          payload: res.data,
        };
        dispatch(action);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};