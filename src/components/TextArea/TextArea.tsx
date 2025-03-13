'use client';
import React, { useState } from 'react';
import { Field, FieldProps } from 'formik';

interface CustomTextAreaProps {
  placeholder?: string;
  name: string;
  label?: string;
  className?: string;
  readOnly?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  containerClass?: string;
  maxLength?: number;
  withFormik?: boolean;
  rows?: number;
}

const CustomTextArea: React.FC<CustomTextAreaProps> = ({
  placeholder,
  name,
  label,
  className = '',
  readOnly,
  onChange,
  containerClass = '',
  maxLength,
  withFormik = true,
  rows = 4
}) => {
  const [inputValue, setInputValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>, field?: FieldProps['field']) => {
    const value = e.target.value;
    if (field) {
      field.onChange({ target: { name: field.name, value } });
    } else {
      setInputValue(value);
    }
    onChange?.(e);
  };

  const renderTextArea = (field?: FieldProps['field']) => (
    <div className="flex flex-col gap-2 w-full">
      {label && (
        <label htmlFor={name} className="text-sm">
          {label}
        </label>
      )}
      <div
        className={`flex items-start border p-2 rounded-md transition-all duration-200 ${
          isFocused ? 'border-primary' : 'muted-foreground'
        } ${containerClass}`}
      >
        <textarea
          id={name}
          placeholder={placeholder}
          className={`w-full outline-none border-none bg-transparent text-sm resize-none ${className}`}
          readOnly={readOnly}
          maxLength={maxLength}
          rows={rows}
          {...(field || {})}
          onChange={(e) => handleChange(e, field)}
          value={field?.value || inputValue}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
      </div>
    </div>
  );

  return withFormik ? (
    <Field name={name}>
      {({ field, meta }: FieldProps) => (
        <div className="flex flex-col gap-1">
          {renderTextArea(field)}
          {meta.touched && meta.error && (
            <p className="text-red-600 text-sm capitalize">{meta.error}</p>
          )}
        </div>
      )}
    </Field>
  ) : (
    renderTextArea()
  );
};

export default CustomTextArea;
