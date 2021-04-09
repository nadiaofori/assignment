import { useContextStore } from '../store/context'


function Signup() {
    const value = useContextStore();



return (
    <form>
        <div>
            { value }
        </div>
        <div>
            <h1>Signup</h1>
            <p>Want to signup please fill this form</p>
        </div>

        <div>
            <label>First Name</label>
            <input type="text" placeholder="name" className="maininputs" />
        </div>

        <div>
            <label>Last Name</label>
            <input type="text" placeholder="name" className="maininputs" />
        </div>
        <div>
            <label>Password</label>
            <input type="text" placeholder="password" className="subinputs" />
            <input type="radio"/>I accept the terms and conditions
        </div>
        <button>Submit</button>
    </form>
)
}
export default Signup;