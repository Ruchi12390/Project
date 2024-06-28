import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import bcrypt from 'bcryptjs';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address'),
      password: Yup.string().min(8, 'Password must be at least 8 characters'),
    }),
    onSubmit: (values) => {
      const hashedPassword = bcrypt.hashSync(values.password, 10);
      console.log('Email:', values.email);
      console.log('Hashed Password:', hashedPassword);

      // Simulate successful login (replace with actual logic)
      toast.success('Login successful!', {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: true,
      });

      formik.resetForm();
    },
  });

  return (
    <div className="wrapper">
      <div className="form-box login">
        <h2>Login</h2>
        <form onSubmit={formik.handleSubmit}>
          <div className="login-input">
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
              <input type="checkbox" name="remember" />
              Remember me
            </label>
            <a href="#">Forget Password</a>
          </div>
          <button className="btn1" type="submit">
            Login
          </button>
          <div className="register">
            <span>Do not have an account?</span>
            <Link to="/register">Register</Link>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
