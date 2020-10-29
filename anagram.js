const isAnagram = (str1, str2) => formatString(str1) === formatString(str2);

const formatString = (string) => {
  return string.replace(/[^\w]/g, '').toLowerCase().split("").sort().join("");
};

module.exports = isAnagram;
