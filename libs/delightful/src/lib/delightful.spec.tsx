import { render } from '@testing-library/react';

import DelightfulUi from './delightful';

describe('DelightfulUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DelightfulUi />);
    expect(baseElement).toBeTruthy();
  });
});
