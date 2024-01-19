import {Header} from "./components/Header.jsx";
import {TodoCreate} from "./components/TodoCreate.jsx";
import {TodoList} from "./components/TodoList.jsx";
import {TodoComputed} from "./components/TodoComputed.jsx";
import {TodoFilter} from "./components/TodoFilter.jsx";
import {useState} from "react";

const initialStateTodos = [
    {id: 1, title: "First step", completed: true},
    {id: 2, title: "Second step", completed: false},
    {id: 3, title: "Third step", completed: true},
    {id: 4, title: "Fourth step", completed: false}
]

const App = () => {
    const [todos, setTodos] = useState(initialStateTodos)

    const createTodo = (title) => {
        const newTodo = {
            title: title,
            completed: false,
            id: Date.now()
        }
        setTodos([...todos, newTodo])
    }

    const removeTodo = (id) => {
        setTodos(todos.filter(todo => todo.id!== id))
    }

    const updateTodo = (id) => {
        setTodos(todos.map(todo => (todo.id === id ? { ...todo, completed: !todo.completed } :todo)))
    }

    const computedItemsLeft = todos.filter((todo) => !todo.completed).length

    const clearCompleted = () => {
        setTodos(todos.filter(todo => !todo.completed))
    }

    const [filter, setFilter] = useState('active')

    const changeFilter = (filter) => setFilter(filter)

    const filterTodos = () => {
        switch (filter) {
            case "all":
                return todos
            case "active":
                return todos.filter((todo) =>!todo.completed)
            case "completed":
                return todos.filter((todo) => todo.completed)
            default:
                return todos
        }
    }

    return (
        <div className={"bg-[url('./assets/images/bg-mobile-light.jpg')] bg-no-repeat bg-contain bg-gray-100 min-h-screen"}>
            <Header />
            <main className={"container mx-auto px-4 mt-8"}>
                <TodoCreate createTodo={createTodo} />
                <TodoList todos={filterTodos()}
                          removeTodo={removeTodo}
                          updateTodo={updateTodo}/>
                <TodoComputed computedLeft={computedItemsLeft}/>
                <TodoFilter changeFilter={changeFilter}/>
            </main>
            <footer className={"text-center"}>
                Drag & drop to reorder list
            </footer>
        </div>
    )
}

export default App