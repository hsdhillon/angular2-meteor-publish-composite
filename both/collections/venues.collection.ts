import { MongoObservable } from 'meteor-rxjs';
import { Meteor } from 'meteor/meteor';

import { Venue } from '../models/venue.model';

export const Venues = new MongoObservable.Collection<Venue>('venues');

function loggedIn() {
  return !!Meteor.user();
}

Venues.allow({
  insert: loggedIn,
  update: loggedIn,
  remove: loggedIn
});
