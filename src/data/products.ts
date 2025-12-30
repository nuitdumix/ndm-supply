import cdjImg from '../assets/items/cdj.png';
import bootsImg from '../assets/items/boots.png';
import paillassonImg from '../assets/items/paillason.png';

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
    category: 'SYSTEM'
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
    image: 'https://images.unsplash.com/photo-1598653222000-6b7b7a552625?auto=format&fit=crop&q=80&w=1000',
    category: 'SYSTEM'
  },
  {
    id: '5',
    name: 'Câble RCA',
    price: 15,
    image: 'https://images.unsplash.com/photo-1558403194-611308249627?auto=format&fit=crop&q=80&w=1000',
    category: 'RELICS'
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
    image: 'https://images.unsplash.com/photo-1583524505974-6facd53f4597?auto=format&fit=crop&q=80&w=1000',
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
    image: 'https://images.unsplash.com/photo-1608270586620-248524c67de9?auto=format&fit=crop&q=80&w=1000',
    category: 'Drink'
  },
  {
    id: '13',
    name: 'Clavier Switchs Roses',
    price: 180,
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b91a603?auto=format&fit=crop&q=80&w=1000',
    category: 'Tech'
  },
  {
    id: '14',
    name: 'T2 Centre Dijon',
    price: 180000,
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=1000',
    category: 'Real Estate'
  },
  {
    id: '15',
    name: 'T2 Tram Rebrand NDM',
    price: 5000000,
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=1000',
    category: 'Transport'
  },
  {
    id: '16',
    name: 'Vélo NDM',
    price: 450,
    image: 'https://images.unsplash.com/photo-1485965120184-e224f7a1d7f6?auto=format&fit=crop&q=80&w=1000',
    category: 'Transport'
  },
  {
    id: '17',
    name: 'Moufle Lobster Tri-doigt',
    price: 65,
    image: 'https://images.unsplash.com/photo-1582966772652-64d75f369282?auto=format&fit=crop&q=80&w=1000',
    category: 'Apparel'
  },
  {
    id: '18',
    name: 'Vinyle NDM',
    price: 25,
    image: 'https://images.unsplash.com/photo-1539375665275-f9de415ef9ac?auto=format&fit=crop&q=80&w=1000',
    category: 'Music'
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
    name: 'String NDM avec le chat',
    price: 20,
    image: 'https://images.unsplash.com/photo-1596568359553-a56de6970068?auto=format&fit=crop&q=80&w=1000',
    category: 'Apparel'
  }
];
