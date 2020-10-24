export default function validateInfo(values) {
  let errors = {};

 
  if (!values.email) {
    errors.email = 'Email required';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email address is invalid';
  }
  if (!values.password) {
    errors.password = 'Password is required';
  } else if (values.password.length < 6) {
    errors.password = 'Password needs to be 6 characters or more';
  }

  if (!values.password2) {
    errors.password2 = 'Password is required';
  } else if (values.password2 !== values.password) {
    errors.password2 = 'Passwords do not match';
  }
  
  if (!values.phoneno) {
    errors.phoneno = 'Phone number is required';
  }  else  {
            var pattern = /^(0[1-9]|1[0-9]|2[0-9]|3[0-1])\/(0[1-9]|1[0-2])\/([0-9]{4})$/; 
            if (!pattern.test(phoneno)) {    
                errors.phoneno = "Invalid Phone number";    
            }  
  
  if (!values.dob) {
    errors.dob = 'Please select DOB;
  } else  {
            var pattern = /^(0[1-9]|1[0-9]|2[0-9]|3[0-1])\/(0[1-9]|1[0-2])\/([0-9]{4})$/; 
            if (!pattern.test(dob)) {    
                errors.dob = "Invalid date of birth";    
            }  
  
   ;
  
  return errors;
}
