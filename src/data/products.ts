import cdjImg from '../assets/items/cdj.png';
import bootsImg from '../assets/items/boots.png';
import paillassonImg from '../assets/items/paillason.png';
import beer from '../assets/items/beer.png';
import digtakt from '../assets/items/digtakt.png';
import keyboard from '../assets/items/keyboard.png';
import toaster from '../assets/items/toaster.png';
import tram from '../assets/items/tram.png';
import beanie from '../assets/items/beanie.png';
export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'CDJ',
    price: 2499,
    image: cdjImg,
    category: '2024_DROP'
  },
  {
    id: '2',
    name: 'Chaussures de ski',
    price: 350,
    image: bootsImg,
    category: 'UNIFORM'
  },
  {
    id: '3',
    name: 'Paillasson',
    price: 25,
    image: paillassonImg,
    category: 'RELICS'
  },
  {
    id: '4',
    name: 'Elektron Digitakt 2',
    price: 999,
    image: digtakt,
    category: '2024_DROP'
  },
  {
    id: '5',
    name: 'Beanie',
    price: 15,
    image: beanie,
    category: 'UNIFORM'
  },
  {
    id: '6',
    name: 'Lampe Vintage',
    price: 120,
    image: 'https://images.unsplash.com/photo-1507473888900-52e1adad5420?auto=format&fit=crop&q=80&w=1000',
    category: 'RELICS'
  },
  {
    id: '7',
    name: 'Toaster',
    price: 45,
    image: toaster,
    category: 'Home'
  },
  {
    id: '8',
    name: 'Cravate',
    price: 30,
    image: 'https://images.unsplash.com/photo-1589756823695-278bc923f962?auto=format&fit=crop&q=80&w=1000',
    category: 'Apparel'
  },
  {
    id: '9',
    name: 'Fake Magazine de Musique',
    price: 12,
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=1000',
    category: 'Print'
  },
  {
    id: '10',
    name: 'Brosse à dents',
    price: 5,
    image: 'https://images.unsplash.com/photo-1559676169-a79b1f66316d?auto=format&fit=crop&q=80&w=1000',
    category: 'Hygiene'
  },
  {
    id: '11',
    name: 'Vinyles Intégrale NDM',
    price: 150,
    image: 'https://images.unsplash.com/photo-1603048588665-791ca8aea617?auto=format&fit=crop&q=80&w=1000',
    category: 'Music'
  },
  {
    id: '12',
    name: 'Bière Canette 50cl NDM',
    price: 6,
    image: beer,
    category: 'Drink'
  },
  {
    id: '13',
    name: 'Clavier Switchs Roses',
    price: 180,
    image: keyboard,
    category: 'Tech'
  },
  {
    id: '15',
    name: 'T2 Tram Rebrand NDM',
    price: 5000000,
    image: tram,
    category: '2023_DROP'
  },
  {
    id: '16',
    name: 'Vélo MTB',
    price: 450,
    image: 'https://images.unsplash.com/photo-1485965120184-e224f7a1d7f6?auto=format&fit=crop&q=80&w=1000',
    category: '2023_DROP'
  },
  {
    id: '17',
    name: 'Moufle Lobster Tri-doigt',
    price: 65,
    image: 'https://images.unsplash.com/photo-1582966772652-64d75f369282?auto=format&fit=crop&q=80&w=1000',
    category: 'Apparel'
  },
  {
    id: '19',
    name: 'USB Key',
    price: 15,
    image: 'https://images.unsplash.com/photo-1625895197185-efcec01cffe0?auto=format&fit=crop&q=80&w=1000',
    category: 'Tech'
  },
  {
    id: '20',
    name: 'String NDM',
    price: 20,
    image: 'https://images.unsplash.com/photo-1596568359553-a56de6970068?auto=format&fit=crop&q=80&w=1000',
    category: 'Apparel'
  }
];
