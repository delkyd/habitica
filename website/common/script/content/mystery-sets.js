import { each } from 'lodash';
import t from './translation';

let mysterySets = {
  201402: {
    start: '2014-02-22',
    end: '2014-02-28',
  },
  201403: {
    start: '2014-03-24',
    end: '2014-04-02',
  },
  201404: {
    start: '2014-04-24',
    end: '2014-05-02',
  },
  201405: {
    start: '2014-05-21',
    end: '2014-06-02',
  },
  201406: {
    start: '2014-06-23',
    end: '2014-07-02',
  },
  201407: {
    start: '2014-07-23',
    end: '2014-08-02',
  },
  201408: {
    start: '2014-08-23',
    end: '2014-09-02',
  },
  201409: {
    start: '2014-09-24',
    end: '2014-10-02',
  },
  201410: {
    start: '2014-10-24',
    end: '2014-11-02',
  },
  201411: {
    start: '2014-11-24',
    end: '2014-12-02',
  },
  201412: {
    start: '2014-12-25',
    end: '2015-01-02',
  },
  201501: {
    start: '2015-01-26',
    end: '2015-02-02',
  },
  201502: {
    start: '2015-02-24',
    end: '2015-03-02',
  },
  201503: {
    start: '2015-03-25',
    end: '2015-04-02',
  },
  201504: {
    start: '2015-04-24',
    end: '2015-05-02',
  },
  201505: {
    start: '2015-05-25',
    end: '2015-06-02',
  },
  201506: {
    start: '2015-06-25',
    end: '2015-07-02',
  },
  201507: {
    start: '2015-07-24',
    end: '2015-08-02',
  },
  201508: {
    start: '2015-08-23',
    end: '2015-09-02',
  },
  201509: {
    start: '2015-09-24',
    end: '2015-10-02',
  },
  201510: {
    start: '2015-10-26',
    end: '2015-11-02',
  },
  201511: {
    start: '2015-11-25',
    end: '2015-12-02',
  },
  201512: {
    start: '2015-12-23',
    end: '2016-01-02',
  },
  201601: {
    start: '2016-01-26',
    end: '2016-02-02',
  },
  201602: {
    start: '2016-02-24',
    end: '2016-03-02',
  },
  201603: {
    start: '2016-03-24',
    end: '2016-04-02',
  },
  201604: {
    start: '2016-04-25',
    end: '2016-05-02',
  },
  201605: {
    start: '2016-05-25',
    end: '2016-06-02',
  },
  201606: {
    start: '2016-06-23',
    end: '2016-07-02',
  },
  201607: {
    start: '2016-07-26',
    end: '2016-08-02',
  },
  201608: {
    start: '2016-08-23',
    end: '2016-09-02',
  },
  201609: {
    start: '2016-09-22',
    end: '2016-10-02',
  },
  301404: {
    start: '3014-03-24',
    end: '3014-04-02',
  },
  301405: {
    start: '3014-04-24',
    end: '3014-05-02',
  },
  // @TODO: Remove wondercon from mystery-sets
  wondercon: {
    start: '2014-03-24',
    end: '2014-04-01',
  },
};

each(mysterySets, (value, key) => {
  value.key = key;
  value.text = t(`mysterySet${key}`);
});

module.exports = mysterySets;
