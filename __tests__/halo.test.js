function sum(a, b) {
    return a + b;
}

test('проверка функции сложения', () => {
    expect(sum(2, 3)).toBe(5);
});