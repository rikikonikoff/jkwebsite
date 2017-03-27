import Layout from '../src/containers/Layout';

describe('Layout', () => {
  let wrapper;

  afterEach(() => {
    wrapper.unmount();
  });

  describe('visiting any page that contains React', () => {
    beforeEach(() => {
      wrapper = mount(
        <Layout />
      );
    });

    it('should render an h1 tag', () => {
      expect(wrapper.find('h1').length).toEqual(1);
    });

    it('should render an h1 tag with the site name', () => {
      expect(wrapper.find('h1').text()).toBe('Jacob M. Konikoff');
    });
  });
});
