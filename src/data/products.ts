import { Product } from '../types';

export const products: Product[] = [
  {
    id: 1,
    name: "Комплект тормозных колодок передних",
    price: 3250,
    originalPrice: 3800,
    image: "https://images.pexels.com/photos/3807277/pexels-photo-3807277.jpeg",
    category: "Тормозная система",
    description: "Высококачественные тормозные колодки для переднего тормоза. Обеспечивают надежное торможение и долгий срок службы.",
    inStock: true,
    rating: 4.8,
    reviews: 124,
    brand: "Bosch",
    specifications: {
      "Материал": "Керамика",
      "Толщина": "17.5 мм",
      "Длина": "155 мм",
      "Ширина": "63.5 мм"
    }
  },
  {
    id: 2,
    name: "Амортизатор задний газовый",
    price: 4500,
    image: "https://images.pexels.com/photos/3807338/pexels-photo-3807338.jpeg",
    category: "Подвеска",
    description: "Газовый амортизатор заднего хода. Улучшает комфорт езды и управляемость автомобиля.",
    inStock: true,
    rating: 4.6,
    reviews: 89,
    brand: "KYB",
    specifications: {
      "Тип": "Газовый",
      "Длина": "345 мм",
      "Диаметр": "51 мм",
      "Ход": "110 мм"
    }
  },
  {
    id: 3,
    name: "Фильтр воздушный двигателя",
    price: 890,
    originalPrice: 1200,
    image: "https://images.pexels.com/photos/3807276/pexels-photo-3807276.jpeg",
    category: "Фильтры",
    description: "Воздушный фильтр для двигателя. Защищает двигатель от пыли и грязи, обеспечивает чистый воздух для горения.",
    inStock: true,
    rating: 4.7,
    reviews: 203,
    brand: "Mann",
    specifications: {
      "Тип": "Бумажный",
      "Длина": "280 мм",
      "Ширина": "220 мм",
      "Высота": "58 мм"
    }
  },
  {
    id: 4,
    name: "Свечи зажигания комплект 4шт",
    price: 1680,
    image: "https://images.pexels.com/photos/3807273/pexels-photo-3807273.jpeg",
    category: "Система зажигания",
    description: "Комплект из 4 свечей зажигания. Обеспечивают стабильный запуск двигателя и его ровную работу.",
    inStock: true,
    rating: 4.9,
    reviews: 156,
    brand: "NGK",
    specifications: {
      "Количество": "4 шт",
      "Тип": "Иридиевые",
      "Зазор": "1.1 мм",
      "Резьба": "M14x1.25"
    }
  },
  {
    id: 5,
    name: "Ремень ГРМ с роликами",
    price: 2750,
    originalPrice: 3200,
    image: "https://images.pexels.com/photos/3807280/pexels-photo-3807280.jpeg",
    category: "Двигатель",
    description: "Комплект ремня ГРМ с натяжными и направляющими роликами. Для замены всей системы ГРМ.",
    inStock: false,
    rating: 4.5,
    reviews: 67,
    brand: "Gates",
    specifications: {
      "Длина": "1050 мм",
      "Ширина": "25 мм",
      "Количество зубьев": "105",
      "В комплекте": "2 ролика"
    }
  },
  {
    id: 6,
    name: "Масло моторное 5W-30 4л",
    price: 2100,
    image: "https://images.pexels.com/photos/3807336/pexels-photo-3807336.jpeg",
    category: "Масла и жидкости",
    description: "Синтетическое моторное масло высшего качества. Обеспечивает надежную защиту двигателя.",
    inStock: true,
    rating: 4.8,
    reviews: 289,
    brand: "Castrol",
    specifications: {
      "Вязкость": "5W-30",
      "Тип": "Синтетическое",
      "Объем": "4 литра",
      "Стандарт": "API SN/CF"
    }
  },
  {
    id: 7,
    name: "Колодки тормозные задние",
    price: 2890,
    image: "https://images.pexels.com/photos/3807278/pexels-photo-3807278.jpeg",
    category: "Тормозная система",
    description: "Задние тормозные колодки премиум класса. Низкий уровень шума и отличное торможение.",
    inStock: true,
    rating: 4.6,
    reviews: 94,
    brand: "Brembo",
    specifications: {
      "Материал": "Полуметаллические",
      "Толщина": "16.8 мм",
      "Длина": "107 мм",
      "Ширина": "42 мм"
    }
  },
  {
    id: 8,
    name: "Стартер восстановленный",
    price: 8900,
    originalPrice: 12500,
    image: "https://images.pexels.com/photos/3807274/pexels-photo-3807274.jpeg",
    category: "Электрооборудование",
    description: "Восстановленный стартер с гарантией. Полностью проверен и готов к установке.",
    inStock: true,
    rating: 4.4,
    reviews: 45,
    brand: "Bosch",
    specifications: {
      "Мощность": "1.4 кВт",
      "Напряжение": "12 В",
      "Количество зубьев": "10",
      "Гарантия": "12 месяцев"
    }
  }
];

export const categories = [
  { id: "all", name: "Все категории", icon: "Grid3X3", count: products.length },
  { id: "brake", name: "Тормозная система", icon: "Disc", count: products.filter(p => p.category === "Тормозная система").length },
  { id: "suspension", name: "Подвеска", icon: "Wrench", count: products.filter(p => p.category === "Подвеска").length },
  { id: "filters", name: "Фильтры", icon: "Filter", count: products.filter(p => p.category === "Фильтры").length },
  { id: "engine", name: "Двигатель", icon: "Zap", count: products.filter(p => p.category === "Двигатель").length },
  { id: "oils", name: "Масла и жидкости", icon: "Droplets", count: products.filter(p => p.category === "Масла и жидкости").length },
  { id: "electrical", name: "Электрооборудование", icon: "Zap", count: products.filter(p => p.category === "Электрооборудование").length },
  { id: "ignition", name: "Система зажигания", icon: "Flame", count: products.filter(p => p.category === "Система зажигания").length }
];