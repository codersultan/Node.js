const ageCal = (name, year) => {
  const age = new Date().getFullYear() - year;
  return `${name} is ${age} years old.`;
};

module.exports = ageCal;
