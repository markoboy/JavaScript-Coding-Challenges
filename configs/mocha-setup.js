// Setup mocha with regenerator runtime in order to run async functions
import 'regenerator-runtime';

import chai from 'chai';
import chaiExclude from 'chai-exclude';

chai.use(chaiExclude);
