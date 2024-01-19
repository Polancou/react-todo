import {useState} from "react";

export const TodoCreate = ({createTodo}) => {

    const [title, setTitle] = useState("")
    const handleSubmitAddTodo = (e) => {
        e.preventDefault()

        if (!title.trim()) {
            return setTitle("")
        }

        createTodo(title)
        setTitle("")
    }

    return (
        <form className={"flex items-center gap-4 bg-white rounded-md overflow-hidden py-4 px-4 dark:bg-gray-800 transition-all duration-1000"}
              onSubmit={handleSubmitAddTodo}
        >
            <span className={"rounded-full h-5 w-5 border-2 inline-block"}></span>
            <input className={"w-full text-gray-400 outline-none dark:bg-gray-800 transition-all duration-1000"}
                   type="text"
                   placeholder={"Create a new todo"}
                   value={title}
                   onChange={(e) => setTitle(e.target.value)}
            />
        </form>
    )
}