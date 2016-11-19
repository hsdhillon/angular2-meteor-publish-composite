import { Venues } from '../../../both/collections/venues.collection';
import { Venue } from '../../../both/models/venue.model';

export function loadVenues() {
  if (Venues.find().cursor.count() === 0) {
    const venues: Venue[] = [{
      name: 'ShBoom',
      type: 'Nightclub',
      address: {
          line1: '2410 San Ramon Valley Blvd',
          city: 'San Ramon',
          state: 'CA',
          zipcode: '94583',
          country: 'USA'
      },
      public: false
    }, {
        name: 'OMG',
        type: 'Nightclub',
        address: {
            line1: '43 6th St',
            city: 'San Francisco',
            state: 'CA',
            zipcode: '94103',
            country: 'USA'
        },
        public: false
    }, {
        name: 'Embarcadero Center ',
        type: 'Meeting Place',
        address: {
            line1: '275 Battery Street',
            city: 'San Francisco',
            state: 'CA',
            zipcode: '94111',
            country: 'USA'
        },
        public: true
    }];

    venues.forEach((venue: Venue) => Venues.insert(venue));
  }
}
