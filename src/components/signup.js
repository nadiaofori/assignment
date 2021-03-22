import './signup.css'

function Signup() {

    return (
        <form className="mainform">

            <div className="form-group">

                <div className="header">
                    <p className="signup">Signup</p>
                </div>

                <div className="input">
                    <label className="labelinput">Username</label>
                    <input type="text" placeHolder="username" className="form-control" />

                    <label className="labelinput">Password</label>
                    <input type="password" placeHolder="password" className="form-control" />

                    <label className="labelinput">Confirm Password</label>
                    <input type="password" placeHolder="confirm password" className="form-control" />

                    <label className="labelinput">Email</label>
                    <input type="text" placeHolder="email" className="form-control" />
                </div>
                <div className="button">
                    <button className="sign">Signup</button>
                </div>

            </div>


            {/* <Link to="/">Already have an account? </Link> */}


        </form>
    )
}

export default Signup