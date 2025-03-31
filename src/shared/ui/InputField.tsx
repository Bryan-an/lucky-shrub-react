import React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

type InputFieldProps = {
  id: string;
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  register?: UseFormRegisterReturn;
  error?: string;
  placeholder?: string;
  options?: Array<{ value: string; label: string }>;
  rows?: number;
  value?: string;
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => void;
};

const InputField: React.FC<InputFieldProps> = ({
  id,
  name,
  label,
  type = 'text',
  required = false,
  register,
  error,
  placeholder = '',
  options,
  rows,
  value,
  onChange,
}) => {
  const baseClassName =
    'w-full rounded-md border border-gray-300 p-3 shadow-sm transition-all duration-200 placeholder:text-gray-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20';

  const errorClassName = error ? 'border-red-500 focus:border-red-500 focus:ring-red-200' : '';

  // Render a textarea input
  const renderTextarea = () => (
    <>
      <textarea
        id={id}
        rows={rows || 5}
        placeholder={placeholder}
        className={`${baseClassName} ${errorClassName}`}
        {...(register || { name, value, onChange, required })}
      />
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </>
  );

  // Render a select dropdown input
  const renderSelect = () => (
    <>
      <select
        id={id}
        className={`${baseClassName} ${errorClassName}`}
        {...(register || { name, value, onChange, required })}
      >
        {options?.map((option) => (
          <option key={option.value} value={option.value} disabled={option.value === ''}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </>
  );

  // Render a standard input field
  const renderInput = () => (
    <>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        className={`${baseClassName} ${errorClassName}`}
        {...(register || { name, value, onChange, required })}
      />
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </>
  );

  // Function to render the appropriate input based on type
  const renderInputField = () => {
    switch (type) {
      case 'textarea':
        return renderTextarea();
      case 'select':
        return renderSelect();
      default:
        return renderInput();
    }
  };

  return (
    <div className="space-y-2">
      <label htmlFor={id} className="block text-sm font-medium text-dark">
        {label} {required && <span className="text-primary">*</span>}
      </label>
      {renderInputField()}
    </div>
  );
};

export default InputField;
