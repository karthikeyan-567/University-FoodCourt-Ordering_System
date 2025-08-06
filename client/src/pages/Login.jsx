import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div className='login-signup'>
            <div className="container-box">
                <h2>Login</h2>
                <form>
                    <input type="email" placeholder="Email" className='form-control' />
                    <input type="password" placeholder="Password" className='form-control' />
                    <button type="submit" className='btn'>Login</button>
                </form>
                <div className="switch-page">
                    <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
                </div>
            </div>

            <div className='login-signup-body'>
                <h1 class="title">Vaangama Vaanga <i class="fa-solid fa-utensils"></i></h1>

                <h2>Login to unlock delicious food <i class="fa-regular fa-face-grin-wink"></i></h2>
                <p>Missing home-cooked food in hostel?
                    <br></br>
                    We bring you fresh, affordable, and comforting meals every day.
                    <br></br>
                    No more hunger or hassles.
                    <br></br>
                    Just good food, delivered to your door.</p>
            </div>
        </div>

    )
}

export default Login