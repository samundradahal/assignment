'use client'

import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {Input} from "@nextui-org/react";
import {Button} from "@nextui-org/react";
 
const SignupSchema = Yup.object().shape({
   firstName: Yup.string()
     .min(2, 'Too Short!')
     .max(50, 'Too Long!')
     .required('Required'),
   lastName: Yup.string()
     .min(2, 'Too Short!')
     .max(50, 'Too Long!')
     .required('Required'),
   email: Yup.string().email('Invalid email address').required('Required'),
   password: Yup
    .string()
    .min(8, 'Password must be 8 characters long')
    .matches(/[0-9]/, 'Password requires a number')
    .matches(/[a-z]/, 'Password requires a lowercase letter')
    .matches(/[A-Z]/, 'Password requires an uppercase letter')
    .matches(/[^\w]/, 'Password requires a symbol'),
   confirm: Yup
    .string()
    .oneOf([Yup.ref('password'), null], 'Must match "password" field value'),
 });

const SignupForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
    validationSchema:SignupSchema,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div className='form shadow-2xl'>
      <div className='text'>Signup</div>
      <form onSubmit={formik.handleSubmit}>
      <Input
      type="text"
      label="First Name"
      name="firstName"
      defaultValue=""
      onChange={formik.handleChange}
      value={formik.values.firstName}
      className="max-w-xs w-80 mx-8"
    />
    <div className='error mx-8'>{formik.errors.firstName}</div>
      
      <Input
      id="lastName"
      name="lastName"
      type="text"
      label="Last Name"
      defaultValue=""
      onChange={formik.handleChange}
      value={formik.values.lastName}
      className="max-w-xs w-80 mx-8"
    />
    <div className='error mx-8'>{formik.errors.lastName}</div>

      <Input
      isRequired
      type="email"
      label="Email"
      name="email"
      defaultValue=""
      onChange={formik.handleChange}
      value={formik.values.email}
      className="max-w-xs w-80 mx-8"
    />
    <div className='error mx-8'>{formik.errors.email}</div>

    <Input
      isRequired
      type="password"
      label="Password"
      name="password"
      defaultValue=""
      onChange={formik.handleChange}
      value={formik.values.password}
      className="max-w-xs w-80 mx-8"
    />
    <div className='error mx-8'>{formik.errors.password}</div>

    <Input
      isRequired
      type="password"
      label="Confirm Password"
      name="confirm"
      defaultValue=""
      onChange={formik.handleChange}
      value={formik.values.confirm}
      className="max-w-xs w-80 mx-8"
    />
    <div className='error mx-8'>{formik.errors.confirm}</div>
    <div className='signup font-bold'>Already have an account?<a href='/login' className='text-blue-600'>Login</a></div>
    <Button color="primary" type="submit">
      Submit
    </Button>
    </form>
    </div>
  );
};

export default SignupForm