import React, { useState } from "react";
import Navbar from "../Components/Navbar"
import "./css/teacherexam.css";

function TeacherExam() {
    const [timer, setTimer] = useState("");
    const [starttime, setStarttime] = useState("");
    const [endtime, setEndtime] = useState("");
    const [selectedSubject, setSelectSubject] = useState("");
    const Subjects = ["", "Algorithm", "Data Structure"];
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <>
         <Navbar />

            <div className="teacher">
                <h1 className="title5">Examination Set up</h1>
                <form onSubmit={handleSubmit}>
                    <label className="sub box">
                        <h1 className="head1">Select Subject:</h1>
                        <select
                            className="selectBox3"
                            value={selectedSubject}
                            onChange={(e) => setSelectSubject(e.target.value)}>
                            {Subjects.map((subject) => (
                                <option key={subject} value={subject}>
                                    {subject}
                                </option>
                            ))}
                        </select>
                    </label>

                    <label className="teach box">
                        <h1 className="head1">Start time:</h1>
                        <input
                            type="text"
                            value={starttime}
                            onChange={(e) => setStarttime(e.target.value)}
                        /><h1 className="head1">End Time:</h1>
                        <input
                            type="text"
                            value={endtime}
                            onChange={(e) => setEndtime(e.target.value)}
                        />
                    </label>
                    <button className="Startbutton" type="submit">Exam Start</button>

                </form>
            </div>
        </>

    )
}



export default TeacherExam;