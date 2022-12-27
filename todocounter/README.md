### Redux Starter
**Different parts of redux and how they word together**
**Redux Tolkit to setup**

*Intro*  :- Redux is made up of actions,reducers,state and store.Each thing does one specific task. For Example :-

Lets just imagine a component that lets us deposit some money with the click of a button such as Deposit $10, Withdraw $10

When we click a button, we usually call a function which handles this event. This is where we would disptach an action

UseDispatch is used to disptach an action. Action.Type is the string that we pass into the switch case to perform that action. Which is again going to be used by the UI.
Whose Defination says *Dispatch is a function given to us by Redux, and lets us trigger actions*.

The action contains a type, and payload. The type is typically just string with the name of the action. The paylaad contains data we need to know about.For eg:- we can't deposit the money without knowing the amount.

The store recieves the action, and is in charge of holding the state.Think of it lika a database, in a sense that it holds all our data in one place.

The store is also in charge of updating the state based on the action and the current state which it does by using reducers.

Store updated state using action and the current state by using reducers.

A reducer is a function that taked the current state from the store, and the action. It combines things together and returns the new state.

Reducer is the conveyor belt- it takes the old state and the action, does some work, and spits out the new state.

The stores then save this new state which is returned from the reducer and passes the state to the components.This causes then to re-render, displaying the new data.

**Why Redux is needed**
Imagine a app with hundreads or even thousands of components. It would become unwidely to pass state around and remember which component is changing the state, How it's changing the state and so on.

By Breaking things up like this, we give different responsibilities to different things and we keep all our state in one place.

This makes it easier for us to understand and easier to test. For example, you can test reducers in isolation since they're just pure functions. We can test that our actions dispatch correctly, and that our store correctly saves the state.

**Configuration of Our Store**
Folder Structure :-
Create a folder in src called redux.
Create a file called store.js
and write the following code :-

import {configureStore} from "@redux/toolkit";

export default configureStore({
    reducer: {},
});

The Conifgure store functions does all the hard word for us. It creates the store whcih holds our state, combines our reducers.

The configureStore functions gives us back a store, which we can export. This allows us to link the store to our app which we'll do.

We need to pass our reducers to the configureStore function,which we do by passing an Object.

We haven't created any reducers yet, but we could have as many reducers as we want here.

**Connecting of Store to the APP**
Open Up index.tsx and update with the following :-

<Provider store={store}></Provider>

You will be getting Auto Suggestion for store.
We import the store and the Provider(at the top), and then we wrap our App component in the Provider component.The Provider needs to be given a store to use,so we pass in the store we just created. This gives our components access to the state that lives in the store.

**What is Create Slice and do we need to use it**
A slice goves is a way to store a piece, or slice, of data, and gives us all the things we need to change and retrieve that data.

The createSlice function will give us back some stuff and assign it to the todoSlice variable.

This is where we get our *actions* and *reducers* which we can export.

We need to pass some properties to this functions so it gives us back the right things. We do this with an object.

First, we give the slice a name.We're in the todo's slice so we'll call it todos. This is also what we'll see in the Redux dev tools.

We need to pass some properties to this function so it gives us back the right things. We do this with an Object.

Next we add initial State. We're going to add some dummy data for now.this can be empty, but we're getting to add stuff see what's going on

Now we add the reducers.The reducer responds to the action, takes the crretn state, and creates new srare based in the action payload. the first one we are adding is the addTodo reducer.

This is just a plain function.Redux passes in the *State* and *action* behind the scees. The state is the curretn state of this slice, and the action contains the type and the payload.

So when we disptach the *addTodo* action, this is the *reducer* that handles that action.

*Within the reducer,this is where we want to perform the logic to upadte the state*

Since we are addding a todo, the first thing we want to do is create a new todo object.This object is going to have the same properties that our other todos have.We'll generate a new ID based on the date to make sure it's unique,take the title from the payload,and default completed to false. 

Now we just push this to the state object. At this point, redux will take this new state and update the store.

This is the first one we need, but we'll add more reducers as we go through the tutorial.

**Export Actions and reducer**
We use destructuring to get the actions and export them, so our components can access them.

So the todoSlice has created a bunch of actions for us based on our reducer names, and we just use destructuring to get the *addTodo action* and export it.

Ans we export the reducer so we can add it to our store.

**ADD reducers to the Store**

import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './todoSlice';

export default configureStore({
	reducer: {
		todos: todoReducer,
	},
});

Remember that the store holds all our reducers and manages them for us.

For example we could have another reducer calles userReducer in here and the store wil handle everything for us.This just makes our code more manageable to maintain.

**Add New Todo**
We've created the reducer and the action to add a todo.This doesn't do anything yet because we haven't disptached the action.

**Dispatch the addtodo Action**
What we want to happen is when the user hits submit, we want to disptach the addTodo action.

In AddTodoForm.js when the user hits sibmit, we want to disptach the addTodo action.

update the code in AddTodoForm.js with the following:

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/todoSlice';

const AddTodoForm = () => {
	const [value, setValue] = useState('');
	const dispatch = useDispatch();

	const onSubmit = (event) => {
		event.preventDefault();
		if (value) {
			dispatch(
				addTodo({
					title: value,
				})
			);
		}
	};

	return (
		<form onSubmit={onSubmit} className='form-inline mt-3 mb-3'>
			<label className='sr-only'>Name</label>
			<input
				type='text'
				className='form-control mb-2 mr-sm-2'
				placeholder='Add todo...'
				value={value}
				onChange={(event) => setValue(event.target.value)}
			></input>

			<button type='submit' className='btn btn-primary mb-2'>
				Submit
			</button>
		</form>
	);
};

export default AddTodoForm;

-> We Import the useDispatch hook and the addTodo action.
-> Now inour function that geta called when the form is submitted, we'll add a call to disptach the addTodo action.
-> For each todo we need to know the title, se we'll add a new object and pass in the title.This object will get mapped to the *action Payload*. 

Now if we try this, nothing happens in our UI because we haven't updated the TodoList to pull data from Redux, which we'll do in a second.

If we open the Redux dev tools,you can see under the action tabs that out action has been disptached, and the payload has our title in it:

We can check that the state has been updated with the new todo by clicking on the *state* tab.

**Display Todo List**
Now to retrieve data from Redux
For ths we will use useSelector hook.
The useSelector hook accepts a function, and returns us the data based on that function.

So we'll pass in our function- in this case we'll do an arrow function.This Accepts the state which is passed in by Redux.In this case, we want to do *state.todos*.

Now this is going to go to the store, pick out all the todos from state, and assign this to the todos variable which we defined ourselves.

Since we've done the hard work already to display the list in our JSX, we just need to replace the dummy list with whatever we recieved from Redux.

If we try this, you can see that the todos are now being pulled from our todosSlice!.

The State value that gets passed in to the useSelector hook function is the entire state tree that is stored in redux.

So if you have multiple slices of state, This will return the whole thing.This lets us do pretty cool things - for example if we wnated to get a speicfic todo, or filter the list, we can do this here in this function.

**Make a Todo as Complete**
--> Create the reducer/action

Next we'll look at how to mark a todo as complete. This is ineteresting since it involves updating existing state. Update todoSlice.js with the following:


We add our new reducer. Remember that each reducer accepts the current state and an action which gets passed in by Redux.

When our component disptaches the toggleComplete action, this reducer will handle that action.

Now that we have our reducer we need to implement the logic to update the state.

So remember that each todo in the list has an ID. Our component will pass this ID as part of the action payload and we'll use the ID to determine which todo in the array we need to update.

We'll use the ID to find the index of the todo in the array, so if the ID is 1, it will return index 0.

Now that we know the index, we can update the "completed" property for the given todo.

We'll set the complete property for that todo to be whatever it is in the payload.

Lastly we export the action so that the components can disptach it.Remember that the createSlice function automaticlly creates actions based on our reducer names, so since we have a toggleComplete reducer, that means we have a toggleComplete action.

**Dispatch the Action**
Now if our checkbox is clicked, we want to trigger the toggleComplete action.Update Todoitem.js with the following:-

import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleComplete } from '../redux/todoSlice';

const TodoItem = ({ id, title, completed }) => {
	const dispatch = useDispatch();

	const handleCheckboxClick = () => {
		dispatch(toggleComplete({ id, completed: !completed }));
	};

	return (
		<li className={`list-group-item ${completed && 'list-group-item-success'}`}>
			<div className='d-flex justify-content-between'>
				<span className='d-flex align-items-center'>
					<input
						type='checkbox'
						className='mr-3'
						onClick={handleCheckboxClick}
						checked={completed}
					></input>
					{title}
				</span>
				<button className='btn btn-danger'>Delete</button>
			</div>
		</li>
	);
};

export default TodoItem;

We'll create the handleDeleteClick function which will disptach the delete action, passing the ID as an object in the payload. Remember, the reducer needs to know the ID of the todo to be removed.

**Display Total Completed Items**
Next we'll look at dsiplaying the number of completed items. Open up TotalCompleteItems.js and add the following:

import React from 'react';
import { useSelector } from 'react-redux';

const TotalCompleteItems = () => {
	const todos = useSelector((state) =>
		state.todos.filter((todo) => todo.completed === true)
	);

	return <h4 className='mt-3'>Total complete items: {todos.length}</h4>;
};

export default TotalCompleteItems;

First we import the useSelector hook and assign this to a variable so we can use it.

Now we can pass a function to tell redux what we want to return. We'll use the filter function to return all the todos that have a completed value of true.

Remember that the state value that gets passed to the selector is the TOTAL state tree, which is why we need to specify the todos in here.

Now the result of our function gets passed to the todos variable.Since we used the f
