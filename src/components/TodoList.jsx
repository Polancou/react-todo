import {TodoItem} from "./TodoItem.jsx";

export const TodoList = ({todos, removeTodo, updateTodo}) => {
    return (
        <div className="mt-8 bg-white rounded-t-md [&>article]:p-4">
            {
                todos.map(todo =>
                    <TodoItem key={todo.id} todo={todo} removeTodo={removeTodo} updateTodo={updateTodo}/>
                )
            }
        </div>
    )
}