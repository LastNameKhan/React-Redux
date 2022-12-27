const initialState = {
  todos: [
    { title: "Learning Redux" },
    { title: "Build Todo" },
    { title: "Practice Project" },
  ],
};

export default function (state = initialState, action: any) {
  switch (action.type) {
    default:
      return state;
  }
}
