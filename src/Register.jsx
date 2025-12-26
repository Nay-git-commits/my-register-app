import { useState } from "react";

const Register = () => {
  const genderOptions = [
    { id: "male", label: "Male", value: "Male" },
    { id: "female", label: "Female", value: "Female" },
    { id: "others", label: "Others", value: "Others" },
  ];

  const hobbyOptions = [
    { id: "music", label: "Music", value: "Music" },
    { id: "movies", label: "Movies", value: "Movies" },
    { id: "models", label: "Plastic Model", value: "Plastic Model" },
  ];

  const roleOptions = [
    { id: "staff", label: "General Staff", value: "General Staff" },
    { id: "dev", label: "Developer", value: "Developer" },
    { id: "sa", label: "System Analyst", value: "System Analyst" },
  ];

  const [formData, setFormData] = useState({
    username: "",
    firstname: "",
    lastname: "",
    gender: "",
    role: "",
  });

  const [hobbies, setHobbies] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const onHobbiesToggle = (event) => {
    const targetValue = event.target.value;
    const isChecked = event.target.checked;
    if (!isChecked) {
      setHobbies((prev) => prev.filter((item) => item !== targetValue));
    } else {
      setHobbies((prev) => [...prev, targetValue]);
    }
  };

  return (
    <div>
      <h2>Registration Form</h2>
      <form>
        <div>
          <label>Username: </label>
          <input type="text" name="username" onChange={handleChange} />
        </div>
        <br />
        <div>
          <label>First Name: </label>
          <input type="text" name="firstname" onChange={handleChange} />
        </div>
        <br />
        <div>
          <label>Last Name: </label>
          <input type="text" name="lastname" onChange={handleChange} />
        </div>
        <br />
        <div>
          <label>Gender: </label>
          {genderOptions.map((opt) => (
            <span key={opt.id}>
              <input type="radio" name="gender" id={opt.id} value={opt.value} onChange={handleChange} />
              <label htmlFor={opt.id}>{opt.label}</label>&nbsp;
            </span>
          ))}
        </div>
        <br />
        <div>
          <label>Hobbies: </label>
          {hobbyOptions.map((h) => (
            <span key={h.id}>
              <input type="checkbox" id={h.id} value={h.value} onChange={onHobbiesToggle} />
              <label htmlFor={h.id}>{h.label}</label>&nbsp;
            </span>
          ))}
        </div>
        <br />
        <div>
          <label>Apply Role: </label>
          <select name="role" onChange={handleChange} defaultValue="">
            <option value="" disabled>-- Select Role --</option>
            {roleOptions.map((r) => (
              <option key={r.id} value={r.value}>{r.label}</option>
            ))}
          </select>
        </div>
      </form>
      <hr />
      <div>
        <h3>Live Data Reflection</h3>
        <p>Username: {formData.username}</p>
        <p>Full Name: {formData.firstname} {formData.lastname}</p>
        <p>Gender: {formData.gender}</p>
        <p>Role: {formData.role}</p>
        <p>Hobbies: {hobbies.join(", ")}</p>
      </div>
    </div>
  );
};

export default Register;