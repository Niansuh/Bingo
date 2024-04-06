import { ChatMessageModel } from "@/lib/bots/bing/types";

export const initialMessages: ChatMessageModel[] = [
  { author: 'system', text: 'conversation between user and robot', id: '1' },
  { author: 'user', text: 'Matrix', id: 'jz' },
  {
    author: 'bot', text: 'The determinant of a matrix can be represented using the determinant or det(A) for an n x n matrix A. There are various methods for calculating the determinant, with the most common being Gaussian elimination and Laplace expansion. Therefore, the determinant of a matrix can be expressed using the following formula:\n\n$$\n|A| = det(A)\n$$\n\nI hope this answer can help you.\n', id: 'xxx'
  },
  {
    author: 'user', text: 'What are the advantages and disadvantages of the top 3 best-selling pet vacuum cleaners?', id: '2'
  },
  {
    author: 'bot', text: `
Hello, this is Bing. Based on online search results, I have found the following three best-selling pet vacuum cleaners and their advantages and disadvantages:

- **Dyson V10 Lightweight Digital Slim Fluffy Cordless Vacuum Cleaner** [^1^] [^3^]: This vacuum cleaner is designed for pet homes, featuring powerful suction and versatile nozzles to effectively remove pet hair and dust.
  - Pros: Lightweight and easy to use, long battery life, advanced filtration system that effectively removes allergens.
  - Cons: Higher price, noisy, requires regular cleaning of filters.
- **Philips FC6908/82 (W7) Cordless Vacuum Cleaner** [^2^] [^4^]: This handheld dry suction cordless vacuum cleaner is designed for pet homes. It has a 75-minute ultra-long battery life, suitable for large households, and includes a mite turbine brush for deep cleaning of sheets and covers.
  - Pros: Powerful cleaning performance, easy to operate, suitable for various scenarios.
  - Cons: Loud noise (84dB(A)), small dust cup (0.6L), long charging time (5 hours).
- **Bissell Pet Vacuum Cleaner** [^2^]: This portable handheld vacuum cleaner is designed for pet hair removal. It comes with special rubber nozzles and soft brush heads for easy removal of pet hair and dust; operates almost silently.
  - Pros: Lightweight and easy to use (weight only 1.36kg), rechargeable and replaceable battery.
  - Cons: Unstable battery life (between 15-30 minutes), not strong suction, may not be effective on carpets or sofas; lacks a filtration system or filter.

I hope this information is helpful. If you have any further questions, feel free to ask. 😊
  `, id: '3'
  },
  { author: 'user', text: 'Today\'s news', id: '4' },
  {
    author: 'bot', text: `Hello, this is Bing. Based on your search query for "Today's news," I have found the following information:

  # Chinese News
  - "Qiushi" magazine publishes an important article by General Secretary Xi Jinping on deepening party and state institution reforms to advance the modernization of the national governance system and capacity [^1^].
  - The 5th gold for the Dream Team! Quan Hongchan and Chen Yuxi win the women's synchronized 10-meter platform [^1^].
  - China Meteorological Administration issues an orange typhoon warning at 18:00 on July 16 [^1^].
  - Shiqian, Guizhou: Summer tourism drives rural revitalization [^1^].
  - Activating the "talent dividend" for large scientific facilities [^1^].
  - Gathering, using, and retaining talents to make hopeful fields intelligent fields [^1^].
  - Scientists discover that improving the efficiency of the grain system can effectively support China's carbon neutrality [^1^].
  - Chengdu uses competitions to enhance urban reputation [^1^].
  - Xiangjiang Guanlan: "Talent grabbing" is effective, and Hong Kong's competitiveness remains [^1^].
  - Jiande, Zhejiang: Enjoying the coolness on the Xin'an River [^1^].
  - Targeted funds continue to be accurately irrigated, accumulating strength for high-quality development [^1^].
  - Enterprise confidence is recovering, increasing medium and long-term investment to lay the foundation for stable growth [^1^].
  - Wuhan Crossing River Festival opens, a thousand "swimmers" compete in the Yangtze River [^1^].
  - The financial sector pays more attention to supporting the real economy, reducing financing costs to boost market confidence [^1^].
  - The Universiade is here! Chengdu welcomes the Universiade, and the whole people participate in fitness [^1^].
  - Hidden treasures in universities: Museums [^1^].
  - China's automotive industry wins three "global firsts" in 70 years [^1^].
  - Lai Huaping, member of the Standing Committee of the Fuxin Municipal Party Committee and Deputy Mayor of Liaoning, is suspected of serious disciplinary violations and is under investigation [^1^].

  # International News
  - UN Secretary-General: Sustainable development faces risks, and countries need to strengthen action [^2^].
  - International shipping industry accelerates green transformation [^2^].
  - US companies oppose tightening export restrictions on chips to China [^2^].
  - Europe increases investment in climate technology [^2^].
  - Chinese enterprises help Denmark develop clean energy [^2^].
  - China calls on the international community to work together to prevent the situation in Ukraine from getting out of control [^2^].
  - China and Algeria jointly build a new model of international relations [^2^].

  The above information is for reference only. For specific details, please click on the following links:

  [1] [Chinese News_CCTV Net](https://news.cctv.com/china/)
  [2] [People's Daily Online](http://www.people.com.cn/)`, id: '5'
  },
  { author: 'user', text: 'Write a quicksort', id: '6' },
  {
    author: 'bot', text: "Hello, this is Bing. I can help you write a quicksort in Python. Quicksort is a sorting algorithm based on the divide-and-conquer strategy. Its basic idea is to choose a pivot element from the array, partition the array into two subarrays such that elements on the left are smaller or equal to the pivot, and elements on the right are greater or equal to the pivot. Then, recursively apply quicksort to the two subarrays and merge the results. Here is the Python implementation of quicksort:\n\n```python\n# Define a function for swapping two elements in an array\ndef swap(arr, i, j):\n    temp = arr[i]\n    arr[i] = arr[j]\n    arr[j] = temp\n\n# Define a function for partitioning a segment of an array\ndef partition(arr, low, high):\n    # Choose the rightmost element as the pivot\n    pivot = arr[high]\n    # Initialize a pointer pointing to the last position in the left segment\n    i = low - 1\n    # Traverse each element in the left segment\n    for j in range(low, high):\n        # If the current element is less than or equal to the pivot\n        if arr[j] <= pivot:\n            # Move the pointer to the right\n            i += 1\n            # Swap the element at the pointer with the current element\n            swap(arr, i, j)\n    # Swap the pivot with the first element on the right of the pointer\n    swap(arr, i + 1, high)\n    # Return the final position of the pivot\n    return i + 1\n\n# Define a function for quicksort on an array\ndef quick_sort(arr, low, high):\n    # If the segment length is greater than 1\n    if low < high:\n        # Partition the segment and get the position of the pivot\n        p = partition(arr, low, high)\n        # Apply quicksort to the left subsegment\n        quick_sort(arr, low, p - 1)\n        # Apply quicksort to the right subsegment\n        quick_sort(arr, p + 1, high)\n\n# Test code\narr = [5, 3, 7, 2, 9, 1, 4, 6, 8]\nprint(\"Original array:\", arr)\nquick_sort(arr, 0, len(arr) - 1)\nprint(\"Sorted array:\", arr)\n```", id: '7'
  },
  {
    author: 'bot', text: "Sure, I'll try to draw a cat.\n > ![Cat 1](https://tse2.mm.bing.net/th/id/OIG.jz34V0PNVkPC229h9spV?w=270&h=270&c=6&r=0&o=5&dpr=1.5&pid=ImgGn)![Cat 2](https://tse1.mm.bing.net/th/id/OIG.6g7d.XLZMP_iwAByLhvo?w=270&h=270&c=6&r=0&o=5&dpr=1.5&pid=ImgGn)![Cat 3](https://tse2.mm.bing.net/th/id/OIG.iAxF4ekekYn7sZw9SmU6?w=270&h=270&c=6&r=0&o=5&dpr=1.5&pid=ImgGn)![Cat 4](https://tse4.mm.bing.net/th/id/OIG.qDnzeSKzUCeJcrBqc5mX?w=270&h=270&c=6&r=0&o=5&dpr=1.5&pid=ImgGn)",
    id: '8',
    suggestedResponses: [{ text: 'Suggestion 1' }]
  }
];
