// https://www.youtube.com/watch?v=II6ziNnub1Q&list=PLgUwDviBIf0pmWCl2nepwGDO05a0-7EfJ
// https://practice.geeksforgeeks.org/problems/n-meetings-in-one-room-1587115620/1

maxMeetings(start, end, n);
{
  // code here
  const output = [];
  const meetings = [];
  for (let i = 0; i < start.length; i++) {
    meetings.push([start[i], end[i], i]);
  }
  meetings.sort((a, b) => a[1] - b[1]);
  let endTime = 0;
  for (let meet of meetings) {
    const [start, end, index] = meet;
    if (start > endTime) {
      output.push(index + 1);
      endTime = end;
    }
  }
  return output.length;
}
