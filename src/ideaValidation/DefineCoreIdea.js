import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./DefineCoreIdea.module.scss";
import { CHATGPT_TOKEN } from "../config";
import { useNavigate } from "react-router-dom";

const DefineCoreIdeaChatbot = () => {
  const navigate = useNavigate();
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [businessIdea, setBusinessIdea] = useState({
    CustomerSegment: "",
    ValueProposition: "",
    KeyProblemsSolved: "",
    RevenueModel: "",
    Platform: "",
    KeyResources: "",
    CompetitiveAdvantage: "",
    MarketSize: "",
    MarketingChannels: "",
    MainFeatures: "",
  });

  // Add the initial question when the component mounts
  useEffect(() => {
    addMessage({
      text: "Welcome to the Idea Validation Chatbot! To start, could you please tell me what your business idea is about?",
      sender: "bot",
    });
  }, []);

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleSendMessage = async () => {
    if (input.trim()) {
      addMessage({ text: input, sender: "user" });
      const userMessage = input;
      setInput("");

      try {
        const response = await axios.post(
          "https://api.openai.com/v1/chat/completions",
          {
            model: "gpt-3.5-turbo", // Use appropriate model
            messages: generatePrompt(messages, userMessage),
            max_tokens: 150,
          },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${CHATGPT_TOKEN}`,
            },
          }
        );

        addMessage({
          text: response.data.choices[0].message.content.trim(),
          sender: "bot",
        });
      } catch (error) {
        console.error("Error communicating with OpenAI:", error);
        addMessage({
          text: "Sorry, I couldn't understand that. Can you rephrase?",
          sender: "bot",
        });
      }
    }
  };

  const addMessage = (message) => {
    setMessages((msgs) => [...msgs, message]);
  };

  const generatePrompt = (messages, newUserMessage) => {
    const updatedMessages = messages
      .concat({ sender: "user", text: newUserMessage })
      .map((msg) => {
        return {
          role: msg.sender === "user" ? "user" : "system",
          content: msg.text,
        };
      });
    return updatedMessages;
  };

  const handleFieldEdit = (field) => {
    const value = prompt(`Edit ${field}`, businessIdea[field]);
    if (value !== null) {
      setBusinessIdea({ ...businessIdea, [field]: value });
    }
  };

  const showConfirmationPage = () => {
    setShowConfirmation(true);
  };

  if (showConfirmation) {
    return (
      <div className={styles.confirmationPage}>
        <h2>Confirm Your Business Idea Details</h2>
        {Object.keys(businessIdea).map((key) => (
          <div key={key}>
            <strong>{key.replace(/([A-Z])/g, " $1").trim()}:</strong>{" "}
            {businessIdea[key]}
            <button onClick={() => handleFieldEdit(key)}>Edit</button>
          </div>
        ))}
        <button onClick={() => setShowConfirmation(false)}>Back to Chat</button>
        <button
          onClick={() => {
            setShowConfirmation(false);
            navigate("/");
          }}
        >
          Go to home page
        </button>
      </div>
    );
  }
  return (
    <div className={styles.chatbot}>
      <div className={styles.chatWindow}>
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`${styles.message} ${styles[msg.sender]}`}
          >
            {msg.text}
          </div>
        ))}
      </div>
      <input
        className={styles.inputField}
        type="text"
        value={input}
        onChange={handleInputChange}
        onKeyPress={(event) =>
          event.key === "Enter" ? handleSendMessage() : null
        }
      />
      <button className={styles.sendButton} onClick={handleSendMessage}>
        Send
      </button>
      <button className={styles.endButton} onClick={showConfirmationPage}>
        End Conversation
      </button>
      <div className={styles.fieldButtons}>
        {Object.keys(businessIdea).map((field) => (
          <button
            key={field}
            onClick={() => handleFieldEdit(field)}
            className={styles.fieldButton}
          >
            {field.replace(/([A-Z])/g, " $1").trim()}
          </button>
        ))}
      </div>
    </div>
  );
};

export default DefineCoreIdeaChatbot;
