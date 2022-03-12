import React, { useState } from 'react';
import Navigation from "../Nav";
import About from "../About";
import Contact from "../Contact";
import Portfolio from "../Portfolio";
import Resume from "../Resume";

function Header() {
    const [currentPage, setCurrentPage] = useState("About");

    const renderPage = () => {
        switch (currentPage) {
            case "About":
                return <About />;
            case "Portfolio":
                return <Portfolio />;
            case "Contact":
                return <Contact />;
            case "Resume":
                return <Resume />;
            default:
                return <About />;
        }
    };

    return (
        <div>
            <Navigation
            currentPage={currentPage}
            handlePageChange={setCurrentPage}
            />
            <main>
                <div>{renderPage(currentPage)}</div>
            </main>
        </div>
    )
}

export default Header;