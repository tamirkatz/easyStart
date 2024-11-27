import React, { useState } from "react";
import styles from "./foundersAgreementForm.module.scss";
import axios from "axios";
import { CHATGPT_TOKEN } from "./config";

const FoundersAgreementForm = () => {
  const [founders, setFounders] = useState([
    { name: "", email: "", role: "", equity: "" },
  ]);

  const addFounder = () => {
    setFounders([...founders, { name: "", email: "", role: "", equity: "" }]);
  };

  const submitForm = async () => {
    const prompt = generateFoundersAgreementPrompt(founders);
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: prompt }],
        temperature: 0.7,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${CHATGPT_TOKEN}`,
        },
      }
    );
    console.log(response.data.choices[0].message.content);
  };

  const handleInputChange = (index, event) => {
    const values = [...founders];
    values[index][event.target.name] = event.target.value;
    setFounders(values);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(founders);
    // Add submission logic here
  };

  const generateFoundersAgreementPrompt = (founders) => {
    // Start with an introduction to what we're asking for
    let prompt =
      "Based on the following founders' information, generate a suggested founders' agreement that outlines key terms including roles, responsibilities, equity distribution, and decision-making processes.\n\nFounders Information:\n";

    // Add each founder's information
    founders.forEach((founder, index) => {
      prompt += `\nFounder ${index + 1}:\n- Name: ${founder.name}\n- Email: ${
        founder.email
      }\n- Role: ${founder.role}\n- Equity: ${founder.equity}\n`;
    });

    // Optionally, you can add specific questions or considerations you want the agreement to address
    prompt +=
      "\nThe agreement should address the following key points:\n- Equity distribution and ownership\n- Roles and responsibilities of each founder\n- Decision-making processes\n- Handling of disputes among founders\n- Exit strategy for founders\n\nPlease provide a detailed outline of a founders' agreement covering these aspects.";

    return prompt;
  };

  return (
    <div className={styles.foundersAgreement}>
      <h1 className={styles.header}>Founders Agreement Form</h1>
      <p className={styles.introduction}>
        Please fill out the details below to generate your personalized founders
        agreement.
      </p>
      <form onSubmit={handleSubmit} className={styles.form}>
        {/* Fields here */}
        {founders.map((founder, index) => (
          <fieldset key={index} className={styles.founderFields}>
            <legend>Founder {index + 1}</legend>
            <label htmlFor={`founderName-${index}`}>Name:</label>
            <input
              type="text"
              id={`founderName-${index}`}
              name="name"
              value={founder.name}
              onChange={(event) => handleInputChange(index, event)}
              required
            />

            <label htmlFor={`founderEmail-${index}`}>Email:</label>
            <input
              type="email"
              id={`founderEmail-${index}`}
              name="email"
              value={founder.email}
              onChange={(event) => handleInputChange(index, event)}
              required
            />

            <label htmlFor={`founderRole-${index}`}>Role:</label>
            <input
              type="text"
              id={`founderRole-${index}`}
              name="role"
              value={founder.role}
              onChange={(event) => handleInputChange(index, event)}
              required
            />

            <label htmlFor={`founderEquity-${index}`}>Equity %:</label>
            <input
              type="number"
              id={`founderEquity-${index}`}
              name="equity"
              value={founder.equity}
              onChange={(event) => handleInputChange(index, event)}
              min="0"
              max="100"
              step="0.01"
              required
            />
          </fieldset>
        ))}
        <button type="button" onClick={addFounder} className={styles.addButton}>
          + Add Founder
        </button>
        <button
          type="submit"
          className={styles.submitButton}
          onClick={submitForm}
        >
          Submit Form
        </button>
      </form>
    </div>
  );
};

export default FoundersAgreementForm;
