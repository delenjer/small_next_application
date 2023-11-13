import { render } from '@testing-library/react';
import {Details} from '@/components/Details/Details';

const mockProduct: any = {
  id: 1,
  title: 'Product 1',
  price: 109.95,
  description: 'Text',
  image: 'https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg',
  rating: {
    rate: 9,
  }
};

describe('Product Component', () => {
  it('renders product correctly', () => {
    const { getByText } = render(<Details details={mockProduct} />);

    // eslint-disable-next-line testing-library/prefer-screen-queries
    const productName = getByText(mockProduct.title);
    // eslint-disable-next-line testing-library/prefer-screen-queries
    const productDescription = getByText(mockProduct.description);
    // eslint-disable-next-line testing-library/prefer-screen-queries
    const productPrice = getByText(`${mockProduct.price}$`);
    // eslint-disable-next-line testing-library/prefer-screen-queries
    const productRating = getByText(mockProduct.rating?.rate);

    expect(productName).toBeInTheDocument();
    expect(productDescription).toBeInTheDocument();
    expect(productPrice).toBeInTheDocument();
    expect(productRating).toBeInTheDocument();
  });
});
