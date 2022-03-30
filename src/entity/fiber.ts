type FiberNode = {
  child: FiberNode | null;
  sibling: FiberNode | null;
  memoState: Object;
  return: FiberNode | null;
  pendingProps: Object;
  memoizedProps: Object;
  memoizedState: Object;
  lastEffect: FiberNode | null;
};
