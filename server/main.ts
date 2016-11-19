import { Meteor } from 'meteor/meteor';

import { loadVenues } from './imports/fixtures/venues';
import { loadParties } from './imports/fixtures/parties';

import './imports/publications/parties';
import './imports/publications/users';
import '../both/methods/parties.methods';

Meteor.startup(() => {
    loadVenues();
    loadParties();
});
