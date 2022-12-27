export const quizActions: any = (questiondata: any) => {
  return async (dispatch: any) => {
    try {
      const res = await fetch(
        "https://fipolo-webhook-test.herokuapp.com/add-question",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            que: questiondata.question,
            option1: questiondata.option1,
            option2: questiondata.option2,
            option3: questiondata.option3,
            option4: questiondata.option4,
            ans: questiondata.answer,
            userId: questiondata.userId,
          }),
        }
      );
      const resJson = await res.json();
      console.log(resJson, "Api Response");
      dispatch(
        addAction({
          user: questiondata,
        })
      );
    } catch (e) {
      console.log(e);
    }
  };
};

export const getQuestionsData: any = () => {
  return async (dispatch: any) => {
    try {
      const res = await fetch(
        "https://fipolo-webhook-test.herokuapp.com/get-questions/8223037373"
      );
      const resJson = await res.json();
      console.log(resJson);
      dispatch(getDataSuccess(resJson.questions));
    } catch (e) {
      console.log(e);
    }
  };
};

export const addAction = (data: any) => {
  return { type: "POST_DATA_SUCCESS", payload: data };
};

export const getDataSuccess = (questions: any) => {
  return { type: "GET_DATA_SUCCESS", payload: questions };
};

export const setScoreAction = (answer:any,index:any,currentScore:any) => {
    let score = [...currentScore];
    if(currentScore.length === 0 || currentScore.length === index) {
        score.push(answer)
    } else {
        score = score.map((e: any,i: any) => i === index ? answer : e)
    }
    return { type: "SET_SCORE", payload: score };
  };