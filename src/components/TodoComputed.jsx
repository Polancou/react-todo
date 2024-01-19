export const TodoComputed = ({computedLeft, clearCompleted}) => {
    return (
        <section className="p-4 flex justify-between bg-white rounded-b-md dark:bg-gray-800 transition-all duration-1000">
            <span className="text-gray-400">{computedLeft} items left</span>
            <button className="text-gray-400" onClick={clearCompleted}>Clear completed</button>
        </section>
    )
}