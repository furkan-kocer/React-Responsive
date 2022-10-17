import React from 'react';
export default function Login() {
    return (
            <form>
                <div className="mb-3 form-group position-relative">
                    <input type="email" className="form-control ps-5 p-3 bg-light rounded-0 box-shadowcs" id="Username" placeholder="Your username or email" />
                    <i className="bi bi-person-fill position-absolute top-50 start-0 translate-middle ms-4 fs-4"></i>
                </div>
                <div className="mb-3 form-group position-relative">
                    <input type="password" className="form-control ps-5 p-3 bg-light rounded-0 box-shadowcs" id="Password" placeholder="Your password" />
                    <i className="bi bi-key-fill position-absolute top-50 start-0 translate-middle ms-4 fs-4"></i>
                </div>
                <div className="d-flex justify-content-between">
                    <div className="mb-4 form-check">
                        <input type="checkbox" className="form-check-input rounded-0  box-shadowcs" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">Remember me</label>
                    </div>
                    <div className="flink text-end"><a href="#" className="">Forgot your password?</a></div>
                </div>

                <div className="d-grid  justify-content-end">
                    <button type="submit" className="btn btn-block rounded text-capitalize btn-lg px-4 c-button">Log in</button>
                </div>
            </form>
    )
}