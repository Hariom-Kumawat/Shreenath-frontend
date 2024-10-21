import React from "react";
import { useSelector } from "react-redux";
import { useState } from "react";

export default function UserDashboard() {
    const barIconClicked = useSelector((state) => state.barIcon.barIconClicked)

    const [isCheckedIn, setIsCheckedIn] = useState(false);
    const [currentTime, setCurrentTime] = useState(null);
    const [checkInTime, setCheckInTime] = useState(null);
    const [checkOutTime, setCheckOutTime] = useState(null);
    let interval;

    // Function to start the timer when checked in
    const startTimer = () => {
        interval = setInterval(() => {
            setCurrentTime(new Date().toLocaleTimeString());
        });
    };

    // Handle Check In and Check Out
    const handleCheckInOut = () => {
        if (!isCheckedIn) {
            // If the user clicks "Check In"
            const now = new Date();
            const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
            const date = now.toLocaleDateString(undefined, options); // Get current date with day
            const time = now.toLocaleTimeString(); // Get current time

            setCheckInTime({ date, time }); // Set check-in time
            setIsCheckedIn(true); // Change state to checked in
            startTimer(); // Start the timer
        } else {
            // If the user clicks "Check Out"
            const now = new Date();
            const time = now.toLocaleTimeString();
            setCheckOutTime(time); // Record check-out time
            setIsCheckedIn(false); // Change state to checked out
            clearInterval(interval); // Stop the timer
        }
    };

    // UseEffect to clear the interval when component unmounts
    // useEffect(() => {
    //     return () => clearInterval(interval);
    // }, []);

    return (
        <>
            <div className={barIconClicked ? "main-view-content main-wrapper-w" : "main-view-content"} id="contentWrapper">

                <div className="content">
                    <div className="row dash-cards">
                        <div className="col-12 col-lg-4">
                            <div className="row">
                                <div className="col-12">
                                    <div className="card check-in mb-3">
                                        <div className="card-body">
                                            {checkInTime && (
                                                <div>
                                                    <h2>{checkInTime.date}</h2>
                                                    {/* <p>Check-In Time: {checkInTime.time}</p> */}
                                                </div>
                                            )}
                                            {isCheckedIn && currentTime && (
                                                <div>
                                                    <p>{currentTime}</p>
                                                </div>
                                            )}
                                            {checkOutTime && !isCheckedIn && (
                                                <div>
                                                    <p>{checkOutTime}</p>
                                                </div>
                                            )}
                                            {/* <h2>Thu, 26th Sep 2024</h2>
                                            <p>16:00:51</p> */}
                                            <button
                                                onClick={handleCheckInOut}
                                                className="btn btn-link"
                                                style={{ backgroundColor: isCheckedIn && 'lightcoral' }}>
                                                {isCheckedIn ? 'Check Out' : 'Check In'}
                                            </button>
                                            {/* <button className="btn btn-link">Check In</button> */}
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="card dash-cards mb-3">
                                                <div className="card-body">
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <h1>Total Leave:</h1>
                                                        <h2>20</h2>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="card dash-cards mb-3">
                                                <div className="card-body">
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <h1>Leaves Taken:</h1>
                                                        <h2>20</h2>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="card dash-cards mb-0">
                                                <div className="card-body">
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <h1>Leaves Remaining:</h1>
                                                        <h2>20</h2>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-8">
                            <div className="card">
                                <div className="card-body">
                                    <table className="table time-table">
                                        <thead>
                                            <tr>
                                                <th className="text-start">#</th>
                                                <th className="text-start">Weeks</th>
                                                <th className="text-start">
                                                    (September,2024- September,2024)
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td></td>
                                                <td></td>
                                                <td>
                                                    <div className="d-flex align-items-center justify-content-start gap-3">
                                                        <button className="btn btn-time bg-primary-subtle p-3 text-primary " type="button">
                                                            Mon
                                                        </button>
                                                        <button className="btn  btn-time bg-primary-subtle p-3 text-primary" type="button">
                                                            Tue
                                                        </button>
                                                        <button className="btn  btn-time bg-primary-subtle p-3 text-primary" type="button">
                                                            Wed
                                                        </button>
                                                        <button className="btn  btn-time bg-primary-subtle p-3 text-primary" type="button">
                                                            Thu
                                                        </button>
                                                        <button className="btn  btn-time bg-primary-subtle p-3 text-primary" type="button">
                                                            Fri
                                                        </button>
                                                        <button className="btn  btn-time bg-primary-subtle p-3 text-primary" type="button">
                                                            Sat
                                                        </button>
                                                        <button className="btn  btn-time bg-primary-subtle p-3 text-primary" type="button">
                                                            Sun
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>1</td>
                                                <td>Week 1</td>
                                                <td>
                                                    <div className="d-flex align-items-center justify-content-start gap-3">
                                                        {/* remove btn-secondary and make bg-secondary subtle  */}
                                                        {/* <button 
                                                            className="btn btn-secondary btn-time bg-secondary-subtle border-secondary-subtle text-dark p-3"
                                                            type="button"></button> */}
                                                        <button
                                                            className="btn  btn-time bg-secondary-subtle border-secondary-subtle text-dark p-3"
                                                            type="button"></button>
                                                        <button
                                                            className="btn  btn-time bg-secondary-subtle border-secondary-subtle text-dark p-3"
                                                            type="button"></button>
                                                        <button
                                                            className="btn  btn-time bg-secondary-subtle border-secondary-subtle text-dark p-3"
                                                            type="button"></button>
                                                        <button
                                                            className="btn  btn-time bg-secondary-subtle border-secondary-subtle text-dark p-3"
                                                            type="button"></button>
                                                        <button
                                                            className="btn  btn-time bg-secondary-subtle border-secondary-subtle text-dark p-3"
                                                            type="button"></button>
                                                        <button
                                                            className="btn  btn-time bg-secondary-subtle border-secondary-subtle text-dark p-3"
                                                            type="button"></button>
                                                        <button className="btn btn-time bg-danger-subtle p-3 text-danger" type="button">
                                                            1
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>2</td>
                                                <td>Week 2</td>
                                                <td>
                                                    <div className="d-flex align-items-center justify-content-start gap-3">
                                                        <button
                                                            className="btn  btn-time bg-secondary-subtle border-secondary-subtle text-dark p-3"
                                                            type="button">
                                                            2
                                                        </button>
                                                        <button
                                                            className="btn  btn-time bg-secondary-subtle border-secondary-subtle text-dark p-3"
                                                            type="button">
                                                            3
                                                        </button>
                                                        <button
                                                            className="btn  btn-time bg-secondary-subtle border-secondary-subtle text-dark p-3"
                                                            type="button">
                                                            4
                                                        </button>
                                                        {/* <button
                                                            className="btn  btn-time bg-secondary-subtle border-secondary-subtle text-dark p-3"
                                                            type="button">
                                                            4
                                                        </button> */}
                                                        <button className="btn  btn-time bg-success-subtle text-success p-3" type="button">
                                                            5
                                                        </button>
                                                        <button
                                                            className="btn  btn-time bg-secondary-subtle border-secondary-subtle text-dark p-3"
                                                            type="button">
                                                            6
                                                        </button>
                                                        <button
                                                            className="btn  btn-time bg-secondary-subtle border-secondary-subtle text-dark p-3"
                                                            type="button">
                                                            7
                                                        </button>
                                                        <button className="btn  btn-time bg-danger-subtle p-3 text-danger" type="button">
                                                            8
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>3</td>
                                                <td>Week 3</td>
                                                <td>
                                                    <div className="d-flex align-items-center justify-content-start gap-3">
                                                        <button
                                                            className="btn  btn-time bg-secondary-subtle border-secondary-subtle text-dark p-3"
                                                            type="button">
                                                            9
                                                        </button>
                                                        <button
                                                            className="btn  btn-time bg-secondary-subtle border-secondary-subtle text-dark p-3"
                                                            type="button">
                                                            10
                                                        </button>
                                                        <button
                                                            className="btn  btn-time bg-secondary-subtle border-secondary-subtle text-dark p-3"
                                                            type="button">
                                                            11
                                                        </button>
                                                        <button className="btn  btn-time bg-success-subtle text-success p-3" type="button">
                                                            12
                                                        </button>
                                                        <button
                                                            className="btn  btn-time bg-secondary-subtle border-secondary-subtle text-dark p-3"
                                                            type="button">
                                                            13
                                                        </button>
                                                        <button
                                                            className="btn  btn-time bg-secondary-subtle border-secondary-subtle text-dark p-3"
                                                            type="button">
                                                            14
                                                        </button>
                                                        <button className="btn btn-time bg-danger-subtle p-3 text-danger" type="button">
                                                            15
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>4</td>
                                                <td>Week 4</td>
                                                <td>
                                                    <div className="d-flex align-items-center justify-content-start gap-3">
                                                        <button
                                                            className="btn  btn-time bg-secondary-subtle border-secondary-subtle text-dark p-3"
                                                            type="button">
                                                            16
                                                        </button>
                                                        <button
                                                            className="btn  btn-time bg-secondary-subtle border-secondary-subtle text-dark p-3"
                                                            type="button">
                                                            17
                                                        </button>
                                                        <button
                                                            className="btn  btn-time bg-secondary-subtle border-secondary-subtle text-dark p-3"
                                                            type="button">
                                                            18
                                                        </button>
                                                        <button className="btn  btn-time bg-success-subtle text-success p-3" type="button">
                                                            19
                                                        </button>
                                                        <button
                                                            className="btn  btn-time bg-secondary-subtle border-secondary-subtle text-dark p-3"
                                                            type="button">
                                                            20
                                                        </button>
                                                        <button
                                                            className="btn  btn-time bg-secondary-subtle border-secondary-subtle text-dark p-3"
                                                            type="button">
                                                            21
                                                        </button>
                                                        <button className="btn  btn-time bg-danger-subtle p-3 text-danger" type="button">
                                                            22
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>5</td>
                                                <td>Week 5</td>
                                                <td>
                                                    <div className="d-flex align-items-center justify-content-start gap-3">
                                                        <button
                                                            className="btn btn-time bg-secondary-subtle border-secondary-subtle text-dark p-3"
                                                            type="button">
                                                            23
                                                        </button>
                                                        <button className="btn  btn-time bg-success-subtle text-success p-3" type="button">
                                                            24
                                                        </button>
                                                        <button
                                                            className="btn btn-time bg-secondary-subtle border-secondary-subtle text-dark p-3"
                                                            type="button">
                                                            24
                                                        </button>
                                                        <button
                                                            className="btn btn-time bg-secondary-subtle border-secondary-subtle text-dark p-3"
                                                            type="button">
                                                            25
                                                        </button>
                                                        <button
                                                            className="btn btn-time bg-secondary-subtle border-secondary-subtle text-dark p-3"
                                                            type="button">
                                                            26
                                                        </button>
                                                        <button
                                                            className="btn btn-time bg-secondary-subtle border-secondary-subtle text-dark p-3"
                                                            type="button">
                                                            27
                                                        </button>
                                                        <button className="btn  btn-time bg-danger-subtle p-3 text-danger" type="button">
                                                            28
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>6</td>
                                                <td>Week 6</td>
                                                <td>
                                                    <div className="d-flex align-items-center justify-content-start gap-3">
                                                        <button
                                                            className="btn  btn-time bg-secondary-subtle border-secondary-subtle text-dark p-3"
                                                            type="button">
                                                            29
                                                        </button>
                                                        <button
                                                            className="btn  btn-time bg-secondary-subtle border-secondary-subtle text-dark p-3"
                                                            type="button">
                                                            30
                                                        </button>
                                                        <button
                                                            className="btn btn-time bg-secondary-subtle border-secondary-subtle text-dark p-3"
                                                            type="button"></button>
                                                        <button
                                                            className="btn btn-time bg-secondary-subtle border-secondary-subtle text-dark p-3"
                                                            type="button"></button>
                                                        <button
                                                            className="btn btn-time bg-secondary-subtle border-secondary-subtle text-dark p-3"
                                                            type="button"></button>
                                                        <button
                                                            className="btn  btn-time bg-secondary-subtle border-secondary-subtle text-dark p-3"
                                                            type="button"></button>
                                                        <button
                                                            className="btn btn-time bg-secondary-subtle border-secondary-subtle text-dark p-3"
                                                            type="button"></button>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


