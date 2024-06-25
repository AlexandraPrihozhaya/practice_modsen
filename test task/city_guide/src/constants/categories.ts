import architecture from '@assets/cat_icons_png/architecture.png';
import bank from '@assets/cat_icons_png/bank.png';
import bicycle from '@assets/cat_icons_png/bicycle.png';
import car_station from '@assets/cat_icons_png/gas_station.png';
import car from '@assets/cat_icons_png/car.png';
import coffee from '@assets/cat_icons_png/coffee.png';
import culture from '@assets/cat_icons_png/culture.png';
import different from '@assets/cat_icons_png/other.png';
import entertainment from '@assets/cat_icons_png/entertainment.png';
import food from '@assets/cat_icons_png/food.png';
import history from '@assets/cat_icons_png/history.png';
import industrial from '@assets/cat_icons_png/industrial.png';
import major from '@assets/cat_icons_png/major.png';
import nature from '@assets/cat_icons_png/nature.png';
import religion from '@assets/cat_icons_png/religion.png';
import shop from '@assets/cat_icons_png/shop.png';
import sport from '@assets/cat_icons_png/sport.png';
import bed from '@assets/cat_icons_png/bed.png';
  
export interface IIcon {
  icon: string,
  text: string,
  isSelected: boolean,
}

export const categories: IIcon[] = [
  { icon: architecture, text: 'Архитектура', isSelected: false },
  { icon: bank, text: 'Банки', isSelected: false },
  { icon: bed, text: 'Место для сна', isSelected: false },
  { icon: bicycle, text: 'Велосипеды', isSelected: false },
  { icon: car_station, text: 'Заправки', isSelected: false },
  { icon: car, text: 'Авто', isSelected: false },
  { icon: coffee, text: 'Кофе/чай', isSelected: false },
  { icon: culture, text: 'Культура', isSelected: false },
  { icon: different, text: 'Разное', isSelected: false },
  { icon: entertainment, text: 'Развлечения', isSelected: false },
  { icon: food, text: 'Еда', isSelected: false },
  { icon: history, text: 'История', isSelected: false },
  { icon: industrial, text: 'Заводы', isSelected: false },
  { icon: major, text: '18+', isSelected: false },
  { icon: nature, text: 'Природа', isSelected: false },
  { icon: religion, text: 'Религия', isSelected: false },
  { icon: shop, text: 'Магазины', isSelected: false },
  { icon: sport, text: 'Спорт', isSelected: false },
];