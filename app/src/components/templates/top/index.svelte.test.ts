import { render } from '@testing-library/svelte';
import TopPageTemplate from './index.svelte';
import { mockIconProps, mockTopTitle } from '../../../mocks/templates/top';

describe('Top page template', () => {
  it('should be matched snapshot', () => {
    const { container } = render(TopPageTemplate, { icon: mockIconProps, title: mockTopTitle });
    expect(container).toMatchSnapshot();
  });
});
