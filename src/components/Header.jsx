import {IconMoon} from "./icons/IconMoon.jsx";
import {useEffect, useRef, useState} from "react";
import {IconSun} from "./icons/IconSun.jsx";

const initialStateDarkMode = localStorage.getItem('theme') === 'dark';

export const Header = () => {

    const [darkMode, setDarkMode] = useState(initialStateDarkMode)

    const refHeader = useRef(null)

    useEffect(() => {
        if(darkMode) {
            document.documentElement.classList.add('dark')
            localStorage.setItem('theme',  'dark')
        }
        else {
            document.documentElement.classList.remove('dark')
            localStorage.removeItem('theme')
        }
    }, [darkMode]);

    return (
        <header className={"container mx-auto px-4 pt-8  md:max-w-xl"} ref={refHeader}>
            <div className={"flex justify-between"}>
                <h1 className={"text-3xl font-bold tracking-[0.3em] uppercase text-white "}>TODO</h1>
                <button onClick={()=> setDarkMode(!darkMode)}>
                    {
                        darkMode ? <IconSun /> : <IconMoon />
                    }
                </button>
            </div>
        </header>
    )
}