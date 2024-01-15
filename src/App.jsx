import {CrossIcon} from "./components/icons/CrossIcon.jsx";
import {MoonIcon} from "./components/icons/MoonIcon.jsx";

const App = () => {
    return (
        <div className={"bg-[url('./assets/images/bg-mobile-light.jpg')] bg-no-repeat bg-contain bg-gray-100 min-h-screen"}>
            <header className={"container mx-auto px-4 pt-8"}>
                <div className={"flex justify-between"}>
                    <h1 className={"text-3xl font-bold tracking-[0.3em] uppercase text-white "}>TODO</h1>
                    <button>
                        <MoonIcon />
                    </button>
                </div>
                <form className={"flex items-center gap-4 bg-white rounded-md overflow-hidden py-4 px-4 mt-8"}>
                    <span className={"rounded-full h-5 w-5 border-2 inline-block"}></span>
                    <input className={"w-full text-gray-400 outline-none"}
                           type="text" placeholder={"Create a new todo"}/>
                </form>
            </header>
            <main className={"container mx-auto px-4 mt-8"}>
                <div className="bg-white rounded-md [&>article]:p-4">
                    <article className="flex gap-4 border-b border-b-gray-400">
                        <button className={"flex-none rounded-full h-5 w-5 border-2 inline-block"}></button>
                        <p className={"text-gray-500 grow"}>Complete online Javascript course</p>
                        <button className={"flex-none"}><CrossIcon/></button>
                    </article>
                    <article className="flex gap-4 border-b border-b-gray-400">
                        <button className={"flex-none rounded-full h-5 w-5 border-2 inline-block"}></button>
                        <p className={"text-gray-500 grow"}>Complete online Javascript course</p>
                        <button className={"flex-none"}><CrossIcon/></button>
                    </article>
                    <article className="flex gap-4 border-b border-b-gray-400">
                        <button className={"flex-none rounded-full h-5 w-5 border-2 inline-block"}></button>
                        <p className={"text-gray-500 grow"}>Complete online Javascript course</p>
                        <button className={"flex-none"}><CrossIcon/></button>
                    </article>
                    <section className="p-4 flex justify-between">
                        <span className="text-gray-400">5 items left</span>
                        <button className="text-gray-400">Clear completed</button>
                    </section>
                </div>
            </main>
            <section className={"container px-4 mx-auto mt-8"}>
                <div className="rounded-md bg-white p-4 flex justify-center gap-4">
                    <button className="text-blue-600">All</button>
                    <button className="hover:text-blue-600">Active</button>
                    <button className="hover:text-blue-600">Completed</button>
                </div>
            </section>

            <section className={"text-center"}>Drag & drop to reorder list</section>
        </div>
    )
}

export default App