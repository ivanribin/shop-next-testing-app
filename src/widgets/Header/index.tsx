import NavigationBar from "@features/NavigationBar";
import { type ReactElement } from "react";
import "./style.css";

const Header = (): ReactElement => {
    return (
        <div className="header">
            <NavigationBar />
        </div>
    );
};

export default Header;