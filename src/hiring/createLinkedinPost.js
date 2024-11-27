import React, { useState } from "react";
import styles from "./createLinkedinPost.module.scss";
import linkedInLogo from "../LinkedIn_logo_initials.png"; // Ensure the logo is in your assets
import axios from "axios";
import { CHATGPT_TOKEN, jobTitles } from "../config";
import openAiLogo from "../openailogo.png"; // Make sure to add the correct path
import Select from "react-select";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const questionTexts = {
  positionTitle: "What is the title of the position?",
  companyName: "What is the name of your company?",
  responsibilities: "Describe the key responsibilities for this position.",
  qualifications: "What qualifications are required for this position?",
  benefits: "What benefits does this position offer?",
  additionalInfo: "Any additional information about the position?",
  location: "Where is this job located?",
  employmentType: "What type of employment is this?",
};

const CreateLinkedInPostChatbot = ({ onPostGenerated }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [review, setReview] = useState(false);
  const [formData, setFormData] = useState({
    positionTitle: "",
    companyName: "",
    responsibilities: "",
    qualifications: "",
    benefits: "",
    additionalInfo: "",
    location: "",
    employmentType: "", // Make sure this is initialized
  });
  const [chatbotActive, setChatbotActive] = useState(false);
  const [chatbotPrompt, setChatbotPrompt] = useState(
    `Please generate responsibilities example for a company named ${formData.companyName}, position title: ${formData.positionTitle}`
  );
  const [chatbotResponse, setChatbotResponse] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate

  const handleChatbotToggle = () => {
    setChatbotActive(!chatbotActive);
  };
  const editResponse = (step) => {
    setReview(false);
    setCurrentStep(step);
  };

  const handleChange = (selectedOption) => {
    setFormData({ ...formData, positionTitle: selectedOption });
  };

  const renderInputField = () => {
    switch (currentQuestionKey) {
      case "employmentType":
        return (
          <Select
            name="employmentType"
            value={formData.employmentType}
            onChange={handleInputChange}
            className={styles.select}
            options={[
              { value: "Full-time", label: "Full-time" },
              { value: "Part-time", label: "Part-time" },
              { value: "Contract", label: "Contract" },
              { value: "Temporary", label: "Temporary" },
              { value: "Volunteer", label: "Volunteer" },
              { value: "Internship", label: "Internship" },
            ]}
          />
        );
      case "positionTitle":
        return (
          <Select
            name="positionTitle"
            value={formData.positionTitle}
            onChange={handleChange}
            options={jobTitles}
            classNamePrefix="react-select"
            placeholder="Select position title..."
            isClearable
            isSearchable
          />
        );
      default:
        return (
          <textarea
            name={currentQuestionKey}
            placeholder={`Enter ${currentQuestionKey}...`}
            value={formData[currentQuestionKey] || ""}
            onChange={handleInputChange}
            className={styles.textarea}
          />
        );
    }
  };

  const handleFormSubmit = () => {
    // Add logic to handle form submission, such as sending data to a server
    navigate("/"); // Navigate to home page after submission
  };

  const renderReview = () => {
    return (
      <div className={styles.review}>
        {questionKeys.map((key, index) => (
          <div key={key} className={styles.reviewItem}>
            <div className={styles.question}>
              {key
                .replace(/([A-Z])/g, " $1")
                .charAt(0)
                .toUpperCase() + key.slice(1)}
              :
            </div>
            <div className={styles.answer} onClick={() => editResponse(index)}>
              {formData[key] || "Not specified"}
            </div>
          </div>
        ))}
        <button onClick={handleFormSubmit} className={styles.submitButton}>
          Confirm and Generate Post
        </button>
      </div>
    );
  };

  const handleChatbotInputChange = (event) => {
    setChatbotPrompt(event.target.value);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    setChatbotPrompt(
      `Please generate ${name} example for a company named ${formData.companyName}, position title: ${formData.positionTitle.value}`
    );
  };

  const nextStep = () => {
    if (currentStep < questionKeys.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setReview(true);
    }
  };

  const handleChatbotSubmit = async (section) => {
    setChatbotActive(true);
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: chatbotPrompt }],
        temperature: 0.7,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${CHATGPT_TOKEN}`,
        },
      }
    );
    setChatbotResponse(
      `Suggested ${section}: ${response.data.choices[0].message.content}`
    );
    setChatbotPrompt(""); // Clear input after submission
  };

  const questionKeys = Object.keys(questionTexts);
  const currentQuestionKey = questionKeys[currentStep];
  const isTextQuestion = [
    "responsibilities",
    "qualifications",
    "benefits",
    "additionalInfo",
  ].includes(currentQuestionKey);

  return (
    <div className={styles.createLinkedInPostChatbot}>
      <img src={linkedInLogo} alt="LinkedIn Logo" className={styles.logo} />
      <div className={styles.chatbotContainer}>
        {!review && (
          <>
            <div className={styles.question}>
              {questionTexts[currentQuestionKey]}
            </div>
            {renderInputField()}
            {isTextQuestion && (
              <div className={styles.buttons}>
                {!chatbotActive ? (
                  <button
                    onClick={handleChatbotToggle}
                    className={styles.button}
                  >
                    <img
                      src={openAiLogo}
                      alt="OpenAI Logo"
                      className={styles.openailogo}
                    />
                    Get help from ChatGPT
                  </button>
                ) : (
                  <></>
                )}

                {chatbotActive && (
                  <div>
                    <textarea
                      type="text"
                      value={chatbotPrompt}
                      onChange={handleChatbotInputChange}
                      className={styles.chatbotInput}
                      placeholder="Enter your prompt here..."
                    />
                    <button
                      onClick={() => handleChatbotSubmit(currentQuestionKey)}
                      className={styles.submitButton}
                    >
                      Submit Prompt
                    </button>
                    {chatbotResponse && (
                      <div className={styles.chatbotResponse}>
                        {chatbotResponse}
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}
            <button onClick={nextStep} className={styles.nextButton}>
              Next
            </button>
          </>
        )}

        {review && renderReview()}
      </div>
    </div>
  );
};

export default CreateLinkedInPostChatbot;
