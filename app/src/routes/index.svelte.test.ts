import { render } from '@testing-library/svelte';
import Index from './index.svelte';

describe('top page', () => {
  it('should be matched snapshot', () => {
    const { container } = render(Index);
    expect(container).toMatchSnapshot();
  });
});
