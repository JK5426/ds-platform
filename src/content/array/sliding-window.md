## The Sliding Window Technique

If you ever need to find a subarray, substring, or a continuous sequence that satisfies a specific condition (like max sum, longest unique characters), the **Sliding Window** technique is your best friend.

Instead of recalculating overlapping subproblems repeatedly, we maintain a "window" of elements and just slide it along the array.

### Visualizing the Window 🪟
Imagine a physical window frame sliding over a row of numbers. As you move it one step to the right, one number falls out of the left side, and a new number enters the right side.

---

## Example: Maximum Sum Subarray of Size K

Given an array of integers and a number `K`, find the maximum sum of any contiguous subarray of size `K`.

```javascript
function maxSumSubarray(arr, k) {
    if (arr.length < k) return null;
    
    let maxSum = 0;
    let windowSum = 0;
    
    // Create the initial window of size K
    for (let i = 0; i < k; i++) {
        windowSum += arr[i];
    }
    maxSum = windowSum;
    
    // Slide the window
    for (let i = k; i < arr.length; i++) {
        // Add the new element entering the window, subtract the one leaving
        windowSum = windowSum + arr[i] - arr[i - k];
        maxSum = Math.max(maxSum, windowSum);
    }
    
    return maxSum;
}
```

### Why is this better?
A naive solution would calculate the sum of *every* block of `K` elements, taking `O(N * K)` time. By simply subtracting the element that leaves the window and adding the new one, we do it in `O(N)` time. That's true algorithmic efficiency!
