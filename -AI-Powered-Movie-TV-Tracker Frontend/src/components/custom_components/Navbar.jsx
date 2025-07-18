import React from "react";
import { useState } from "react";
import styles from "./Navbar.module.css";
import { Button, Input } from "@chakra-ui/react";
import { useNavigate, Link } from "react-router-dom";

function Navbar() {
    const navigate = useNavigate();
    const [searchText, setSearchText] = useState("");

    const handleKeyDown = (e) => {
        if (e.key === "Enter" && searchText.trim() !== "") {
            navigate(`/search/${encodeURIComponent(searchText.trim())}/1`);
            setSearchText("");
        }
    };

    return (
        <div className={styles.navbarContainer}>
            <Link to={"/"}>
                <div className={styles.logoContainer}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z"
                        />
                    </svg>
                    <div className={styles.logoText}>CINEHUB</div>
                </div>
            </Link>
            <div className={styles.registerLoginContainer}>
                <Input
                    placeholder="Search"
                    variant="outline"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    onKeyDown={handleKeyDown} // <-- correct
                />
                <Button variant="outline" className={styles.loginBtn}>
                    Login
                </Button>
                <Button variant="solid" className={styles.registerBtn}>
                    Register
                </Button>
            </div>
        </div>
    );
}

export default Navbar;
