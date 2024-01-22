import {IconCross} from "./icons/IconCross.jsx";
import {IconCheck} from "./icons/IconCheck.jsx";
import React from "react";

export const TodoItem = React.forwardRef(({todo, removeTodo, updateTodo, ...props}, ref) => {
        const {id, title, completed} = todo;
        return (
            <article {...props}
                     ref={ref}
                     className="flex gap-4 border-b border-b-gray-400 ">
                <button className={`flex-none rounded-full h-5 w-5 border-2 
            ${completed
                    ? 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex justify-center items-center'
                    : 'inline-block'}`}
                        onClick={() => updateTodo(id)}
                >
                    {completed && <IconCheck/>}
                </button>
                <p className={`text-gray-600 dark:text-gray-300 grow ${completed && `line-through`}`}>{title}</p>
                <button className={"flex-none"} onClick={() => removeTodo(id)}>
                    <IconCross/>
                </button>
            </article>
        )
    }
)