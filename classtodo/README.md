### Redux Using Class Based Components
**Create a React app using *npx create-react-app my-app --template typescript***
 **Then we are going to install redux and react-redux**
 **We will walk through the App that what we want to build first**
 1.We need to display the input feild to add our todo items.
 2.We need a list to show the added todo items in the list
 3.Now we want to focus on the funtionality which is adding the item into the todolist via button click which can be achieved by :- passing of an action type into the reducer function which helps us in updating the store of the redux.
 4.The Action which we will be needing are ADD TODO
 DELETE TODO
 EDIT TODO

 now for the same we have to build the reducer function which is going to be 

 addTodo
 removeTodo
 editTodo

 Now lets just know about the parts of redux:-
 1. Store - it holds the state of our application all of the states data is stored inside of redux.
 2. Reducer - Joins our state to the store and updates the state based on actions that we passing into the reducers.
 3. actions - Functions that are being dipatched or we can say that which are being called and tell the reducer what to do.
 4. Provider - It wraps our entire app with the Provider API we can access our store from anywhere in our App.
 
 ## Understanding the flow of the parts of redux. Redux follows Flux architecture instead of MVC architecture(modal view control)

 Action are being dispatched to the reducer.The reducer follows the action type that has been provided within a switch case function, we can us if and else condition as well but it is not a good practice in redux as we have n number of states to be managed.If the action doesn't match it will return the default value. Now the output we get from the switch case will be passed onto the createStore to create our store and it only stores it values.

 Folder Structure that is recommended by Redux official docs is :-
 into the src folder
 src --> actions --> ActionTypes,Actions
 src --> components --> TodoList
 src --> reducers --> index,Todoreducers

 ## Starting of the Application :-
 1.First we will wrap our App component inside index file with the Provider which is provided by redux itself we will passing there store as props which is going to store our state data init.

 2. Now we will create our store by using some default syntax provided by redux to call out the store and create it.

What are doing here is we are creating a component called TodoList.tsx. An Action folder and a reducer folder as well.In the actions folder we will add two additional files.One is the TodoActions.tsx which will handle all our actions and a ActionTypes.jsx in which we store our actions type names as constant or we can say that the as per redux naming convention.In the reducer folder we will add aa TodoReducers.tsx file that will handle all our reducers and an index file that will bring all our reducers together and combine them in one.

3.Now we use connect function that will wrap our TodoList.tsx component.With connect we will actually be able to access our state as props.connect takes four optional parameters,but in our case we will use the first two.mapStateToProps and mapDispatchToProps.If we use only one of two the one we don't use should be passed as null.

**mapStateToProps provide us with the store.Every time the state changes this function will be called**

It takes two parameters.state and ownProps.With state the function is called when the state changes.With state and ownProps the function is called both when the state changes and when the current component receives props.In our case we just pass state and set todos with the state.todos that was created by our store.
