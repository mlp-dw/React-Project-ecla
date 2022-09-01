import React, { useState } from "react";
import { NavLink } from "react-bootstrap";

export default function Launch() {


    return (
        <div className="box">
            <NavLink href="/quizz/1">
                <button className="button button--tamaya button--round-s button--text-thick button--border-thin" data-text="Start"><span>Quizz</span></button>
            </NavLink>
        </div>
    );
}