Starting off by implementing the react Ui components as follows:

**App** is the entry component of our app.It renders the header, the *AddTodo*, *TodoList*, and *VisibilityFilters* components.

**Addtodo** is the components that allows a user to input a todo item and add to the list upon clicking its "Add Todo" button:
>--It uses a controlled input that sets state upon *OnChange*.
>--When user clicks on the "Add Todo" button, it dispatches the action (that we will provide using React Redux) to add the todo to the store.

**TodoList** is the component that renders the list of todos:
>--It renders the filtered list of todos when one of the VisibilityFilters is selected.

**Todo** is the component that renders a single todo item:
>--It renders the todo content, and shows that a todo is completed by crossing it out.
>--It dispatches the action to toggle the todo's complete status upon onClick.

**VisibilityFilters** renders a simple set of filters: all,completed, and incomplete. Clicking on each one of them filters the todos:
>--It accepts an *activeFilter* prop from the parent that indicated which filter is currently selected by the user. An active filter rendered with an underscore.
>--It dispatched the *setFilter* action to update the selected filter.

**constants** holds the constants data for our app.

And finally **index** renders our app to the DOM.