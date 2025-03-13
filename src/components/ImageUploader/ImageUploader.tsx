import React, { useState } from 'react';
import { X } from 'lucide-react'; // Importing close icon

interface ImageUploaderProps {
  name: string;
  label?: string;
  onChange?: (file: File | null) => void;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({ name, label, onChange }) => {
  const [preview, setPreview] = useState<string | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    if (file) {
      setPreview(URL.createObjectURL(file));
      onChange?.(file);
    }
  };

  const removeImage = () => {
    setPreview(null);
    onChange?.(null);
  };

  return (
    <div className="flex flex-col gap-2">
      {label && <label className="text-sm font-medium">{label}</label>}
      <div className="relative border p-4 w-full rounded-lg flex flex-col items-center justify-center h-[200px] cursor-pointer bg-gray-100 hover:bg-gray-200 transition">
        {preview ? (
          <div className="relative w-full h-full flex items-center justify-center">
            <img src={preview} alt="Preview" className="w-full h-full object-cover rounded-lg" />
            <button
              type="button"
              onClick={removeImage}
              className="absolute top-2 right-2 bg-black bg-opacity-60 text-white rounded-full p-1 hover:bg-opacity-80 transition"
            >
              <X size={16} />
            </button>
          </div>
        ) : (
          <label className="w-full h-full flex flex-col items-center justify-center cursor-pointer">
            <span className="text-gray-500">Click to upload an image</span>
            <input
              type="file"
              name={name}
              accept="image/*"
              className="hidden"
              onChange={handleImageChange}
            />
          </label>
        )}
      </div>
    </div>
  );
};

export default ImageUploader;
