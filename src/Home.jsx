import React from "react";
import web from "../src/images/home.svg"
import Common from "./Common"

const Home = () => {
    return(
        <>
        <Common
        name="My name is "
        imgsrc={web}
        visit="/stack"
        btname="My Stacks" />
        </>
    );
}
export default Home;