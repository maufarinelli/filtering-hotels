export interface Action {
  type: string;
  payload: any;
}

const toggleAccommodationType = (accommodationType: any): Action => {
  return {type: 'ACCOMMODATION_TYPE_CHANGE', payload: accommodationType};
};

export const filterActions: Object = {
  toggleAccommodationType: toggleAccommodationType
};
