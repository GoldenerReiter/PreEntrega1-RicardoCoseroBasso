import React from "react";
import "./itemlistcontainer.css"

export default function ItemListContainer({greeting}) {
    return(
        <>
            <section>
                <h1>
                    {greeting}
                </h1>
            </section>
        </>
    )
}