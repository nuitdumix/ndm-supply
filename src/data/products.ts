import cdjImg from '../assets/items/cdj.png';
import bootsImg from '../assets/items/boots.png';
import paillassonImg from '../assets/items/paillason.png';
import beer from '../assets/items/beer.png';
import digtakt from '../assets/items/digtakt.png';
import keyboard from '../assets/items/keyboard.png';
import toaster from '../assets/items/toaster.png';
import tram from '../assets/items/tram.png';
import tie from '../assets/items/tie.png';
import beanie from '../assets/items/beanie.png';
import usb from '../assets/items/usb.png';
import lobster from '../assets/items/lobster.png';
import string from '../assets/items/string.png';
import brosse from '../assets/items/brosse.png';

export interface Archive {
  id: string;
  name: string;
  year: number;
}

export const ARCHIVES: Archive[] = [
  { id: '2024_DROP', name: '2024_DROP', year: 2024 },
  { id: '2023_DROP', name: '2023_DROP', year: 2023 }
];

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  archiveId?: string;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'CDJ',
    price: 2499,
    image: cdjImg,
    category: 'SYSTEM',
    archiveId: '2024_DROP'
  },
  {
    id: '2',
    name: 'Chaussures de ski',
    price: 350,
    image: bootsImg,
    category: 'UNIFORM',
    archiveId: '2024_DROP'
  },
  {
    id: '3',
    name: 'Paillasson',
    price: 25,
    image: paillassonImg,
    category: 'RELICS',
    archiveId: '2024_DROP'
  },
  {
    id: '4',
    name: 'Elektron Digitakt 2',
    price: 999,
    image: digtakt,
    category: 'SYSTEM',
    archiveId: '2024_DROP'
  },
  {
    id: '5',
    name: 'Beanie',
    price: 15,
    image: beanie,
    category: 'UNIFORM'
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
    image: tie,
    category: 'Apparel'
  },
  {
    id: '10',
    name: 'Brosse à dents',
    price: 5,
    image: brosse,
    category: 'Hygiene'
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
    category: 'RELICS',
    archiveId: '2023_DROP'
  },
  {
    id: '17',
    name: 'Moufle Lobster Tri-doigt',
    price: 65,
    image: lobster,
    category: 'UNIFORM'
  },
  {
    id: '19',
    name: 'USB Key',
    price: 15,
    image: usb,
    category: 'SYSTEM'
  },
  {
    id: '20',
    name: 'String NDM',
    price: 20,
    image: string,
    category: 'Apparel'
  }
];
