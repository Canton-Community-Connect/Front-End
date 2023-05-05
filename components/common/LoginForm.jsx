import { useEffect, useState } from "react";
import { signInUser } from "../../store/user";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";

const LoginForm = () => {
  const user = useSelector((state) => state.user.email);
  const dispatch = useDispatch();
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (user) {
      router.push("/profile");
    }
  }, [router, user]);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(
      signInUser({
        email,
      })
    );
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <form
      action="#"
      className="user-data-form mt-40 lg-mt-30"
      onSubmit={handleSubmit}
    >
      <div className="row">
        <div className="col-12">
          <div className="input-group-meta mb-30">
            <label>Email</label>
            <input
              type="email"
              placeholder="hasan@gmail.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        {/* End .col-12 */}

        <div className="col-12">
          <div className="input-group-meta mb-25">
            <label>Password</label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span className="placeholder_icon" onClick={handleTogglePassword}>
              <span className=" d-flex align-items-center">
                {showPassword ? (
                  <>
                    <i className="fa-regular fa-eye"></i>
                  </>
                ) : (
                  <>
                    <i className=" fa-regular fa-eye-slash"></i>
                  </>
                )}
              </span>
            </span>
          </div>
        </div>
        {/* End .col-12 */}

        <div className="col-12">
          <div className="agreement-checkbox d-flex justify-content-between align-items-center">
            <div>
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">Keep me logged in</label>
            </div>
            <a href="#">Forget Password?</a>
          </div>
          {/* /.agreement-checkbox */}
        </div>
        {/* End .col-12 */}

        <div className="col-12">
          <button className="btn-twentyTwo w-100 fw-500 tran3s text-uppercase mt-30">
            Login
          </button>
        </div>
        {/* End .col-12 */}
      </div>
    </form>
  );
};

export default LoginForm;
