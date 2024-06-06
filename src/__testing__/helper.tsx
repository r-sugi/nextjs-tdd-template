export function toMock<T extends jest.Func>(
	fn: T,
): jest.Mock<ReturnType<T>, Parameters<T>> {
	return fn as unknown as jest.Mock<ReturnType<T>, Parameters<T>>;
}

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export function toSpyWithMock<T extends (...args: any[]) => any>(
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	obj: any,
	method: string,
	mockImpl: T,
): jest.SpyInstance {
	const spy = jest.spyOn(obj, method);
	spy.mockImplementation(mockImpl);
	return spy;
}
