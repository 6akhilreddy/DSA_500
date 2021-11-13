// https://practice.geeksforgeeks.org/problems/minimum-platforms-1587115620/1#
// https://www.youtube.com/watch?v=LjPx4wQaRIs&list=PLgUwDviBIf0pmWCl2nepwGDO05a0-7EfJ&index=2

findPlatform(arr, dep, n);
{
  arr.sort((a, b) => a - b);
  dep.sort((a, b) => a - b);

  let platforms = 1,
    maxPlatforms = 1;
  let arrIdx = 1,
    depIdx = 0;

  while (arrIdx < n && depIdx < n) {
    if (arr[arrIdx] <= dep[depIdx]) {
      platforms++;
      arrIdx++;
    } else if (arr[arrIdx] > dep[depIdx]) {
      platforms--;
      depIdx++;
    }
    maxPlatforms = Math.max(maxPlatforms, platforms);
  }

  return maxPlatforms;
}
