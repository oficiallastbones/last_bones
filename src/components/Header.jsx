import { useState } from "react";
import Center from "./Center";

export default function Header() {
    const [HeaderDropActive, setHeaderDropActive] = useState(false);

    const toggleHeaderDrop = () => {
        setHeaderDropActive(!HeaderDropActive);
    };

    return (
        <div className="TopHeader">
            <Center>
                <div className="TopLogo">
                    <a href="/" id="nome_logo">BANDA LAST BONES</a>
                </div>

                <button className="btn_drop_header" onClick={toggleHeaderDrop}>Menu</button>
            </Center>
        </div>
    );
}
