const assert = require('assert');

function capitalizeFirstLetters(string) {
    return string
      .split(' ')
      .map(word => word.substr(0,1).toUpperCase() + word.substr(1,word.length))
      .join(' ');
  };

// TEST
        assert.strictEqual(capitalizeFirstLetters('i am learning TDD'), 'I Am Learning TDD');
   
        assert.strictEqual(capitalizeFirstLetters('i'), 'I');
  
        assert.strictEqual(capitalizeFirstLetters(''), '');
