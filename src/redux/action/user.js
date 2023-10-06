import axios from "axios";
import { SET_USER } from "../constant/user";

export let setUserAction = () => {
  return (dispatch) => {
    axios({
      url: "https://651fdb19906e276284c39f85.mockapi.io/users",
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