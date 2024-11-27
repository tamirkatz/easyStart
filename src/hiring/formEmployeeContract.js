// FormEmployeeContract.js
import React, { useState } from "react";
import styles from "./formEmployeeContract.module.scss";
import { pricingOptions } from "../config";

const FormEmployeeContract = ({ onFormSubmit }) => {
  const [formDetails, setFormDetails] = useState({
    positionTitle: "",
    employmentType: "Full-time",
    startDate: "",
    salary: "",
    insuranceIncluded: false,
    insuranceAmount: "",
    educationFundIncluded: false,
    educationFundAmount: "",
    vacationDays: "",
    specialClauses: "",
    pricingOption: "",
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormDetails((prevDetails) => ({
      ...prevDetails,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onFormSubmit(formDetails);
  };

  return (
    <div className={styles.formEmployeeContract}>
      <h2>Form an Employee Contract</h2>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="positionTitle">Position Title</label>
        <input
          id="positionTitle"
          name="positionTitle"
          type="text"
          onChange={handleInputChange}
          value={formDetails.positionTitle}
          required
        />

        <label htmlFor="employmentType">Employment Type</label>
        <select
          id="employmentType"
          name="employmentType"
          onChange={handleInputChange}
          value={formDetails.employmentType}
        >
          <option value="Full-time">Full-time</option>
          <option value="Part-time">Part-time</option>
          <option value="Contract">Contract</option>
          <option value="Temporary">Temporary</option>
          <option value="Internship">Internship</option>
        </select>

        <label htmlFor="startDate">Start Date</label>
        <input
          id="startDate"
          name="startDate"
          type="date"
          onChange={handleInputChange}
          value={formDetails.startDate}
        />

        <label htmlFor="salary">Salary</label>
        <input
          id="salary"
          name="salary"
          type="number"
          onChange={handleInputChange}
          value={formDetails.salary}
          required
        />

        <label htmlFor="specialClauses">Special Clauses (Optional)</label>
        <textarea
          id="specialClauses"
          name="specialClauses"
          onChange={handleInputChange}
          value={formDetails.specialClauses}
        />


        {/* Checkbox for Insurance */}
        <label htmlFor="insuranceIncluded">
          <input
            id="insuranceIncluded"
            name="insuranceIncluded"
            type="checkbox"
            checked={formDetails.insuranceIncluded}
            onChange={handleInputChange}
          />
          Include Insurance
        </label>
        {formDetails.insuranceIncluded && (
          <input
          id="insuranceAmount"
          name="insuranceAmount"
          type="number"
          placeholder="Insurance Amount"
          onChange={handleInputChange}
          value={formDetails.insuranceAmount}
          required={formDetails.insuranceIncluded}
          />
        )}

        {/* Checkbox for Education Fund */}
        <label htmlFor="educationFundIncluded">
          <input
            id="educationFundIncluded"
            name="educationFundIncluded"
            type="checkbox"
            checked={formDetails.educationFundIncluded}
            onChange={handleInputChange}
            />
          Include Education Fund
        </label>
        {formDetails.educationFundIncluded && (
          <input
          id="educationFundAmount"
          name="educationFundAmount"
          type="number"
          placeholder="Education Fund Amount"
          onChange={handleInputChange}
          value={formDetails.educationFundAmount}
          required={formDetails.educationFundIncluded}
          />
        )}

        {/* Vacation Days */}
        <label htmlFor="vacationDays">Vacation Days per Year</label>
        <input
          id="vacationDays"
          name="vacationDays"
          type="number"
          placeholder="Vacation Days"
          onChange={handleInputChange}
          value={formDetails.vacationDays}
          required
          />

        {/* Special Clauses and Pricing Option fields */}

          <fieldset>
            <legend>Select Pricing Option</legend>
            {pricingOptions.map((option) => (
              <label key={option.id}>
                <input
                  type="radio"
                  name="pricingOption"
                  value={option.id}
                  onChange={handleInputChange}
                  required
                />
                {option.label} — {option.price}
                {option.regularPrice && (
                  <span className={styles.regularPrice}>
                    {" "}
                    (Regular: {option.regularPrice})
                  </span>
                )}
              </label>
            ))}
          </fieldset>
        <button type="submit" className={styles.submitButton}>
          Send to Lawyer
        </button>
      </form>
    </div>
  );
};

export default FormEmployeeContract;
