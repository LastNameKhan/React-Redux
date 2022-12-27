import {
  GET_DATA_REQUEST,
  GET_DATA_FAILURE,
  GET_DATA_SUCCESS,
} from "./fetchActionsTypes";

export const getDataSuccess: any = () => {
  console.log("GetDataSuccessAction");
  return async (dispatch: any, getState: any) => {
    try {
      const res = await fetch(
        "https://empappregular.herokuapp.com/getAllPosts"
      );
      const resJson = await res.json();
      console.log(resJson);
      dispatch(addAction(resJson));
    } catch (e) {
      dispatch(setError("Error"));
    }
  };
};

export const addAction2: any = (emp: string, name: string, pass: string) => {
  console.log("action 2");
  return async (dispatch: any, getState: any) => {
    // console.log("action 2", getState().todoReducer.todo);
    const res = await fetch("https://empappregular.herokuapp.com/signUp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        emp_id: emp,
        name: name,
        password: pass,
      }),
    });
    const resJson = await res.json();
    console.log(resJson);
    dispatch(addAction(resJson));
  };
};

export const addAction = (data: any) => {
  console.log("ActionData", data);
  return { type: "GET_DATA_SUCCESS", payload: data };
};

export const addAction3: any = (employee: string, password: string) => {
  console.log("action 2");
  return async (dispatch: any, getState: any) => {
    // console.log("action 2", getState().todoReducer.todo);
    const res = await fetch("https://empappregular.herokuapp.com/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        emp_id: employee,
        password: password,
      }),
    });
    const resJson = await res.json();
    if (res.status === 200) {
      if (resJson?.token) {
        console.log(resJson.token, "Token");
        sessionStorage.setItem("token", resJson.token);
      }
    } else {
      alert("Please check once again");
    }
    console.log(resJson);
    dispatch(addAction(resJson));
  };
};

export const addAction4: any = (
  title: any,
  about: any,
  subtitle: any,
  image: any
) => {
  return async (dispatch: any, getState: any) => {
    try {
      var formdata = new FormData();
      formdata.append("about", about);
      formdata.append("title", title);
      formdata.append("subtitle", subtitle);
      formdata.append("files", image, "google.png");

      const res = await fetch(
        "https://empappregular.herokuapp.com/createPost",
        {
          method: "POST",
          headers: {
            token: `${sessionStorage.getItem("token")}`,
          },
          body: formdata,
        }
      );
      if (res.status === 200) {
        const resJson = await res.json();
        alert(resJson.message);
      }
    } catch (e) {
      console.log(e);
    }
  };
};

export const setError = (t: string) => {
  return { type: GET_DATA_FAILURE, payload: { id: 5, title: t } };
};

export const signupAction = (id: any, name: any, pass: any) => {
  return {
    type: "ADD_SIGNUP",
    payload: { emp_id: id, name: name, password: pass },
  };
};
