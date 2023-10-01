import React from "react";
import Navbar from "../Components/Navbar"
import { Link } from "react-router-dom";
import "./css/problem.css";

function Problem() {
  return (
    <>
       <Navbar />
      <div>
        <div className="prob">
          <h1 className="header7">Subjects</h1>
          <div className="problem">
            <div className="card" style={{ width: "18rem" }}>
              <img
                src="https://i.ibb.co/WF3Zq7n/algorithm.jpg"  // Replace this with the image source
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Algorithm</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </p>
                <a href="/algorithm" className="btn btn-primary">
                  Problems
                </a>
              </div>
            </div>

            <div className="card" style={{ width: "18rem" }}>
              <img
                src="https://i.ibb.co/rZF8yS3/Data.png"  // Replace this with the image source
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Data Structure</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </p>
                <a href="/datastructure" className="btn btn-primary">
                  Problems
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>


  );
}

export default Problem;
