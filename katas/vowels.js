const vowels = (s) => {
    const vowelArr = "aeiouy".split("");
    return s.toLowerCase().split("").map((l, i) => (vowelArr.includes(l) ? i + 1 : null)).filter(Boolean);
};

// Test cases
console.log(vowels("Mmmm"));
console.log(vowels("Super"));
console.log(vowels("Apple"));
console.log(vowels("YoMama"));