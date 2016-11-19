import { CollectionObject } from './collection-object.model';

export interface Party extends CollectionObject {
  name: string;
  description: string;
  location: Location;
  venueId?: string;
  owner?: string;
  public: boolean;
  invited?: string[];
  rsvps?: RSVP[];
}

interface RSVP {
  userId: string;
  response: string;
}

interface Location {
  name: string;
  lat?: number;
  lng?: number;
}
