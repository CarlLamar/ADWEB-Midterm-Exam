export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  parts: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: 'LAMBORGHINI',
    price: 799,
    description:
      "We are Lamborghini specialists with factory qualified expertise of a broad variety of Lamborghini models, whether you require Huracan repair or wish to tune your Aventador. We've gained expert understanding of a wide range of Lamborghini models, so we can service a Diablo or a brand-new Urus. Our expert staff of factory-trained technicians has been working on Lamborghini automobiles for decades, acquiring vital expertise that no manufacturer or factory-owned dealership can match. Our service center is equipped with genuine Lamborghini diagnostic equipment and factory tools, allowing us to deliver the high-quality services that your Lamborghini deserves.",
    parts: 'Engine, Tires',
  },
  {
    id: 2,
    name: 'FERRARI',
    price: 699,
    description:
      "We can maintain your Ferrari or lower it on factory suspension, and we can give high-quality servicing for your Italian supercar. We've worked on the 360, 430, 458, F8, and 812 models. Our professionals have performed everything from factory level maintenance to engine and suspension component modification.",
    parts: 'Engine, Tires, Doors',
  },
  {
    id: 3,
    name: 'MCLAREN',
    price: 299,
    description:
      'Our expert technicians have worked on a variety of McLaren automobiles, earning knowledge with models like as the 12C, 570S, 720S, and 765LT. From servicing to personalization, we have considerable understanding with McLaren automobiles. We have the knowledge and experience to operate on McLaren cars and offer a high-quality option for servicing and maintenance.',
    parts: 'Engine, Tires, Headlight',
  },
];

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
