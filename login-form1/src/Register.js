import React from 'react';
import './App.css';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

const Register = () => {
  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
      terms: false,
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .min(2, 'Username must be at least 2 characters')
        .required('Username is required'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
      password: Yup.string()
        .min(8, 'Password must be at least 8 characters')
        .required('Password is required'),
      terms: Yup.boolean()
        .required('You must accept the terms and conditions')
        .oneOf([true], 'You must accept the terms and conditions'),
    }),
    onSubmit: (values) => {
      console.log('User:', values.username);
      console.log('Email:', values.email);
      console.log('Password:', values.password);

      // Simulate successful registration (replace with actual logic)
      toast.success('Registration successful!', {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: true,
      });

      // Clear form after submission (optional)
      formik.resetForm();
    },
  });

  return (
    <div className="wrapper">
      <span className="icon-sign">
        <ion-icon name="close-outline"></ion-icon>
      </span>
      <div className="form-box login">
        <h2>Register</h2>
        <form onSubmit={formik.handleSubmit}>
          <div className="login-input">
            <span className="icon">
              <ion-icon name="person-outline"></ion-icon>
            </span>
            <input
              name="username"
              placeholder="User Name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.username}
            />
            {formik.touched.username && formik.errors.username ? (
              <div>{formik.errors.username}</div>
            ) : null}
          </div>
          <div className="login-input">
            <span className="icon">
              <ion-icon name="mail-outline"></ion-icon>
            </span>
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <div>{formik.errors.email}</div>
            ) : null}
          </div>
          <div className="login-input">
            <span className="icon">
              <ion-icon name="lock-closed-outline"></ion-icon>
            </span>
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password ? (
              <div>{formik.errors.password}</div>
            ) : null}
          </div>
          <div className="forgot">
            <label>
              <input
                type="checkbox"
                name="terms"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                checked={formik.values.terms}
              />
              I agree to the terms & conditions
            </label>
            {formik.touched.terms && formik.errors.terms ? (
              <div>{formik.errors.terms}</div>
            ) : null}
          </div>
          <button className="btn1" type="submit">Register</button>
          <div className="register">
            <span>Already have an account?</span>
            <Link to="/login">Login</Link>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Register;
