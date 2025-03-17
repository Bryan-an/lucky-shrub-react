import React from 'react';

type InputFieldProps = {
  id: string;
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => void;
  placeholder?: string;
  options?: Array<{ value: string; label: string }>;
  rows?: number;
};

const InputField: React.FC<InputFieldProps> = ({
  id,
  name,
  label,
  type = 'text',
  required = false,
  value,
  onChange,
  placeholder = '',
  options,
  rows,
}) => {
  const baseClassName =
    'w-full rounded-md border border-gray-300 p-3 shadow-sm transition-all duration-200 placeholder:text-gray-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20';

  // Render a textarea input
  const renderTextarea = () => (
    <textarea
      id={id}
      name={name}
      rows={rows || 5}
      required={required}
      value={value}
      onChange={onChange}
      className={baseClassName}
      placeholder={placeholder}
    />
  );

  // Render a select dropdown input
  const renderSelect = () => (
    <select
      id={id}
      name={name}
      required={required}
      value={value}
      onChange={onChange}
      className={baseClassName}
    >
      {options?.map((option) => (
        <option key={option.value} value={option.value} disabled={option.value === ''}>
          {option.label}
        </option>
      ))}
    </select>
  );

  // Render a standard input field
  const renderInput = () => (
    <input
      type={type}
      id={id}
      name={name}
      required={required}
      value={value}
      onChange={onChange}
      className={baseClassName}
      placeholder={placeholder}
    />
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
