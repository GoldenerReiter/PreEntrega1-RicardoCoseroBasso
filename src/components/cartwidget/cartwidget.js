import React, {useState} from "react";

export default function Cartwidget() {

    const [numberOfItems, setNumberOfItems] = useState(0)

    return (
        <>
            <a href="#">Cart ({numberOfItems})</a>
        </>
    )
}