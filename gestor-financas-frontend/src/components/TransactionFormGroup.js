import React from "react";

const TransactionFormGroup = ({ label, type, options, ...props }) => (
  <div className="transaction-form-group">
    <label>{label}:</label>
    {type === "select" ? (
      <select {...props}>
        <option value="">Selecione</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    ) : (
      <input type={type} {...props} />
    )}
  </div>
);

export default TransactionFormGroup;
