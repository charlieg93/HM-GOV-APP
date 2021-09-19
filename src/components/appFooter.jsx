import React from 'react'

const AppFooter = () => {
    return (
        <>
            <div className={"bg-black"}>
            <footer className={"flex flex-wrap items-center justify-between p-5 m-auto"}>
                <div className={"container mx-auto flex flex-col flex-wrap items-center justify-between font-mono"}>
                    <ul className={"flex-col mx-auto text-white text-center p-3"}>
                    <li><a className={"p-2 cursor-pointer hover:underline"} href="https://reactjs.org/" target="_blank" rel="noreferrer">Created Using ReactJS</a></li>
                    <li><a className={"p-2 cursor-pointer hover:underline"} href="https://tailwindcss.com/" target="_blank" rel="noreferrer">Styled using Tailwind</a></li>
                    <li><a className={"p-2 cursor-pointer hover:underline"} href="https://members-api.parliament.uk/index.html" target="_blank" rel="noreferrer">Data provided by Parliament API</a></li>
                    </ul>
                    <ul className={"flex mx-auto text-white text-center"}>
                    <li> <a href="https://github.com/charlieg93" target="_blank" rel="noreferrer"> <img src="https://avatars0.githubusercontent.com/u/23234809?s=400&v=4"  alt="github logo" className={"w-12 h-12"}/> </a></li>
                    </ul>
                    <div className={"flex mx-auto text-white text-center"}>
                        Designed by Charlie Gager
                    </div>
                </div>
            </footer>
            </div> 
        </>
    )
}

export default AppFooter
