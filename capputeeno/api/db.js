const faker = require('faker');

const TOTAL_PAGES = 5;

const baseProducts = [
  { name: 'Caneca de cerâmica rústica', description: lorem.paragraph(), image_url: 'https://storage.googleapis.com/xesque-dev/challenge-images/caneca-06.jpg', category: 'mugs' },
  { name: 'Camiseta not today.', description: lorem.paragraph(), image_url: 'https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-05.jpg', category: 't-shirts' },
  { name: 'Caneca Black Ring', description: lorem.paragraph(), image_url: 'https://storage.googleapis.com/xesque-dev/challenge-images/caneca-04.jpg', category: 'mugs' },
  { name: 'Camiseta Broken Saints', description: lorem.paragraph(), image_url: 'https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-03.jpg', category: 't-shirts' },
  { name: 'Camiseta Outcast', description: lorem.paragraph(), image_url: 'https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-06.jpg', category: 't-shirts' },
  { name: 'Caneca The Grounds', description: lorem.paragraph(), image_url: 'https://storage.googleapis.com/xesque-dev/challenge-images/caneca-05.jpg', category: 'mugs' },
  { name: 'Camiseta evening', description: lorem.paragraph(), image_url: 'https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-02.jpg', category: 't-shirts' },
  { name: 'Caneca preto fosco', description: lorem.paragraph(), image_url: 'https://storage.googleapis.com/xesque-dev/challenge-images/caneca-01.jpg', category: 'mugs' },
  { name: 'Caneca Never settle', description: lorem.paragraph(), image_url: 'https://storage.googleapis.com/xesque-dev/challenge-images/caneca-03.jpg', category: 'mugs' },
  { name: 'Camiseta DREAMER', description: lorem.paragraph(), image_url: 'https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-01.jpg', category: 't-shirts' },
  { name: 'Caneca Decaf! P&Co', description: lorem.paragraph(), image_url: 'https://storage.googleapis.com/xesque-dev/challenge-images/caneca-02.jpg', category: 'mugs' },
  { name: 'Camiseta Ramones', description: lorem.paragraph(), image_url: 'https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-04.jpg', category: 't-shirts' },
]

const allProducts = new Array(TOTAL_PAGES).fill(1).reduce((acc) => {
  const products = baseProducts.map(product => ({
    ...product, 
    id: datatype.uuid(),
    price_in_cents: datatype.number({
      min: 2000,
      max: 10000,
    }),
    sales: datatype.number(40),
    created_at: date.past()
  })).sort(() => .5 - Math.random());

  return [...acc, ...products]
}, [])

export const products = allProducts;
