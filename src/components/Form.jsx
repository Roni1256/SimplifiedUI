  import React, { useState } from 'react';

  const styles = {
    form: "w-full max-w-lg mx-auto p-6",
    formGroup: "mb-4",
    label: "block text-gray-700 text-sm font-bold mb-2",
    input: "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
    submitButton: "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
  };

  const Form = ({ onSubmit, initialValues = {}, fields }) => {
    const [formData, setFormData] = useState(initialValues);

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData(prevData => ({
        ...prevData,
        [name]: value
      }));
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      onSubmit(formData);
    };

    return (
      <form onSubmit={handleSubmit} className={styles.form}>
        {fields.map((field) => (
          <div key={field.name} className={styles.formGroup}>
            <label htmlFor={field.name} className={styles.label}>{field.label}</label>
            <input
              type={field.type || 'text'}
              id={field.name}
              name={field.name}
              value={formData[field.name] || ''}
              onChange={handleChange}
              placeholder={field.placeholder}
              required={field.required}
              className={styles.input}
            />
          </div>
        ))}
        <button type="submit" className={styles.submitButton}>
          Submit
        </button>
      </form>
    );
  };

  export default Form;
