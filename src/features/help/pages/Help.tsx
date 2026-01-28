import "./Help.css";

const Help = () => {
  const faqs = [
    {
      id: 1,
      question: "How do I create a new project?",
      answer: "Click on the 'New Project' button in the Projects page, fill in the required information, and click 'Create'.",
    },
    {
      id: 2,
      question: "Can I customize my dashboard?",
      answer: "Yes, you can customize your dashboard by clicking on the settings icon and selecting your preferred widgets.",
    },
    {
      id: 3,
      question: "How do I change my password?",
      answer: "Go to Settings > Security, and click on 'Change Password'. Follow the instructions to update your password.",
    },
    {
      id: 4,
      question: "How can I export my data?",
      answer: "You can export your data by going to Reports and clicking on 'Generate Report'. Select the data you want to export.",
    },
  ];

  const resources = [
    { title: "User Guide", icon: "📖", description: "Comprehensive guide to using all features" },
    { title: "Video Tutorials", icon: "🎥", description: "Step-by-step video instructions" },
    { title: "API Documentation", icon: "🔧", description: "Technical documentation for developers" },
    { title: "Community Forum", icon: "💬", description: "Connect with other users" },
  ];

  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="page-title">Help & Support</h1>
        <p className="page-subtitle">Find answers to common questions and get support</p>
      </div>

      <div className="help-search">
        <input
          type="text"
          placeholder="Search for help..."
          className="help-search-input"
        />
        <button className="help-search-btn">Search</button>
      </div>

      <div className="help-resources">
        <h2>Resources</h2>
        <div className="resources-grid">
          {resources.map((resource, index) => (
            <div key={index} className="resource-card">
              <div className="resource-icon">{resource.icon}</div>
              <h3>{resource.title}</h3>
              <p>{resource.description}</p>
              <button className="resource-btn">Learn More</button>
            </div>
          ))}
        </div>
      </div>

      <div className="help-faq">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-list">
          {faqs.map((faq) => (
            <div key={faq.id} className="faq-item">
              <div className="faq-question">
                <h3>{faq.question}</h3>
                <span className="faq-icon">+</span>
              </div>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="help-contact">
        <h2>Still Need Help?</h2>
        <p>Our support team is here to help you. Get in touch with us through any of these channels:</p>
        <div className="contact-options">
          <div className="contact-option">
            <div className="contact-icon">📧</div>
            <h3>Email Support</h3>
            <p>support@example.com</p>
            <button className="contact-btn">Send Email</button>
          </div>
          <div className="contact-option">
            <div className="contact-icon">💬</div>
            <h3>Live Chat</h3>
            <p>Available 24/7</p>
            <button className="contact-btn">Start Chat</button>
          </div>
          <div className="contact-option">
            <div className="contact-icon">📞</div>
            <h3>Phone Support</h3>
            <p>+1 (555) 123-4567</p>
            <button className="contact-btn">Call Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;
