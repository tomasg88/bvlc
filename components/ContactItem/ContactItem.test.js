import React from 'react';
import { render } from '@testing-library/react';
import ContactItem from './ContactItem';

describe('<ContactItem />', () => {
  const testProps = {
    title: 'Prueba',
    value: '123',
  };

  test('should render component', () => {
    const cmp = render(<ContactItem {...testProps} />);

    expect(cmp.container).toBeDefined();
  });
});
