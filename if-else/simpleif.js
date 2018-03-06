let mid = 25, high = 50, low = 1, current = 13, found = -1;

if (current < mid) {
    mid = (current - low) / 2;
    console.log(mid);
} else if (current > mid) {
    mid = (current + high) / 2;
    console.log(mid);
 }
 else
    found = current;






