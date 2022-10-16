import {TName} from 'atoms/index';

export const tournment_details_mapping: {
  svg_name: TName;
  key: string;
  anotherKey?: string;
}[] = [
  {
    svg_name: 'level',
    key: 'levels_of_players',
  },
  {
    svg_name: 'calenderFill',
    key: 'start_date',
    anotherKey: 'start_time',
  },
  {
    svg_name: 'location',
    key: 'location',
  },
];
