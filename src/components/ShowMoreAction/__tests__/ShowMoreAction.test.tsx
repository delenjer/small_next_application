import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import {ShowMoreAction} from '@/components/ShowMoreAction/ShowMoreAction';

describe('ShowMoreAction Component', () => {
  it('renders the component with the correct link', () => {
    const mockId = 1;

    render(<ShowMoreAction id={mockId} />);

    const linkElement = screen.getByRole('link', { name: /Show details/i });

    expect(linkElement).toBeInTheDocument();

    expect(linkElement).toHaveAttribute('href', `/details/${mockId}`);

    expect(linkElement).toHaveClass('showMore');
  });
});
