const listmap = fn => list =>
      list(
          (head, tail) => NewList(fn(head), listMap(fn)(tail)),
					() => EmptyList
      );

const listFilter = fn => list => 
	list(
			(head, tail) => 
					fn(head)
							? NewList(head, listFilter(fn)(tail))
							: listFilter(fn)(tail)), 
					() => EmptyList
};
