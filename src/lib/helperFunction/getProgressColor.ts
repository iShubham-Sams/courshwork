export const getProgressColorAndType = (percent: number) => {
    if (percent >= 0 && percent < 40) {
        return { type: "bad", color: "#EB751F" }
    } else if (percent >= 40 && percent < 75) {
        return { type: "Excellent", color: "#F9C94E80" }
    } else {
        return { type: "Excellent", color: "#3CC28AB8" }
    }
}