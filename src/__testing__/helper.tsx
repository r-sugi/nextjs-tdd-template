export function toMock<T extends jest.Func>(
  fn: T
): jest.Mock<ReturnType<T>, Parameters<T>> {
  return fn as unknown as jest.Mock<ReturnType<T>, Parameters<T>>;
}

export function toSpyWithMock<T extends (...args: any[]) => any>(
  obj: any,
  method: string,
  mockImpl: T
): jest.SpyInstance {
  const spy = jest.spyOn(obj, method);
  spy.mockImplementation(mockImpl);
  return spy;
}
