import { IProduct } from '../models/product';

export const products: IProduct[] = [
  {
    id: 1,
    image: '../IMG/clothing.png',
    title: 'Одяг',
    description:
      'Одноманітний за конструкцією і суворо регламентований на вигляд одяг військовослужбовців.',
    info: '',
  },
  {
    id: 2,
    image: '../IMG/shoes.png',
    title: 'Взуття',
    description:
      'Номенклатура черевиків, берців, кросівок, які використовуються в арміях світу для ведення бойових дій, повсякденного носіння та тренувань.',
    info: '',
  },
  {
    id: 3,
    image: '../IMG/armor.png',
    title: 'Захист',
    description: 'Набір захисного спорядження військовослужбовців.',
    info: '',
  },
];
