const anagrams = (w, words) => {
  let t = w.split("").sort().join("");
  return words.filter((w) => w.split("").sort().join("") === t);
};

// Test cases
console.log(anagrams("abba", ["aabb", "abcd", "bbaa", "dada"]));
console.log(anagrams("racer", ["crazer", "carer", "racar", "caers", "racer"]));
console.log(anagrams("laser", ["lazing", "lazy", "lacer"]));