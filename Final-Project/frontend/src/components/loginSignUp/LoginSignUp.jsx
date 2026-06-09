import { useState } from 'react';
import './LoginSignUp.css';

const InputField = ({ type, label, icon, i, j }) => (
  <div className="input-box animation" style={{ '--i': i, '--j': j }}>
    <input type={type} required />
    <label>{label}</label>
    <i className={icon}></i>
  </div>
);

export default function LoginSignUp() {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="login-page">
      <div className={`wrapper ${isActive ? 'active' : ''}`}>
        <span className="rotate-bg"></span>
        <span className="rotate-bg2"></span>

        {/* LOGIN */}

        <div className="form-box login">
          <h2 className="title animation" style={{ '--i': 0, '--j': 21 }}>
            Login
          </h2>

          <form>
            <InputField type="text" label="Username" icon="bx bxs-user" i={1} j={22} />

            <InputField type="password" label="Password" icon="bx bxs-lock-alt" i={2} j={23} />

            <button className="btn animation" style={{ '--i': 3, '--j': 24 }}>
              Login
            </button>

            <div className="linkTxt animation" style={{ '--i': 5, '--j': 25 }}>
              <p>
                Don't have an account?{' '}
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsActive(true);
                  }}
                >
                  Sign Up
                </a>
              </p>
            </div>
          </form>
        </div>

        <div className="info-text login">
          <h2 className="animation" style={{ '--i': 0, '--j': 20 }}>
            Welcome Back!
          </h2>

          <p className="animation" style={{ '--i': 1, '--j': 21 }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>

        {/* REGISTER */}

        <div className="form-box register">
          <h2 className="title animation" style={{ '--i': 17, '--j': 0 }}>
            Sign Up
          </h2>

          <form>
            <InputField type="text" label="Username" icon="bx bxs-user" i={18} j={1} />

            <InputField type="email" label="Email" icon="bx bxs-envelope" i={19} j={2} />

            <InputField type="password" label="Password" icon="bx bxs-lock-alt" i={20} j={3} />

            <button className="btn animation" style={{ '--i': 21, '--j': 4 }}>
              Sign Up
            </button>

            <div className="linkTxt animation" style={{ '--i': 22, '--j': 5 }}>
              <p>
                Already have an account?{' '}
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsActive(false);
                  }}
                >
                  Login
                </a>
              </p>
            </div>
          </form>
        </div>

        <div className="info-text register">
          <h2 className="animation" style={{ '--i': 17, '--j': 0 }}>
            Welcome Back!
          </h2>

          <p className="animation" style={{ '--i': 18, '--j': 1 }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </div>
    </div>
  );
}
