import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import {BackAction} from '@/components/BackAction/BackAction';


describe('BackAction Component', () => {
  it('renders the component with the correct link', () => {
    render(<BackAction />);

    // Use screen.getByRole to find the link by its role
    const linkElement = screen.getByRole('link', { name: /Go back/i });

    // Assert that the link is rendered
    expect(linkElement).toBeInTheDocument();

    // Make sure the href is set correctly on the Link component
    expect(linkElement).toHaveAttribute('href', '/');

    // You can also add more specific assertions about the link, for example:
    expect(linkElement).toHaveClass('back'); // assuming the correct class name
  });
});
