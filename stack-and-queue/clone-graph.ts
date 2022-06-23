
class INode {
  val: number
  neighbors: INode[]
  constructor(val?: number, neighbors?: INode[]) {
    this.val = (val === undefined ? 0 : val)
    this.neighbors = (neighbors === undefined ? [] : neighbors)
  }
}


function cloneGraph(node: INode | null): INode | null {
  if (node === null) return null

  const cache = new Map<number, { rawNeighbors: number[]; clonedNode: INode; injected: boolean }>();
  const cloneNodeShallowly = (node: INode) => {
    if (cache.has(node.val)) {
      return cache.get(node.val);
    }
    const shallowedNode = new INode(node.val);
    cache.set(node.val, {
      clonedNode: shallowedNode,
      rawNeighbors: node.neighbors.map(n => n.val),
      injected: false
    });
    node.neighbors.forEach(node => {
      cloneNodeShallowly(node);
    })
  }
  const injectNeighbors = (node: INode) => {
    const { clonedNode, rawNeighbors, injected } = cache.get(node.val)!;
    if (injected) {
      return;
    }

    clonedNode.neighbors = rawNeighbors.map(n => cache.get(n)!.clonedNode);
    cache.get(node.val)!.injected = true;

    node.neighbors.forEach(node => injectNeighbors(node));
  }

  cloneNodeShallowly(node);
  injectNeighbors(node);

  return cache.get(node.val)!.clonedNode;
};