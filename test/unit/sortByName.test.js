const sorting = require("../../app");

const config = {
  collectCoverageFrom: [
    '**/*.{js,jsx}',
    '!**/node_modules/**',
    '!**/coverage/**',
  ],
};

module.exports = config;

describe("Books names test suit", () => {
  it("Имена книг должны быть отсортированы в верном порядке", () => {
    const input = [
      "Гарри Поттер",
      "Властелин Колец",
      "Волшебник изумрудного города",
    ]

    const expected = [
      "Властелин Колец",
      "Волшебник изумрудного города",
      "Гарри Поттер",
    ]

    const result = sorting.sortByName(input)
    
    expect(result).toEqual(expected);
  });

  test("Функция должна выдавать TypeError если не задан параметр", () => {
    expect(() => sorting.sortByName()).toThrow(TypeError)
  });

  it("Сортировка списка с повторяющимися книгами", () => {
    const input = [
      "Гарри Поттер",
      "Волшебник изумрудного города",
      "Гарри Поттер",
    ]

    const expected = [
      "Волшебник изумрудного города",
      "Гарри Поттер",
      "Гарри Поттер",
    ]

    const result = sorting.sortByName(input)
    
    expect(result).toEqual(expected);
  });

});