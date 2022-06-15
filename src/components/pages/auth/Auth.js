import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../../assets/Logo.png";
import background from "../../../assets/auth_bg.png";

const AuthPage = () => {
  return (
    <div
      className="container-fluid bg-image min-vh-100 py-2"
      style={{
        backgroundColor: "#334d4d",
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <header className="d-flex justify-content-between align-items-center px-md-3">
        <img src={logo} alt="Egytech logo" />
        <Link
          className="px-3 py-1 text-decoration-none border border-2 border-primary link-light fw-bold"
          to="/"
          id="backBtn"
          style={{ transition: "background-color 0.5s ease-out" }}
        >
          Back To Shop
        </Link>
      </header>
      <AuthContainer />
    </div>
  );
};

const AuthContainer = () => {
  const [visibleForm, show] = useState("login");

  return (
    <main
      className="container col-sm-10 d-flex justify-content-center align-items-center mx-auto rounded bg-light bg-opacity-25"
      style={{ minHeight: "calc(100vh - 110px )" }}
    >
      {visibleForm == "signup" ? (
        <SignUp
          showLogin={(e) => {
            e.preventDefault();
            show("login");
          }}
        />
      ) : visibleForm == "reset" ? (
        <ResetPassword />
      ) : (
        <Login
          showReset={(e) => {
            e.preventDefault();
            show("reset");
          }}
          showSignUp={(e) => {
            e.preventDefault();
            show("signup");
          }}
        />
      )}
      ;
    </main>
  );
};

const Login = (props) => {
  const [emailValue, updateEmail] = useState("");
  const [passValue, updatePass] = useState("");
  const [isDisabled, setDisabled] = useState(true);
  const [feedbackVisibility, toggleFeedback] = useState("none");
  const [isSubmitting, toggleSubmitting] = useState(false);
  const [passProps, togglePassVisibility] = useState({
    isPassVisible: false,
    type: "password",
  });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    toggleSubmitting(true);
    setDisabled(true);
    doLogin();
  };

  const doLogin = async () => {
    const data = { username: emailValue, password: passValue };

    const response = await fetch(
      `https://sprintsecommerce.herokuapp.com/api/api-token-auth?`,
      {
        method: "POST",
        mode: "cors",
        cache: "default",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
        redirect: "follow",
        referrerPolicy: "no-referrer",
        body: JSON.stringify(data),
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw response.status;
        } else {
          return response.json();
        }
      })
      .then((data) => {
        const expireDate = new Date(Date.now() + 1000 * 60 * 60 * 24 * 90);
        const expireString = expireDate.toUTCString();
        //document.cookie = `_egyloggedin=${data.token};${expireString};path=/`; // uncomment to make the cookie
        navigate("/");
      })
      .catch((error) => {
        updatePass("");
        toggleFeedback("block");
        toggleSubmitting(false);
      });
  };

  useEffect(() => {
    emailValue.length > 0 && passValue.length > 0
      ? setDisabled(false)
      : setDisabled(true);
  }, [emailValue.length, passValue.length]);

  return (
    <form
      action=""
      className="position-relative col-11 col-sm-7 col-xl-5 px-4 py-5 border border-primary rounded bg-light bg-opacity-10 text-light overflow-hidden"
      onSubmit={handleSubmit}
    >
      <h1 className="display-7 text-center mb-3">Log in</h1>
      <label htmlFor="loginEmailField" className="position-absolute start-100">
        E-mail
      </label>
      <input
        type="email"
        placeholder="E-mail"
        id="loginEmailField"
        className="form-control form-control-sm w-75 mx-auto mb-3"
        value={emailValue}
        onChange={(e) => {
          updateEmail(e.target.value);
        }}
      ></input>
      <label htmlFor="loginPassField" className="position-absolute start-100">
        Password
      </label>
      <div className="position-relative w-75 mx-auto mb-3">
        <input
          type={passProps.type}
          placeholder="Password"
          id="loginPassField"
          className="form-control form-control-sm"
          style={{ paddingRight: "calc(1.5em + 0.75rem)" }}
          value={passValue}
          onChange={(e) => {
            updatePass(e.target.value);
          }}
        ></input>
        {passProps.isPassVisible ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="grey"
            className="bi bi-eye-slash-fill position-absolute"
            style={{ top: "8px", right: "10px" }}
            viewBox="0 0 16 16"
            onClick={(e) =>
              togglePassVisibility({ isPassVisible: false, type: "password" })
            }
          >
            <path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z" />
            <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12-.708.708z" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="grey"
            className="bi bi-eye position-absolute"
            style={{ top: "8px", right: "10px" }}
            viewBox="0 0 16 16"
            onClick={(e) =>
              togglePassVisibility({ isPassVisible: true, type: "text" })
            }
          >
            <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
            <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
          </svg>
        )}
        <div
          className="fieldInvalidFeedback invalid-feedback"
          style={{ display: feedbackVisibility }}
        >
          Please, check your email and password and try again
        </div>
      </div>
      <button
        type="submit"
        className="d-block btn btn-primary px-4 py-1 mx-auto mb-2 border-0 fw-bold text-light"
        data-bs-toggle="button"
        disabled={isDisabled}
      >
        {isSubmitting ? "Loading..." : "Login"}
      </button>
      <div className="d-flex justify-content-between">
        <a
          href="#"
          className="form-text link-light text-decoration-none authLink"
          onClick={props.showReset}
        >
          Forgot your password?
        </a>
        <span className="form-text text-light">
          Don't have an account?{" "}
          <a
            href="#"
            className="text-decoration-none authLink"
            onClick={props.showSignUp}
          >
            Sign up
          </a>
        </span>
      </div>
    </form>
  );
};

const SignUp = (props) => {
  const [nameValue, updateName] = useState("");
  const [emailValue, updateEmail] = useState("");
  const [passValue, updatePass] = useState("");
  const [passConfirmValue, updatePassConfirm] = useState("");
  const [isDisabled, setDisabled] = useState(true);
  const [isEmailExist, toggleEmailFeedback] = useState(false);
  const [isSubmitting, toggleSubmitting] = useState(false);
  const navigate = useNavigate();
  const [nameValidation, validateName] = useState({
    validationStyle: "",
    isValid: false,
  });
  const [emailValidation, validateEmail] = useState({
    validationStyle: "",
    isValid: false,
  });
  const [passValidation, validatePass] = useState({
    validationStyle: "",
    isValid: false,
  });
  const [passConfirmValidation, validatePassConfirm] = useState({
    validationStyle: "",
    isValid: false,
  });
  const [passProps, togglePassVisibility] = useState({
    isPassVisible: false,
    type: "password",
  });

  const formInvalidFeedback = () => {
    if (!nameValidation.isValid) {
      validateName({ validationStyle: " is-invalid", isValid: false });
    } else if (!emailValidation.isValid) {
      validateEmail({ validationStyle: " is-invalid", isValid: false });
    } else if (!passValidation.isValid) {
      validatePass({ validationStyle: " is-invalid", isValid: false });
    } else if (!passConfirmValidation.isValid) {
      validatePassConfirm({ validationStyle: " is-invalid", isValid: false });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    nameValidation.isValid &&
    emailValidation.isValid &&
    passValidation.isValid &&
    passConfirmValidation.isValid
      ? doSignUp()
      : formInvalidFeedback();
  };

  const doSignUp = async () => {
    const data = {
      username: emailValue,
      email: emailValue,
      password: passValue,
    };

    setDisabled(true);
    toggleSubmitting(true);

    const response = await fetch(
      "https://sprintsecommerce.herokuapp.com/api/users/",
      {
        method: "POST",
        mode: "cors",
        cache: "default",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
        redirect: "follow",
        referrerPolicy: "no-referrer",
        body: JSON.stringify(data),
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw response.status;
        } else {
          /*const expireDate = new Date(Date.now() + 1000 * 60 * 60 * 24 * 90);
          const expireString = expireDate.toUTCString();
          document.cookie = `_egyloggedin=${data.token};${expireString};path=/`; // uncomment to make the cookie */
          props.showLogin();
          return response.status;
        }
      })

      .then((state) => console.log(state))
      .catch((error) => {
        console.log(error);
        if (error == 400) {
          toggleEmailFeedback(true);
          toggleSubmitting(false);
          updatePass("");
          updatePassConfirm("");
        }
      });
  };

  useEffect(() => {
    nameValue.length > 0 &&
    emailValue.length > 0 &&
    passValue.length > 0 &&
    passConfirmValue.length > 0
      ? setDisabled(false)
      : setDisabled(true);
  }, [
    nameValue.length,
    emailValue.length,
    passValue.length,
    passConfirmValue.length,
  ]);

  useEffect(() => {
    const nameRegex = /^[a-z]{3,}\s{0,1}[a-z]*$/i;
    const passRegex = /^(?=.*\d)(?=.*[a-z]).{8,}$/i;

    nameRegex.test(nameValue)
      ? validateName({ validationStyle: " is-valid", isValid: true })
      : validateName({ validationStyle: "", isValid: false });

    passRegex.test(passValue)
      ? validatePass({ validationStyle: " is-valid", isValid: true })
      : validatePass({ validationStyle: "", isValid: false });

    passConfirmValue.length > 0 && passConfirmValue == passValue
      ? validatePassConfirm({ validationStyle: " is-valid", isValid: true })
      : validatePassConfirm({ validationStyle: "", isValid: false });
  }, [nameValue, passValue, passConfirmValue.length, passConfirmValue]);

  useEffect(() => {
    if (isEmailExist) {
      validateEmail({ validationStyle: " is-invalid", isValid: false });
    }
  }, [isEmailExist]);

  useEffect(() => {
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    toggleEmailFeedback(false);
    emailRegex.test(emailValue)
      ? validateEmail({ validationStyle: " is-valid", isValid: true })
      : validateEmail({ validationStyle: "", isValid: false });
  }, [emailValue]);

  return (
    <form
      action=""
      className="position-relative col-11 col-sm-7 col-xl-5 p-2 border border-primary rounded bg-light bg-opacity-10 text-light overflow-hidden"
      onSubmit={handleSubmit}
    >
      <h1 className="display-7 text-center mb-3">Sign up</h1>
      <label htmlFor="nameField" className="position-absolute start-100">
        Name
      </label>
      <input
        type="text"
        className={
          "form-control form-control-sm w-75 mx-auto mb-3" +
          nameValidation.validationStyle
        }
        id="nameField"
        placeholder="Name..."
        value={nameValue}
        onChange={(e) => {
          updateName(e.target.value);
        }}
      ></input>
      <div className="fieldInvalidFeedback invalid-feedback w-75 mx-auto mt-n3 mb-2">
        Please, enter a valid name
      </div>
      <label htmlFor="emailField" className="position-absolute start-100">
        E-mail
      </label>
      <div className="w-75 mx-auto my-3">
        <input
          type="email"
          className={
            "form-control form-control-sm" + emailValidation.validationStyle
          }
          id="emailField"
          placeholder="Email..."
          value={emailValue}
          onChange={(e) => {
            updateEmail(e.target.value);
          }}
        ></input>
        <div className="fieldInvalidFeedback invalid-feedback">
          This email already existed. Please, try another one to create the
          account
        </div>
      </div>
      <label htmlFor="passField" className="position-absolute start-100">
        Password
      </label>
      <div className="position-relative w-75 mx-auto mb-2">
        <input
          type={passProps.type}
          className={
            "form-control form-control-sm" + passValidation.validationStyle
          }
          id="passField"
          placeholder="Password..."
          value={passValue}
          style={{
            backgroundImage: "none",
            paddingRight: "calc(1.5em + 0.75rem)",
          }}
          onChange={(e) => {
            updatePass(e.target.value);
          }}
        ></input>
        <div className="fieldInvalidFeedback invalid-feedback">
          Please, follow the required format
        </div>
        {passProps.isPassVisible ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="grey"
            className="bi bi-eye-slash-fill position-absolute"
            style={{ top: "8px", right: "10px" }}
            viewBox="0 0 16 16"
            onClick={(e) =>
              togglePassVisibility({ isPassVisible: false, type: "password" })
            }
          >
            <path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z" />
            <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12-.708.708z" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="grey"
            className="bi bi-eye position-absolute"
            style={{ top: "8px", right: "10px" }}
            viewBox="0 0 16 16"
            onClick={(e) =>
              togglePassVisibility({ isPassVisible: true, type: "text" })
            }
          >
            <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
            <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
          </svg>
        )}
        <div className="form-text text-light">
          Minimum of 8 characters and combination of letters and numbers
        </div>
      </div>
      <label htmlFor="confirmPassField" className="position-absolute start-100">
        Confirm Password
      </label>
      <input
        type={passProps.type}
        className={
          "form-control form-control-sm w-75 mx-auto mb-3" +
          passConfirmValidation.validationStyle
        }
        id="confirmPassField"
        placeholder="Confirm Password..."
        value={passConfirmValue}
        onChange={(e) => {
          updatePassConfirm(e.target.value);
        }}
      ></input>
      <button
        type="submit"
        className="d-block btn btn-primary px-4 py-1 mx-auto border-0 fw-bold text-light"
        data-bs-toggle="button"
        disabled={isDisabled}
      >
        {isSubmitting ? "loading..." : "Sign up"}
      </button>
      <div className="form-text text-center text-light">
        Already have an account?{" "}
        <a
          href="#"
          id="loginLink"
          className="text-decoration-none authLink"
          onClick={props.showLogin}
        >
          Log in
        </a>
      </div>
    </form>
  );
};

const ResetPassword = () => {
  const [isDisabled, setDisabled] = useState(true);
  const [emailValue, updateEmail] = useState("");

  const resetPassword = async () => {
    const data = { email: emailValue };

    const response = await fetch("", {
      method: "POST",
      mode: "cors",
      cache: "default",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify(data),
    }).then();
  };

  useEffect(() => {
    emailValue.length > 0 ? setDisabled(false) : setDisabled(true);
  }, [emailValue.length]);

  return (
    <form
      action=""
      className="position-relative col-11 col-sm-7 col-xl-5 px-2 py-4 border border-primary rounded bg-light bg-opacity-10 text-light overflow-hidden"
      onSubmit={(e) => {
        e.preventDefault();
        resetPassword();
      }}
    >
      <h1 className="display-7 text-center mb-3">Reset Password</h1>
      <label className="position-absolute start-100">E-mail</label>
      <input
        type="email"
        placeholder="Email..."
        className="form-control form-control-sm w-75 mx-auto mb-3"
        value={emailValue}
        onChange={(e) => {
          updateEmail(e.target.value);
        }}
      ></input>
      <button
        type="submit"
        className="d-block btn btn-primary px-4 py-1 mx-auto border-0 fw-bold text-light"
        id="resetBtn"
        data-bs-toggle="button"
        disabled={isDisabled}
      >
        Reset
      </button>
    </form>
  );
};

export default AuthPage;
