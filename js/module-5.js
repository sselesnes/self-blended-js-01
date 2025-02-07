function countTotalSalary(salaries) {
  console.log(salaries);

  return (
    Object.keys(salaries).length &&
    (salaries.totalSalary = Object.values(salaries).reduce(
      (acc, num) => acc + num
    ))
  );
}

console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));
console.log(countTotalSalary({})); // повертає 0
