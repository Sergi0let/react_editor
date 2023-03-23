import { useState } from 'react';

export default function Input({ addContent, id, onClose, name }) {
  const [value, setValue] = useState('');

  const handleChange = (e) => setValue(e.target.value);

  const handleSumit = (e) => {
    e.preventDefault();
    addContent({ content: value, id });
    setValue('');
    onClose({ id });
  };

  const handlePlaceholder = (name) => {
    switch (name) {
      case 'Headline':
        return 'Write your headline';
      case 'Paragraph':
        return 'Write your paragraph';
      case 'Image':
        return 'Image URL';
      case 'Button':
        return 'Button';
      default:
        return 'put your text';
    }
  };

  return (
    <form onSubmit={handleSumit} className="relative mt-2 rounded-md shadow-sm">
      <input
        type="text"
        name="price"
        id="price"
        value={value}
        onChange={handleChange}
        className="block w-full rounded-md border-0 py-1.5 p-3 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        placeholder={handlePlaceholder(name)}
      />
      <button className="text-xs py-1 px-4 bg-[#68C2E9] text-white rounded-md mt-1 hover:bg-gray-300  transition-all duration-300">
        Add Element
      </button>
    </form>
  );
}
