import React from "react"
import Navbar from "../Components/Navbar"
import "./css/studentexam.css"

function StudentExam() {
    return (
        <>
            <Navbar />

            <div classname="student10">
                <h1 className="head9">Examination Name</h1>
                <div className="mainsection">
                    <h1 className="time4">
                        Time Left:-------
                    </h1>
                    <div className="student9">
                        <ol className="serial1">
                            <li className="line1">
                                Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
                                <button className="Solve1" type="submit">Solve</button>
                            </li>
                            <li>
                                Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
                                <button className="Solve1" type="submit">Solve</button>
                            </li>
                        </ol>
                        <label>
                            <input className="solution1" type="soltion" />
                        </label>
                        <button className="sbmitbutton6" type="submit">Submit</button>
                    </div>
                </div>
            </div>
        </>

    )
}

export default StudentExam;