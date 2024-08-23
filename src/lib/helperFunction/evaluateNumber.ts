export function evaluateNumber(n: number) {
    if (n <= 0) return 1;
    return Math.floor(Math.random() * n) + 1;
}