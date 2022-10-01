import {
  DefaultApi,
  Configuration,
  ICPDetails,
  ICPSearchDetails,
} from '../src';

const getApi = (): DefaultApi => {
  const config = new Configuration({
    apiKey: 'test-api-key',
  });
  return new DefaultApi(config);
};

describe('index', () => {
  describe('BaseApi', () => {
    it('should return instantiate', () => {
      expect(getApi()).toBeTruthy();
    });
  });
});
