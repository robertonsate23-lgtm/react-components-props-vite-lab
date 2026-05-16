import React from "react";

function Header({name}) {
    return (
        <header>
            <h1>{name}</h1>
        </header>
    )
}

export default Header;
//renders a header element with an h1 tag that displays the name passed as a prop.