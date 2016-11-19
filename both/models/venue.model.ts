import { CollectionObject } from './collection-object.model';

export interface Venue extends CollectionObject {
  name: string;
  type: string;
  address: Address;
  public: boolean;
}

interface Address {
    line1: string;
    line2?: string;
    city: string;
    state: string;
    zipcode: string;
    country: string;
    type?: string;
    lat?: number;
    lng?: number;
}
