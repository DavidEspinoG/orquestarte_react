import React from "react";
import { Template } from "../components/Template";
import { Testimonial } from "../components/Testimonial";

function HomePage() {
    return (
        <Template home={true}>
            <Testimonial/>
        </Template>
    )
}

export { HomePage }