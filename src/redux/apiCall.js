import { loginFailure, loginStart, loginSuccess } from "./userRedux";
import { publicRequest } from "../requestMethods";

export const login = async (dispatch, user) => {
  dispatch(loginStart());

  try {
    const res = await publicRequest.post("/auth/login", user);
    console.log(res.data.accessToken);
    dispatch(loginSuccess(res.data));
    localStorage.setItem("login", JSON.stringify(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};
