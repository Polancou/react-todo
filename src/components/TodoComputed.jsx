export const TodoComputed = ({computedLeft}) => {
    return (
        <section className="p-4 flex justify-between bg-white rounded-b-md">
            <span className="text-gray-400">{computedLeft} items left</span>
            <button className="text-gray-400">Clear completed</button>
        </section>
    )
}