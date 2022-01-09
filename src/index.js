module.exports = function check(str, bracketsConfig) {
  // 1. join all brackets from bracjetsConfig to compare them to string => const bracketsToCheck
  // 2. loop while bracketsToCheck has values, set the counter
  //    2.1 loop through the bracketsToCheck
  //    - if there val from joined brackets in a str => delete it
  //    -.if no  => counter++
  //    2.2 check if counter === bracketsToCheck.length
  //    - if so it means we checked all brackets in str => break
  //  3. if we checked all bracked and they are same to str, we would delete them, so str length === 0;
  //    - else there will be brackets left in str;

  const bracketsToCheck = bracketsConfig.map((bracket) => bracket.join(''));

  while (bracketsToCheck.length > 0) {
    let counter = 0;

    for (const bracket of bracketsToCheck) {
      const cur = str.indexOf(bracket);
      if (cur === -1) {
        counter++;
      } else {
        str = str.replace(bracket, '');
      }
    }

    if (counter === bracketsToCheck.length) {
      break;
    }
  }

  return str.length === 0;
};
