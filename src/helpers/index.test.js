import { waitForTimeout } from '../setupTests';
import { buildImageSrc, debounce } from './index';

describe('testing buildImageSrc', () => {
  afterEach(() => {
    jest.clearAllMocks();
  }, []);

  test('should return first image url', () => {
    const image = { url: 'TEST_URL' };

    expect(buildImageSrc([image])).toEqual(image.url);
  });

  test('should return undefined if images is empty', () => {
    expect(buildImageSrc([])).toBeUndefined();
  });
});

describe('testing debounce', () => {
  const fn = jest.fn();
  const timeout = 300;

  afterEach(() => {
    jest.clearAllMocks();
  }, []);

  test('should call fn after timeout', async () => {
    jest.spyOn(global, 'setTimeout');

    debounce(fn, timeout);
    expect(global.setTimeout).toHaveBeenCalledWith(fn, timeout);

    await waitForTimeout(timeout);

    expect(fn).toHaveBeenCalled();
  });

  test('should call clearTimeout before setTimeout', async () => {
    const timeoutId = 1;

    jest.spyOn(global, 'setTimeout').mockReturnValueOnce(timeoutId);
    jest.spyOn(global, 'clearTimeout');

    debounce(fn, timeout);
    debounce(fn, timeout);

    expect(global.setTimeout).toHaveBeenCalledTimes(2);
    expect(global.setTimeout).toHaveBeenCalledWith(fn, timeout);
    expect(global.clearTimeout).toHaveBeenCalledWith(timeoutId);

    await waitForTimeout(timeout);

    expect(fn).toHaveBeenCalledTimes(1);
  });
});
