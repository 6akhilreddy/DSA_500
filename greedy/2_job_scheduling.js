// https://practice.geeksforgeeks.org/problems/job-sequencing-problem-1587115620/1#
// https://www.youtube.com/watch?v=LjPx4wQaRIs&list=PLgUwDviBIf0pmWCl2nepwGDO05a0-7EfJ&index=3

JobScheduling(arr, n);
{
  // code here
  arr.sort((a, b) => b.profit - a.profit);

  let maxDeadline = 0;
  for (let job of arr) {
    maxDeadline = Math.max(maxDeadline, job.dead);
  }

  const jobs = new Array(maxDeadline).fill(-1);

  for (let job of arr) {
    let index = job.dead - 1;
    while (index >= 0) {
      if (jobs[index] === -1) {
        jobs[index] = job.profit;
        break;
      }
      index--;
    }
  }

  const output = [0, 0];

  for (let profit of jobs) {
    if (profit > -1) {
      output[0]++;
      output[1] += profit;
    }
  }

  return output;
}
