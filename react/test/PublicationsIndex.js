describe('PublicationsIndex', () => {
  let wrapper;

  beforeEach(() => {
    spyOn(global, 'fetch').and.returnValue(
      createResponseFromFixture('PublicationsIndex')
    );
  });

  afterEach(() => {
    wrapper.unmount();
  });

});
