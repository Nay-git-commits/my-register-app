import { useState } from "react";

const SubmitRegister = () => {
  // --- Data Arrays (Values set to lowercase to match your screenshot result) ---
  const genderOptions = [
    { id: "male", label: "Male", value: "male" },
    { id: "female", label: "Female", value: "female" },
    { id: "others", label: "Others", value: "others" },
  ];

  const hobbyOptions = [
    { id: "music", label: "Music", value: "music" },
    { id: "movies", label: "Movies", value: "movies" },
    { id: "models", label: "Plastic Models", value: "plastic models" },
  ];

  const roleOptions = [
    { id: "staff", label: "General Staff", value: "general staff" },
    { id: "dev", label: "Developer", value: "developer" },
    { id: "sa", label: "System Analyst", value: "system analyst" },
  ];

  // --- State Variables ---
  const [formData, setFormData] = useState({
    username: "",
    firstname: "",
    lastname: "",
    gender: "",
    role: "",
  });

  const [hobbies, setHobbies] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // --- Handlers ---
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
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

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  // --- Styles for the "Red" text in the result ---
  const valueStyle = {
    color: "#8B3A3A", // Reddish-brown color matching your image
    fontWeight: "500",
  };

  return (
    <div style={{ margin: "20px", fontFamily: "serif" }}>
      {!isSubmitted ? (
        // --- VIEW 1: THE FORM ---
        <form onSubmit={handleSubmit}>
          {/* Username */}
          <div style={{ marginBottom: "10px" }}>
            <label style={{ display: "block" }}>Username</label>
            <input 
              type="text" 
              name="username" 
              value={formData.username} 
              onChange={handleChange} 
            />
          </div>

          {/* Firstname */}
          <div style={{ marginBottom: "10px" }}>
            <label style={{ display: "block" }}>Firstname</label>
            <input 
              type="text" 
              name="firstname" 
              value={formData.firstname} 
              onChange={handleChange} 
            />
          </div>

          {/* Lastname */}
          <div style={{ marginBottom: "10px" }}>
            <label style={{ display: "block" }}>Lastname</label>
            <input 
              type="text" 
              name="lastname" 
              value={formData.lastname} 
              onChange={handleChange} 
            />
          </div>

          {/* Gender */}
          <div style={{ marginBottom: "10px" }}>
            <label style={{ display: "block", fontWeight: "bold" }}>Gender</label>
            {genderOptions.map((option) => (
              <span key={option.id}>
                <input
                  type="radio"
                  name="gender"
                  id={option.id}
                  value={option.value}
                  checked={formData.gender === option.value}
                  onChange={handleChange}
                />
                <label htmlFor={option.id}>{option.label}</label>
                &nbsp;
              </span>
            ))}
          </div>

          {/* Hobbies */}
          <div style={{ marginBottom: "10px" }}>
            <label style={{ display: "block", fontWeight: "bold" }}>Hobbies</label>
            {hobbyOptions.map((hobby) => (
              <div key={hobby.id}>
                <input
                  type="checkbox"
                  id={hobby.id}
                  value={hobby.value}
                  checked={hobbies.includes(hobby.value)}
                  onChange={onHobbiesToggle}
                />
                <label htmlFor={hobby.id}> {hobby.label}</label>
              </div>
            ))}
          </div>

          {/* Role */}
          <div style={{ marginBottom: "15px" }}>
            <label style={{ display: "block", fontWeight: "bold" }}>Role</label>
            <select 
              name="role" 
              value={formData.role} 
              onChange={handleChange}
            >
              {roleOptions.map((role) => (
                <option key={role.id} value={role.value}>
                  {role.label}
                </option>
              ))}
            </select>
          </div>

          {/* Submit Button */}
          <button type="submit">Submit</button>
        </form>
      ) : (
        // --- VIEW 2: THE SUBMISSION DATA (Matches your 2nd image) ---
        <div>
          <h3>Submit Data</h3>
          
          <div style={{ lineHeight: "1.6" }}>
            <div>
              Username: <span style={valueStyle}>{formData.username}</span>
            </div>
            <div>
              Firstname: <span style={valueStyle}>{formData.firstname}</span>
            </div>
            <div>
              Lastname: <span style={valueStyle}>{formData.lastname}</span>
            </div>
            <div>
              Gender: <span style={valueStyle}>{formData.gender}</span>
            </div>
            <div>
              Hobbies: <span style={valueStyle}>{hobbies.join(", ")}</span>
            </div>
            <div>
              Role: <span style={valueStyle}>{formData.role}</span>
            </div>
          </div>

          <br />
          <button onClick={() => setIsSubmitted(false)}>Back to form</button>
        </div>
      )}
    </div>
  );
};

export default SubmitRegister;