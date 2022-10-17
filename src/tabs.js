import React from 'react';
import Signup from './Signup';
import Login from './Login';
export default function Tabs() {
    return (
        <div className="row vh-100 align-items-center justify-content-center g-0">
            <div className="col-sm-8 col-md-7 col-lg-5 col-xl-4 col-xxl-3  rounded-0 bg-body shadow-lg ontop">
                <div className="container-fluid px-0">
                    <nav>
                        <div className="nav nav-tabs" id="nav-tab" role="tablist">
                            <button className="nav-link p-0 w-50 rounded-0" id="nav-signup-tab" data-bs-toggle="tab" data-bs-target="#nav-signup" type="button" role="tab" aria-controls="nav-signup" aria-selected="false">Sign up</button>
                            <button className="nav-link p-0 active w-50 rounded-0" id="nav-login-tab" data-bs-toggle="tab" data-bs-target="#nav-login" type="button" role="tab" aria-controls="nav-login" aria-selected="true">Log in</button>
                        </div>
                    </nav>
                </div>

                <div className="tab-content p-5" id="nav-tabContent">
                    <div className="tab-pane fade" id="nav-signup" role="tabpanel" aria-labelledby="nav-signup-tab"><Signup /></div>
                    <div className="tab-pane fade show active" id="nav-login" role="tabpanel" aria-labelledby="nav-login-tab"><Login /></div>
                </div>
            </div>
        </div>
    )
}

