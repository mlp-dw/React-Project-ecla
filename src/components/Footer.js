import React from "react";

export default function Footer() {
    return (
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 border-top">
            <div className="col-md-4 d-flex align-items-center ms-5">
                <span className="">© 2022 ĒCLA</span>
            </div>

            <ul className="nav col-md-4 justify-content-end list-unstyled d-flex flex-row me-5">
                <li className="mx-2 px-2">
                    <a className="hoverme" href="#">
                        <div className='hoverme'>
                            <span>
                                🦕
                            </span>
                            <i></i>
                            <i></i>
                            <i></i>
                            <i></i>
                            <i></i>
                            <i></i>
                            <i></i>
                            <i></i>
                            <i></i>
                        </div>
                    </a>
                </li>
                <li className="mx-2 px-2">
                    <a className="hoverme" href="#">
                        <div className='hoverme'>
                            <span>
                                🦖
                            </span>
                            <i></i>
                            <i></i>
                            <i></i>
                            <i></i>
                            <i></i>
                            <i></i>
                            <i></i>
                            <i></i>
                            <i></i>
                        </div>
                    </a>
                </li>
            </ul>
        </footer>
    );
}