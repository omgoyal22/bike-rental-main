import axios from "axios";
import { message } from "antd";
import { baseURL } from "../../api";

export const userLogin = (reqObj) => async (dispatch) => {
  dispatch({ type: "LOADING", payload: true });

  try {
    const response = await axios.post(`${baseURL}/users/login`, reqObj);
    localStorage.setItem("user", JSON.stringify(response.data));
    message.success("Login Success");
    dispatch({ type: "LOADING", payload: false });
    setTimeout(() => {
      window.location.href = "/";
    }, 500);
  } catch (err) {
    console.log(err);
    message.error("Invalid Credintials");
    dispatch({ type: "LOADING", payload: false });
  }
};

export const userRegister = (reqObj) => async (dispatch) => {
  dispatch({ type: "LOADING", payload: true });

  try {
    const response = await axios.post(`${baseURL}/users/register`, reqObj);
    message.success("Registered sucessfully");
    setTimeout(() => {
      window.location.href = "/login";
    }, 500);

    dispatch({ type: "LOADING", payload: false });
  } catch (err) {
    console.log(err);
    message.error("registration failed");
    dispatch({ type: "LOADING", payload: false });
  }
};
