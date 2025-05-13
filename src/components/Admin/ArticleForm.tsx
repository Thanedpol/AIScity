import React, { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { Save, Image as ImageIcon, Hash as HashIcon } from 'lucide-react';

interface ArticleFormProps {
  onSubmit: (formData: FormData) => void;
}

interface FormData {
  title: string;
  summary: string;
  content: string;
  imageUrl: string;
  category: string;
  tags: string[];
  reference: string;
}

const ArticleForm = ({ onSubmit }: ArticleFormProps) => {
  const { theme } = useTheme();
  const [formData, setFormData] = useState<FormData>({
    title: '',
    summary: '',
    content: '',
    imageUrl: '',
    category: '',
    tags: [],
    reference: '',
  });
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleTagsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const tags = e.target.value.split(',').map(tag => tag.trim());
    setFormData(prev => ({ ...prev, tags }));
  };
  
  return (
    <form onSubmit={handleSubmit} className="max-w-4xl mx-auto">
      <div className="space-y-6">
        {/* Title */}
        <div>
          <label className={`block text-sm font-medium ${
            theme === 'dark' ? 'text-gray-200' : 'text-gray-700'
          }`}>
            Title
          </label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className={`mt-1 block w-full rounded-md shadow-sm ${
              theme === 'dark'
                ? 'bg-gray-700 text-white border-gray-600 focus:border-blue-500'
                : 'bg-white text-gray-900 border-gray-300 focus:border-blue-600'
            } focus:ring-2 focus:ring-blue-500/20`}
          />
        </div>
        
        {/* Summary */}
        <div>
          <label className={`block text-sm font-medium ${
            theme === 'dark' ? 'text-gray-200' : 'text-gray-700'
          }`}>
            Summary
          </label>
          <textarea
            name="summary"
            value={formData.summary}
            onChange={handleChange}
            rows={3}
            className={`mt-1 block w-full rounded-md shadow-sm ${
              theme === 'dark'
                ? 'bg-gray-700 text-white border-gray-600 focus:border-blue-500'
                : 'bg-white text-gray-900 border-gray-300 focus:border-blue-600'
            } focus:ring-2 focus:ring-blue-500/20`}
          />
        </div>
        
        {/* Content */}
        <div>
          <label className={`block text-sm font-medium ${
            theme === 'dark' ? 'text-gray-200' : 'text-gray-700'
          }`}>
            Content
          </label>
          <textarea
            name="content"
            value={formData.content}
            onChange={handleChange}
            rows={10}
            className={`mt-1 block w-full rounded-md shadow-sm ${
              theme === 'dark'
                ? 'bg-gray-700 text-white border-gray-600 focus:border-blue-500'
                : 'bg-white text-gray-900 border-gray-300 focus:border-blue-600'
            } focus:ring-2 focus:ring-blue-500/20`}
          />
        </div>
        
        {/* Image URL */}
        <div>
          <label className={`block text-sm font-medium ${
            theme === 'dark' ? 'text-gray-200' : 'text-gray-700'
          }`}>
            <div className="flex items-center">
              <ImageIcon size={16} className="mr-2" />
              Image URL
            </div>
          </label>
          <input
            type="url"
            name="imageUrl"
            value={formData.imageUrl}
            onChange={handleChange}
            className={`mt-1 block w-full rounded-md shadow-sm ${
              theme === 'dark'
                ? 'bg-gray-700 text-white border-gray-600 focus:border-blue-500'
                : 'bg-white text-gray-900 border-gray-300 focus:border-blue-600'
            } focus:ring-2 focus:ring-blue-500/20`}
          />
        </div>
        
        {/* Category */}
        <div>
          <label className={`block text-sm font-medium ${
            theme === 'dark' ? 'text-gray-200' : 'text-gray-700'
          }`}>
            Category
          </label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className={`mt-1 block w-full rounded-md shadow-sm ${
              theme === 'dark'
                ? 'bg-gray-700 text-white border-gray-600 focus:border-blue-500'
                : 'bg-white text-gray-900 border-gray-300 focus:border-blue-600'
            } focus:ring-2 focus:ring-blue-500/20`}
          >
            <option value="">Select a category</option>
            <option value="tech">Technology</option>
            <option value="science">Science</option>
            <option value="space">Space</option>
            <option value="ai">AI</option>
            <option value="bio">Biotechnology</option>
            <option value="med">Medicine</option>
          </select>
        </div>
        
        {/* Tags */}
        <div>
          <label className={`block text-sm font-medium ${
            theme === 'dark' ? 'text-gray-200' : 'text-gray-700'
          }`}>
            <div className="flex items-center">
              <HashIcon size={16} className="mr-2" />
              Tags (comma-separated)
            </div>
          </label>
          <input
            type="text"
            name="tags"
            value={formData.tags.join(', ')}
            onChange={handleTagsChange}
            placeholder="AI, Technology, Innovation"
            className={`mt-1 block w-full rounded-md shadow-sm ${
              theme === 'dark'
                ? 'bg-gray-700 text-white border-gray-600 focus:border-blue-500'
                : 'bg-white text-gray-900 border-gray-300 focus:border-blue-600'
            } focus:ring-2 focus:ring-blue-500/20`}
          />
        </div>
        
        {/* Reference */}
        <div>
          <label className={`block text-sm font-medium ${
            theme === 'dark' ? 'text-gray-200' : 'text-gray-700'
          }`}>
            Reference URL
          </label>
          <input
            type="url"
            name="reference"
            value={formData.reference}
            onChange={handleChange}
            className={`mt-1 block w-full rounded-md shadow-sm ${
              theme === 'dark'
                ? 'bg-gray-700 text-white border-gray-600 focus:border-blue-500'
                : 'bg-white text-gray-900 border-gray-300 focus:border-blue-600'
            } focus:ring-2 focus:ring-blue-500/20`}
          />
        </div>
        
        {/* Submit Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            className={`flex items-center px-4 py-2 rounded-md ${
              theme === 'dark'
                ? 'bg-blue-600 hover:bg-blue-700'
                : 'bg-blue-600 hover:bg-blue-700'
            } text-white font-medium transition-colors`}
          >
            <Save size={18} className="mr-2" />
            Save Article
          </button>
        </div>
      </div>
    </form>
  );
};

export default ArticleForm;