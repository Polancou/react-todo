import {TodoItem} from "./TodoItem.jsx";
import {Droppable, Draggable} from "@hello-pangea/dnd";


export const TodoList = ({todos, removeTodo, updateTodo}) => {
    return (
        <Droppable droppableId="todos">
            {(droppableProvided) => (
                <div ref={droppableProvided.innerRef}
                     {...droppableProvided.droppableProps}
                     className="mt-8 bg-white rounded-t-md [&>article]:p-4 overflow-hidden dark:bg-gray-800 transition-all duration-1000">
                    {
                        todos.map((todo, index) =>
                            (<Draggable key={todo.id}
                                        index={index}
                                        draggableId={`${todo.id}`}>
                                    {
                                        (draggableProvided) => (
                                            <TodoItem ref={draggableProvided.innerRef}
                                                      {...draggableProvided.draggableProps}
                                                      {...draggableProvided.dragHandleProps}
                                                      todo={todo}
                                                      removeTodo={removeTodo}
                                                      updateTodo={updateTodo}/>
                                        )
                                    }
                                </Draggable>
                            )
                        )
                    }
                    {droppableProvided.placeholder}
                </div>
            )}
        </Droppable>
    )
}