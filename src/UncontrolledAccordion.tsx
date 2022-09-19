import React, {useState} from "react";

type Props = {
    titleValue: string
}

export const UncontrolledAccordion = (props: Props) => {
    let [collapsed, setCollapsed] = useState(false)

    return (
        <div>
            <h2>---Menu---</h2>
            <button onClick={() => setCollapsed(!collapsed)}>TOGGLE</button>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
    )
}