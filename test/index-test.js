'use strict';

const { describe } = require('./helpers/mocha');
const { expect } = require('./helpers/chai');
const path = require('path');
const {
  emberNew: _emberNew,
  emberInit: _emberInit,
  setUpBlueprintMocha
} = require('ember-cli-update-test-helpers');

async function emberNew({
  args = []
}) {
  return await _emberNew({
    args: [
      '-sn',
      '-sg',
      ...args
    ]
  });
}

async function emberInit({
  args = [],
  cwd
}) {
  return await _emberInit({
    args: [
      '-sn',
      ...args
    ],
    cwd
  });
}

describe('blueprint', function() {
  this.timeout(10 * 1000);

  // eslint-disable-next-line mocha/no-setup-in-describe
  setUpBlueprintMocha.call(this);

  it('works', async function() {
    let cwd = await emberNew({
      args: [
        '-b=addon'
      ]
    });

    await emberInit({
      args: [
        '-b',
        this.blueprintPath
      ],
      cwd
    });

    expect(path.join(cwd, '.travis.yml'))
      .to.be.a.file().with.contents.that.match(/name: ember-cli-update/);
  });
});
