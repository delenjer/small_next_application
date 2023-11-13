import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import {BackAction} from '@/components/BackAction/BackAction';

describe('BackAction Component', () => {
  it('renders the component with the correct link', () => {
    render(<BackAction />);

    const linkElement = screen.getByRole('link', { name: /Go back/i });

    expect(linkElement).toBeInTheDocument();

    expect(linkElement).toHaveAttribute('href', '/');

    expect(linkElement).toHaveClass('back');
  });
});
