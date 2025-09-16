const { printTree } = require('./tree');

const nestedTreeData = {
  'name': 1,
  'items': [
    {
      'name': 2,
      'items': [
        { 'name': 3 },
        { 'name': 4 },
      ],
    },
    {
      'name': 5,
      'items': [
        { 'name': 6 },
      ]
    },
  ]
}

const nestedTreeLines = [
  '└── 1',
  ' ├── 2',
  ' │ ├── 3',
  ' │ └── 4',
  ' └── 5',
  '  └── 6',
];

describe('Утилита tree', () => {
  test('Выводит корректный результат для дерева со вложенными узлами в консоль', () => {
    const logSpy = jest.spyOn(console, 'log');

    printTree(nestedTreeData)

    expect(logSpy).toHaveBeenCalledWith(
      nestedTreeLines.join('\n')
    );
  });
})
