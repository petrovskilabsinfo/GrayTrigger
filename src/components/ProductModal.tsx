import React from 'react';
import { X, Star, ShoppingCart, Plus, Minus } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../hooks/useCart';

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, isOpen, onClose }) => {
  const { addToCart, cart, updateQuantity } = useCart();

  if (!isOpen || !product) return null;

  const cartItem = cart.find(item => item.id === product.id);
  const quantity = cartItem ? cartItem.quantity : 0;

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity <= 0) {
      return;
    }
    if (cartItem) {
      updateQuantity(product.id, newQuantity);
    } else if (newQuantity > 0) {
      addToCart(product);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b px-6 py-4 flex items-center justify-between">
          <h2 className="text-xl font-semibold">{product.name}</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <X size={24} />
          </button>
        </div>

        <div className="p-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-80 object-cover rounded-lg"
              />
            </div>

            <div>
              <div className="flex items-center mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      className={i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}
                    />
                  ))}
                </div>
                <span className="text-gray-500 ml-2">({product.reviews} отзывов)</span>
              </div>

              {product.brand && (
                <p className="text-gray-600 mb-4">Производитель: <span className="font-semibold">{product.brand}</span></p>
              )}

              <div className="mb-6">
                <div className="flex items-center mb-2">
                  <span className="text-3xl font-bold text-gray-900">
                    {product.price.toLocaleString('ru-RU')} ₽
                  </span>
                  {product.originalPrice && (
                    <span className="text-lg text-gray-500 line-through ml-3">
                      {product.originalPrice.toLocaleString('ru-RU')} ₽
                    </span>
                  )}
                </div>
                <p className={`text-sm ${product.inStock ? 'text-green-600' : 'text-red-600'}`}>
                  {product.inStock ? '✓ В наличии' : '✗ Нет в наличии'}
                </p>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold mb-2">Описание:</h4>
                <p className="text-gray-700">{product.description}</p>
              </div>

              <div className="flex items-center gap-4 mb-6">
                {quantity > 0 ? (
                  <div className="flex items-center border rounded-lg">
                    <button
                      onClick={() => handleQuantityChange(quantity - 1)}
                      className="p-2 hover:bg-gray-100"
                    >
                      <Minus size={16} />
                    </button>
                    <span className="px-4 py-2 font-semibold">{quantity}</span>
                    <button
                      onClick={() => handleQuantityChange(quantity + 1)}
                      className="p-2 hover:bg-gray-100"
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => addToCart(product)}
                    disabled={!product.inStock}
                    className={`px-6 py-3 rounded-lg font-medium transition-colors flex items-center ${
                      product.inStock
                        ? 'bg-blue-600 text-white hover:bg-blue-700'
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    <ShoppingCart size={20} className="mr-2" />
                    {product.inStock ? 'Добавить в корзину' : 'Нет в наличии'}
                  </button>
                )}
              </div>

              {product.specifications && (
                <div>
                  <h4 className="font-semibold mb-3">Характеристики:</h4>
                  <div className="space-y-2">
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <div key={key} className="flex justify-between py-2 border-b">
                        <span className="text-gray-600">{key}:</span>
                        <span className="font-medium">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};