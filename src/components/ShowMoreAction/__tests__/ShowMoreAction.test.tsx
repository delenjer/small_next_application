// ShowMoreAction.test.js
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import {ShowMoreAction} from '@/components/ShowMoreAction/ShowMoreAction';


describe('ShowMoreAction Component', () => {
  it('renders the component with the correct link', () => {
    const mockId = 1;

    render(<ShowMoreAction id={mockId} />);

    // Use screen.getByRole to find the link by its role
    const linkElement = screen.getByRole('link', { name: /Show details/i });

    // Assert that the link is rendered
    expect(linkElement).toBeInTheDocument();

    // Make sure the href is set correctly on the Link component
    expect(linkElement).toHaveAttribute('href', `/details/${mockId}`);

    // You can also add more specific assertions about the link, for example:
    expect(linkElement).toHaveClass('showMore'); // assuming the correct class name
  });
});
