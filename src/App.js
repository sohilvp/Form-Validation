import { useState } from "react";
import "./App.css";
import FormInput from "./Components/FormInput";

function App() {
  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmpassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "Username",
      type: "text",
      placeholder: "Username",
      label: "Username",
      errormessage: "Username should be 3-8 characters and should't use any special characters",
      pattern: "^[A-Za-z0-9]{3,8}",
      required: "true",
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      label: "Email",
      errormessage: "Please enter a valid email address",
      required: "true",
    },
    {
      id: 3,
      name: "birthday",
      type: "date",
      placeholder: "birthday",
      label: "Birthday",
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "password",
      label: "Password",
      errormessage: "Password must have 8-20 characters and includes at least 1 letter, 1 number and 1 special character",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: "true",
    },
    {
      id: 5,
      name: "confirmpassword",
      type: "password",
      placeholder: "Confirm password",
      label: "Confirm password",
      errormessage: "Password don't match",
      pattern: values.password,
      required: "true",
    },
  ];
  const changeHandler = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const handleSubmit=(e)=>{
    e.preventDefault()
  }

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h1>Register Now</h1>
        {inputs.map((items) => (
          <FormInput
            key={items.id}
            {...items}
            value={values[items.name]}
            onChange={changeHandler}
          />
        ))}
        <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default App;
