import * as StorageService from './StorageService';

describe('testing StorageService', () => {
  const key = 'TEST';
  const content = { message: 'TEST' };

  afterEach(() => {
    jest.clearAllMocks();
  }, []);

  test('should getItem call localStorage.getItem with content parsed', () => {
    jest
      .spyOn(window.localStorage, 'getItem')
      .mockImplementationOnce(() => JSON.stringify(content));

    expect(StorageService.getItem(key)).toEqual(content);
    expect(window.localStorage.getItem).toHaveBeenCalledWith(key);
  });

  test('should setItem call localStorage.setItem with content stringified', () => {
    jest.spyOn(window.localStorage, 'setItem');

    StorageService.setItem(key, content);

    expect(window.localStorage.setItem).toHaveBeenCalledWith(
      key,
      JSON.stringify(content)
    );
  });

  test('should removeItem call localStorage.removeItem', () => {
    jest.spyOn(window.localStorage, 'removeItem');

    StorageService.removeItem(key);

    expect(window.localStorage.removeItem).toHaveBeenCalledWith(key);
  });
});
