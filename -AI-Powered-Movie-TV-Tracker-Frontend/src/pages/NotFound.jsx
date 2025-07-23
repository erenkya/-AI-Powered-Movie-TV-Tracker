import React from "react";
import styles from "./NotFound.module.css";
import Navbar from "../components/custom_components/Navbar";
import { Link } from "react-router";
import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function NotFound() {
    const navigate = useNavigate();
    return (
        <div className={styles.notFound}>
            <Navbar />
            <div className={styles.notFoundContainer}>
                <h1 className={styles.fof}>404</h1>
                <h2 className={styles.pnfH2}>Page Not Found</h2>
                <p className={styles.sorryText}>Sorry, the page you are looking for does not exist.</p>
                <Button
                    onClick={() => {
                        navigate("/");
                    }}
                    variant={"solid"}
                    className={styles.homeButton}
                >
                    Go To Home
                </Button>
            </div>
        </div>
    );
}

export default NotFound;
