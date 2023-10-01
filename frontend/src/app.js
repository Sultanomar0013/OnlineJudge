import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Footer from "./Components/footer";
import Home from "./routes/home";
import SignIn from "./routes/signin";
import SignUp from "./routes/signup";
import About from "./routes/about";
import Algorithm from "./routes/algorithm";
import Datastructure from "./routes/datastructure";
import Exam from "./routes/exam";
import Problem from "./routes/problem";
import TeacherExam from "./routes/teacherexam";
import StudentExam from "./routes/studentexam";
import Navbar from "./Components/Navbar";
function App() {
    return (
        <Router>
        
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/about" element={<About />} />
                <Route path="/algorithm" element={<Algorithm />} />
                <Route path="/datastructure" element={<Datastructure />} />
                <Route path="/exam" element={<Exam />} />
                <Route path="/problem" element={<Problem />} />
                <Route path="/studentexam" element={<StudentExam />} />
                <Route path="/teacherexam" element={<TeacherExam />} />
            </Routes>
            <Footer />
        </Router>
    );
}
export default App;
