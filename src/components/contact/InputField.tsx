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

  return (
    <div className="space-y-2">
      <label htmlFor={id} className="block text-sm font-medium text-dark">
        {label} {required && <span className="text-primary">*</span>}
      </label>

      {type === 'textarea' ? (
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
      ) : type === 'select' ? (
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
      ) : (
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
      )}
    </div>
  );
};

export default InputField;
