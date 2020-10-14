const assert = require('assert');

// TEST
        assert.strictEqual(capitalizeFirstLetters('i am learning TDD'), 'I Am Learning TDD');
   
        assert.strictEqual(capitalizeFirstLetters('i'), 'I');
  
        assert.strictEqual(capitalizeFirstLetters(''), '');
