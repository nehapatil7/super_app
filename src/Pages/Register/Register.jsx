import React from 'react'
import { useFormik } from 'formik';
import {Validation} from "../../Components/Validation"
import { useNavigate } from 'react-router-dom';
import "./Register.css"

function Register() {
  const navigate = useNavigate()
  const onSubmit = async(values, actions) => {
    await new Promise((resolve) => setTimeout(resolve, 1000))
      if (values["terms"] === true) {
        localStorage.setItem("userData", JSON.stringify(values));
        navigate("/Entertainment");
      }
    
  }
  

  const { values, errors, touched, handleChange, handleBlur, handleSubmit} = useFormik({
    initialValues: {
      name: "",
      username: "",
      email: "",
      mobile: "",
      terms: ""
    },
    validationSchema : Validation,
    onSubmit,
  });

  
 
  return (
    <div className='container'>
      <div className='home'>
        {/*<img src={HomeImg} alt="" /> */}
        <div className='text'>Discover new things on Superapp</div>
      </div>
      
      <div className="form">
        <div className='appName'>
          <h6>Super App</h6>
          <p>Create your new account</p>
        </div>
        
        <div className='signIn'>
          <form onSubmit={handleSubmit} autoComplete="off">
            <input 
              value={values.name} 
              onChange={handleChange} 
              onBlur={handleBlur} 
              id="name" type="text" placeholder="Name"
              className={errors.name && touched.name ? "input-error" : ""} 
              autoComplete='off'
            />
            {errors.name && touched.name && <p className="error">{errors.name}</p>}
 
           <input 
              value={values.username} 
              onChange={handleChange} 
              onBlur={handleBlur}
              id="username" type="text" placeholder="UserName"
              className={errors.username && touched.username ? "input-error" : ""} 
              autoComplete='off'
            />
            {errors.username && touched.username && <p className="error">{errors.username}</p>}

            <input 
              value={values.email} 
              onChange={handleChange} 
              onBlur={handleBlur} 
              id="email" type="email" placeholder="Email"
              className={errors.email && touched.email ? "input-error" : ""} 
              autoComplete='off'
            />
            {errors.email && touched.email && <p className="error">{errors.email}</p>}

            <input 
              value={values.mobile} 
              onChange={handleChange}
              onBlur={handleBlur} 
              id="mobile" type="number" placeholder="Mobile"
              className={errors.mobile && touched.mobile ? "input-error" : ""} 
              autoComplete='off'
            />
            {errors.mobile && touched.mobile && <p className="error">{errors.mobile}</p>}

            <div className='check'>
            <input 
              value={values.terms} 
              onChange={handleChange}
              onBlur={handleBlur} 
              id="terms" type="checkbox" 
              className={errors.mobile && touched.mobile ? "input-error" : ""} 
              autoComplete='off'
            />
            <p className='termsCheck'>Terms and Conditions</p>
            </div>
            {errors.terms && touched.terms && <p className="error">{errors.terms}</p>} 
            

            <button onClick={onSubmit} type='submit'>SIGN UP</button>
          </form>

        </div>
        
        <div className='condition'>
          <p>By clicking on Sign up. you agree to Superapp <span>Terms and Conditions of Use</span></p>
          <p>To learn more about how Superapp collects, uses, shares and protects your personal data please head Superapp <span>Privacy Policy</span></p>
        </div>

      </div>

      

    
    </div>
  )
}


export default Register;