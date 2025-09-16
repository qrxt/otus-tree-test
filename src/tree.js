const getTreeNodes = (node) => {
  const inner = (
    node,
    prefix = ' ',
    isLast = true
  ) => {
    const offsetSymbol = isLast ? '└──' : '├──';

    const currentLine = `${prefix}${offsetSymbol} ${node.name}`;

    if (!node.items || !node.items.length) return [currentLine];

    const newPrefix = `${prefix}${isLast ? ' ' : '│ '}`;

    return node.items.reduce((acc, nodeItem, index) => {
      const newIsLast = index === node.items.length - 1;

      return acc.concat(inner(nodeItem, newPrefix, newIsLast));
    }, [currentLine]);
  }

  return inner(node, '');
};

const printTree = (node) => {
  const tree = getTreeNodes(node).join('\n');

  console.log(tree);
}

module.exports = {
  printTree,
}
