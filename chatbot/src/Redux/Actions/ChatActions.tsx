export const msgAction: any = (mesg: any, userdata: any) => {
  return async (dispatch: any, getState: any) => {
    dispatch(
      addAction({
        time: new Date(),
        text: mesg,
        name: "text",
        user: userdata,
      })
    );

    const res = await fetch("https://fipolo-webhook-test.herokuapp.com/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: mesg,
      }),
    });
    const resJson = await res.json();
    console.log(resJson);
    if (resJson) {
      dispatch(
        addAction({
          time: new Date(),
          text: resJson.reply,
          name: "test",
          user: userdata,
        })
      );
    }
  };
};

export const addAction = (data: any) => {
  console.log("ActionData", data);
  return { type: "GET_DATA_SUCCESS", payload: data };
};
