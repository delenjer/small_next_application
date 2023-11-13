import {render} from '@testing-library/react';
import {ProductDto} from '@/models/models';
import {Products} from '@/components/Products/Products';

const mockProducts: ProductDto[] = [
  {
    id: 1,
    title: 'Product 1',
    price: 12.99,
    description: 'Text',
    category: "women's clothing",
    image: 'https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg',
    rating: { rate: 3.6, count: 145 }
  },
  {
    id: 2,
    title: 'Product 1',
    price: 12.99,
    description: 'Text',
    category: "women's clothing",
    image: 'https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg',
    rating: { rate: 3.6, count: 145 }
  },
];
describe('Products Component', () => {
  it('renders the component with a list of products', () => {
    render(<Products products={mockProducts} />);

    // eslint-disable-next-line testing-library/no-node-access
    const productsContainer = document.getElementsByClassName('products')[0];

    expect(productsContainer).toBeInTheDocument();
  });
});
