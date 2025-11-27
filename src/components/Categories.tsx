import React from 'react';
import { categories } from '../data/products';
import { 
  Grid3X3, 
  Disc, 
  Wrench, 
  Filter, 
  Zap, 
  Droplets, 
  Flame 
} from 'lucide-react';

interface CategoriesProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const iconMap: { [key: string]: React.ComponentType<{ size?: number; className?: string }> } = {
  Grid3X3,
  Disc,
  Wrench,
  Filter,
  Zap,
  Droplets,
  Flame
};

export const Categories: React.FC<CategoriesProps> = ({ selectedCategory, onCategoryChange }) => {
  return (
    <section className="py-8 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-8">Категории товаров</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {categories.map(category => {
            const IconComponent = iconMap[category.icon];
            return (
              <button
                key={category.id}
                onClick={() => onCategoryChange(category.id)}
                className={`p-4 rounded-lg text-center transition-all hover:shadow-md ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-white hover:bg-gray-50 text-gray-700'
                }`}
              >
                <IconComponent 
                  size={32} 
                  className={`mx-auto mb-2 ${
                    selectedCategory === category.id ? 'text-white' : 'text-blue-600'
                  }`} 
                />
                <div className="text-sm font-medium mb-1">{category.name}</div>
                <div className={`text-xs ${
                  selectedCategory === category.id ? 'text-blue-100' : 'text-gray-500'
                }`}>
                  {category.count} товаров
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};