export const topicsData = [
  {
    id: 'array',
    title: 'Arrays',
    tagline: 'The OG memory locker',
    description: 'Think of an array like a row of lockers. You can stash items in them, and as long as you know the locker number (index), you can grab your stuff instantly.',
    color: 'from-pink-500 to-rose-500',
    icon: '📦',
    subtopics: [
      {
        id: 'two-pointers',
        title: 'Two Pointers',
        difficulty: 'Easy/Medium',
        description: 'Using two indices to traverse an array from both ends or at different speeds.',
        useCase: 'Finding pairs that sum to target, reversing an array, finding palindromes.'
      },
      {
        id: 'sliding-window',
        title: 'Sliding Window',
        difficulty: 'Medium',
        description: 'Creating a "window" of elements and sliding it across the array to find optimal sub-arrays.',
        useCase: 'Longest substring without repeating characters, max sum of K consecutive elements.'
      }
    ]
  },
  {
    id: 'linkedlist',
    title: 'Linked List',
    tagline: 'The ultimate treasure hunt',
    description: 'Instead of lockers next to each other, you get a clue (node) that holds your data and tells you where the next clue is.',
    color: 'from-lime-400 to-emerald-500',
    icon: '🔗',
    subtopics: [
      {
        id: 'fast-slow',
        title: 'Fast & Slow Pointers',
        difficulty: 'Medium',
        description: 'Also known as Floyd\'s Tortoise and Hare algorithm. One pointer moves 1 step, the other moves 2 steps.',
        useCase: 'Detecting cycles in a list, finding the middle node.'
      },
      {
        id: 'reverse-ll',
        title: 'In-place Reversal',
        difficulty: 'Medium',
        description: 'Changing the "next" pointers of nodes to flip the direction of the list without using extra memory.',
        useCase: 'Reversing sub-lists, checking palindromes.'
      }
    ]
  },
  {
    id: 'tree',
    title: 'Trees',
    tagline: 'Not just for birds',
    description: 'Hierarchical structure like a family tree or an organizational chart. One root, many branches.',
    color: 'from-purple-500 to-indigo-500',
    icon: '🌳',
    subtopics: [
      {
        id: 'dfs',
        title: 'Depth First Search (DFS)',
        difficulty: 'Medium',
        description: 'Going as deep as possible down one branch before backtracking.',
        useCase: 'Finding a path to a leaf, topological sorting.'
      },
      {
        id: 'bfs',
        title: 'Breadth First Search (BFS)',
        difficulty: 'Medium',
        description: 'Exploring the tree level by level.',
        useCase: 'Finding the shortest path, printing level order.'
      }
    ]
  }
];

export const getTopicById = (id) => topicsData.find(t => t.id === id);
