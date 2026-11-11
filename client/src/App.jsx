
import { useState } from "react";

function App() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    setLoading(true);
    setError("");

    const formData = new FormData(event.target);

    const inquiryData = {
      projectType: formData.get("projectType"),
      industry: formData.get("industry"),
      description: formData.get("description"),
      budget: formData.get("budget"),
      timeline: formData.get("timeline"),
      fullName: formData.get("fullName"),
      email: formData.get("email"),
      companyName: formData.get("companyName"),
    };

    try {
      const response = await 
       fetch(`${import.meta.env.VITE_API_URL}/api/inquiries`, 
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(inquiryData),
        }
      );

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Submission failed");
      }

      setSubmitted(true);
      event.target.reset();
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="website">
      <nav className="navbar">
        <h1 className="logo">CYNBIT</h1>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#blueprint">Contact</a>
        </div>
        <a href="#blueprint" className="nav-button">
          Start a Project
        </a>
      </nav>

      <section className="hero" id="home">
        <p className="tagline">LET'S BUILD SOMETHING GREAT</p>
        <h2>
          Start Your Next <br /> Project With Us
        </h2>
        <p className="hero-description">
          Let's turn your idea into a powerful digital solution.
          Share your vision with us and let's make it happen.
        </p>
        <a href="#blueprint" className="hero-button">
          Start Your Project →
        </a>
      </section>

      <section className="blueprint" id="blueprint">
        <p className="section-label">HAVE A PROJECT IN MIND?</p>
        <h2>The Blueprint</h2>
        <p className="form-intro">
          Tell us about your idea. We'll help you build it.
        </p>

        {submitted ? (
          <div className="success-message">
            <h2>Thank You!</h2>
            <p>
              Your project inquiry has been submitted successfully.
            </p>
            <button onClick={() => setSubmitted(false)}>
              Submit Another Inquiry
            </button>
          </div>
        ) : (
          <form className="inquiry-form" onSubmit={handleSubmit}>
            <h3>01. Project Information</h3>

            <label>What type of project do you need?</label>
            <select name="projectType" required defaultValue="">
              <option value="" disabled>Select project type</option>
              <option>Website Development</option>
              <option>Mobile Application</option>
              <option>AI & Automation</option>
              <option>Software Development</option>
             
<option>Other</option>
</select>

<label>Which industry do you belong to?</label>
<select name="industry" required defaultValue="">
  <option value="" disabled>Select your industry</option>
  <option>Healthcare</option>
  <option>Education</option>
  <option>Finance</option>
  <option>E-commerce</option>
  <option>Travel & Tourism</option>
  <option>Technology</option>
  <option>Manufacturing</option>
  <option>Other</option>
</select>

<label>Describe your project</label>

            <textarea
              name="description"
              placeholder="Tell us about your idea and requirements..."
              rows="4"
              required
            />

            <div className="form-row">
              <div>
                <label>Estimated Budget</label>
                <select name="budget" required defaultValue="">
                  <option value="" disabled>Select budget</option>
                  <option>Below ₹50,000</option>
                  <option>₹50,000 – ₹1,00,000</option>
                  <option>₹1,00,000 – ₹5,00,000</option>
                  <option>Above ₹5,00,000</option>
                  <option>Not decided</option>
                </select>
              </div>

              <div>
                <label>Expected Timeline</label>
                <select name="timeline" required defaultValue="">
                  <option value="" disabled>Select timeline</option>
                  <option>Within 1 month</option>
                  <option>1–3 months</option>
                  <option>3–6 months</option>
                  <option>Flexible</option>
                </select>
              </div>
            </div>

            <h3>02. Your Details</h3>

            <div className="form-row">
              <div>
                <label>Full Name</label>
                <input
                  name="fullName"
                  type="text"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div>
                <label>Email Address</label>
                <input
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)+"
                  title="Please enter a valid email address, e.g. name@gmail.com"
                  required
                />
              </div>
            </div>
             {error && <p className="error-message">{error}</p>}
            <label>Company Name</label>
            <input
              name="companyName"
              type="text"
              placeholder="Enter company name (optional)"
            />

           

            <button
              type="submit"
              className="submit-button"
              disabled={loading}
            >
              {loading
                ? "Submitting..."
                : "Submit Project Inquiry →"}
            </button>

            <p className="privacy-note">
              Your project information will be used to respond
              to your inquiry.
            </p>
          </form>
        )}
      </section>
    </div>
  );
}

export default App;
