'use client';
import React, { useState } from 'react';
import { Field, FieldProps } from 'formik';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';

interface SelectInputProps {
  name: string;
  label?: string;
  options: { value: string; label: string }[];
  className?: string;
  onChange?: (value: string) => void;
  containerClass?: string;
  withFormik?: boolean;
}

const SelectInput: React.FC<SelectInputProps> = ({
  name,
  label,
  options,
  className = '',
  onChange,
  containerClass = '',
  withFormik = true
}) => {
  const [selectedValue, setSelectedValue] = useState('');

  const handleChange = (value: string, field?: FieldProps['field']) => {
    if (field) {
      field.onChange({ target: { name, value } });
    } else {
      setSelectedValue(value);
    }
    onChange?.(value);
  };

  const renderSelect = (field?: FieldProps['field']) => (
    <div className={`flex flex-col gap-2 w-full ${containerClass}`}>
      {label && (
        <label htmlFor={name} className="tablet:text-sm text-sm">
          {label}
        </label>
      )}
      <Select
        onValueChange={(value) => handleChange(value, field)}
        value={field?.value || selectedValue}
      >
        <SelectTrigger
          className={`border rounded-md outline-none bg-transparent text-grey p-3 py-5 ${className}`}
        >
          <SelectValue placeholder="Select an option" />
        </SelectTrigger>
        <SelectContent>
          {options.map((opt) => (
            <SelectItem key={opt.value} value={opt.value}>
              {opt.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );

  return withFormik ? (
    <Field name={name}>
      {({ field, meta }: FieldProps) => (
        <div className="flex flex-col gap-1">
          {renderSelect(field)}
          {meta.touched ||
            (meta.error && <p className="text-red-600 text-sm capitalize">{meta.error}</p>)}
        </div>
      )}
    </Field>
  ) : (
    renderSelect()
  );
};

export default SelectInput;
