import { render } from '@testing-library/react';

import {Product} from '@/components/Product/Product';

const mockProduct: any = {
  id: 1,
  title: 'Product 1',
  price: 109.95,
  description: 'Text',
  image: 'https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg',
};

describe('Product Component', () => {
  it('renders product correctly', () => {
    const { getByText } = render(<Product product={mockProduct} />);

    // eslint-disable-next-line testing-library/prefer-screen-queries
    const productName = getByText(mockProduct.title);

    // eslint-disable-next-line testing-library/prefer-screen-queries
    const productPrice = getByText(`${mockProduct.price} $`);

    // eslint-disable-next-line testing-library/prefer-screen-queries
    const productDescription = getByText(mockProduct.description);

    expect(productName).toBeInTheDocument();
    expect(productPrice).toBeInTheDocument();
    expect(productDescription).toBeInTheDocument();
  });
});
