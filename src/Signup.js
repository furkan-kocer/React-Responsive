import React from 'react';
export default function Signup() {
    return (
            <form>
                <div className="mb-3 form-group position-relative">
                    <input type="text" className="form-control ps-5 p-3 bg-light rounded-0 box-shadowcs" id="FLname" placeholder="First & Last name" />
                    <i className="bi bi-person-fill position-absolute top-50 start-0 translate-middle ms-4 fs-4"></i>
                </div>
                <div className="mb-3 form-group position-relative">
                    <input type="email" className="form-control ps-5 p-3 bg-light rounded-0 box-shadowcs" id="Username" placeholder="Email" />
                    <i className="bi bi-envelope-fill position-absolute top-50 start-0 translate-middle ms-4 fs-4"></i>
                </div>
                <div className="mb-3 form-group position-relative">
                    <input type="password" className="form-control ps-5 p-3 bg-light rounded-0 box-shadowcs" id="Password" placeholder="Your password" />
                    <i className="bi bi-key-fill position-absolute top-50 start-0 translate-middle ms-4 fs-4"></i>
                </div>
                <div className="d-grid  justify-content-end">
                    <button type="submit" className="btn btn-block rounded text-capitalize btn-lg px-4 c-button">create an account</button>
                </div>
            </form>
    )
}