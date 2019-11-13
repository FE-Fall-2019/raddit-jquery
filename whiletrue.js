var accumulator = 0;
var counter = 1;

while (true) {
    if (++counter % 2 == 1) {
        continue;
    }
    accumulator += counter;
    if (accumulator >= 100) {
        break;
    }
}

console.log(accumulator);