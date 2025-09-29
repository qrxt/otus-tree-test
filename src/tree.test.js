const { printTree } = require('./tree');

const nestedTree = {
  name: 1,
  items: [
    {
      name: 2,
      items: [
        { name: 3 },
        { name: 4 },
      ],
    },
    {
      name: 5,
      items: [
        { name: 6 },
      ]
    },
  ]
};

const nestedTreeLines = [
  '└── 1',
  ' ├── 2',
  ' │ ├── 3',
  ' │ └── 4',
  ' └── 5',
  '  └── 6',
];

const wideTree = {
  name: 1,
  items: [
    {
      name: 2,
      items: [
        { name: 7 },
        { name: 8 },
        { name: 9 },
        { name: 10 },
      ]
    },
    { name: 3 },
    { name: 4 },
    { name: 5 },
    { name: 6 },
  ]
};

const wideTreeLines = [
  '└── 1',
  ' ├── 2',
  ' │ ├── 7',
  ' │ ├── 8',
  ' │ ├── 9',
  ' │ └── 10',
  ' ├── 3',
  ' ├── 4',
  ' ├── 5',
  ' └── 6',
];

const deepTree = {
  name: 1,
  items: [{
    name: 2,
    items: [{
      name: 3,
      items: [{
        name: 4,
        items: [
          {
            name: 5,
            items: [{ name: 'a' }],
          },
          {
            name: 6,
            items: [{ name: 'b' }],
          },
        ],
      }],
    }],
  }],
};

const deepTreeLines = [
  '└── 1',
  ' └── 2',
  '  └── 3',
  '   └── 4',
  '    ├── 5',
  '    │ └── a',
  '    └── 6',
  '     └── b',
]

describe('Утилита tree', () => {
  [
    { value: nestedTree, expected: nestedTreeLines, description: 'дерева со вложенными узлами' },
    { value: {}, expected: [], description: 'пустого объекта' },
    { value: { name: 1 }, expected: ['└── 1'], description: 'дерева с одиночным узлом' },
    { value: wideTree, expected: wideTreeLines, description: 'дерева с большой шириной' },
    { value: deepTree, expected: deepTreeLines, description: 'дерева с большой шириной' },
  ].forEach(({ value, expected, description }) => {
    test(`Выводит корректный результат для ${description} в консоль`, () => {
      console.log = jest.fn();

      printTree(value)

      expect(console.log).toHaveBeenCalledWith(
        expected.join('\n')
      );
    });
  });
})
