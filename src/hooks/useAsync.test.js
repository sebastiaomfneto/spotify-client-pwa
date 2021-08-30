import { act, renderHook } from '@testing-library/react-hooks';

import { useAsync } from './useAsync';

describe('testing useAsync', () => {
  const args = ['TEST_ARGS'];
  const data = 'TEST_DATA';

  const fn = jest.fn();

  afterEach(() => {
    jest.resetAllMocks();
  });

  test('should set initialData on data', () => {
    const { result } = renderHook(() => useAsync(fn, data));

    expect(result.current.data).toEqual(data);
    expect(fn).not.toHaveBeenCalled();
  });

  test('should call fn with args and set result on data', async () => {
    fn.mockResolvedValueOnce(data);

    const { result, waitForValueToChange } = renderHook(() => useAsync(fn));

    act(() => {
      result.current.perform(args);
    });

    await waitForValueToChange(() => result.current.data);

    expect(fn).toHaveBeenCalledWith(args);
    expect(result.current.data).toEqual(data);
  });

  test('should set error throwed by fn on error', async () => {
    const error = new Error('ERROR');

    fn.mockRejectedValueOnce(error);

    const { result, waitForValueToChange } = renderHook(() => useAsync(fn));

    act(() => {
      result.current.perform();
    });

    await waitForValueToChange(() => result.current.error);

    expect(fn).toHaveBeenCalled();
    expect(result.current.data).toBeUndefined();
    expect(result.current.error).toEqual(error);
  });

  test('should toggle loading while fn resolves', async () => {
    fn.mockImplementationOnce(
      () => new Promise((r) => setTimeout(r(data), 500))
    );

    const { result, waitForValueToChange } = renderHook(() => useAsync(fn));

    expect(result.current.loading).toEqual(false);

    act(() => {
      result.current.perform();
    });

    expect(result.current.loading).toEqual(true);

    await waitForValueToChange(() => result.current.data);

    expect(result.current.loading).toEqual(false);

    expect(fn).toHaveBeenCalled();
  });
});
