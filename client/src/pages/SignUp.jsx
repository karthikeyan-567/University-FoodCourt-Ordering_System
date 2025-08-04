import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div className='login-signup'>
            <div className="container-box">
                <h2>Sign Up</h2>
                <form>
                    <input type="text" placeholder="Full Name" className='form-control' />
                    <input type="email" placeholder="Email" className='form-control' />
                    <input type="password" placeholder="Password" className='form-control' />
                    <input type="password" placeholder="Confirm Password" className='form-control' />
                    <button type="btn submit">Create Account</button>
                </form>
                <div className="switch-page">
                    <p>Already have an account? <Link to="/login">Login</Link></p>
                </div>
            </div>

            <div className='login-signup-body'>
                <h1 class="title">Vaangama Vaanga <i class="fa-solid fa-utensils"></i></h1>
                <h2>Haven’t signed up yet? Do it quick <i class="fa-regular fa-face-angry"></i></h2>
                <p>
                    Missing home-cooked food in the hostel?
                    <br></br>
                    Sign up and get fresh, affordable meals delivered daily.
                    <br></br>
                    No stress, no queues, just warm food when you need it.
                    <br></br>
                    Join now and enjoy your meal with comfort and care.
                </p>
            </div>
        </div>

    );
};

export default SignUp;
