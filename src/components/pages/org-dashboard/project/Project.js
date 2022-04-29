import { useParams } from "react-router-dom";
import React from "react";

import './Project.css'

export default function Project() {
    const { id } = useParams()

    return(
        <div className="project-details">
            <h2>Project details</h2>
            <p>Project id: {id}</p>
        </div>
    )
}