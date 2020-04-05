'use strict';

const {
  name,
  version
} = require('./package');

module.exports = {
  locals({
    repoSlug
  }) {
    return {
      name,
      version,
      repoSlug
    };
  }
};
