import { render } from '@testing-library/react';
import HelperText from './helper-text.component';

test('helper text', () => {
  const { getByTestId } = render(<HelperText helperText="Test Helper Text" />);
  expect(getByTestId('HelperText')).toHaveTextContent('Test Helper Text');
});

test('error message', () => {
  const { getByTestId } = render(<HelperText errorMessage="Test Error Message" />);
  expect(getByTestId('HelperText')).toHaveTextContent('Test Error Message');
});
