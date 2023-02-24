import { Outlet } from "react-router-dom";
import Header from "./Header";
import Nav from "./Nav";
import { resources } from "../data/resources";

export default function Layout(){
    return (
        <div className="container">
            <Header />
            <Nav resources={resources}/>
            <main>
                <Outlet />
            </main>
        </div>

    )
}