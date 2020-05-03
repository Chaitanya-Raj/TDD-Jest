function analyze(arr) {
  return {
    average: arr.reduce((sum, cur) => sum + cur) / arr.length,
    max: Math.max(...arr),
    min: Math.min(...arr),
    length: arr.length,
  };
}

export default analyze;
