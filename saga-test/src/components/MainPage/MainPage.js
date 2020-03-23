import React from "react";
import {Link} from "react-router-dom";

const MainPage = () => {
    return (
        <div className="row mt-5 text-center">
            <div className="col-12 mt-5">
                <h2>Let`s start</h2>
            </div>
            <div className="col-12 mt-3">
                <Link to='todoApp'><button className='btn btn-success'>Getting Started</button></Link>
            </div>
        </div>
    );
};

export default MainPage;
