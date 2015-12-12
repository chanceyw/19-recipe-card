import { test } from 'qunit';
import moduleForAcceptance from 'recipe-card/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | recipes/index');

test('User can visit the homepage', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/');
  });
});

test('User can see makes input box servings', function(assert) {
  visit('/');

  andThen(function() {
    var input = findWithAssert('.makes-input');

    assert.equal(input.length, 1);
    assert.equal(input.val(), '8');
  });
});

test('User can see a list with 6 items on it')
