const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!Array.isArray(members) || members.length === 0) return false;

  let teamChars = [];
  let firstChar;

  for (let i = 0; i < members.length; i++) {

    if (typeof members[i] === 'string') {
      firstChar = members[i].trim()[0].toUpperCase();
      teamChars.push(firstChar);
    }
  }

  return teamChars.sort( (a, b) => {
    if (a > b) return 1;
    if (a < b) return -1;
    if (a == b) return 0;
  }).join('');
}

module.exports = {
  createDreamTeam
};
