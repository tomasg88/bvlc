import React from 'react';
import { render } from '@testing-library/react';
import Button from '../components/Button/Button';

describe('<Button />', () => {
  const testProps = {
    text: 'Prueba',
    href: '/noticias',
  };

  test('renders a button', () => {
    const cmp = render(<Button {...testProps} />);
    expect(cmp.container).toHaveTextContent(testProps.text);
  });

  test('redirects to google', () => {
    const { getByText } = render(<Button {...testProps} />);

    const button = getByText(testProps.text);
    expect(button).toHaveAttribute('href', testProps.href);
    expect(button).toHaveAttribute('target', '_self');
  });

  test('throws error due to missing prop-types', () => {
    let cmp;
    try {
      cmp = render(<Button text={testProps.text} />);
    } catch (error) {
      console.log('ERROR: ', error);
    }

    expect(cmp).toBeUndefined();
  });
});
