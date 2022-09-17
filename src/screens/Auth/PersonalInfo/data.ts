export const genders = [
  {label: 'Male', value: 'Male', color: 'white'},
  {label: 'Female', value: 'Female', color: 'white'},
];

export const levels = [
  {label: 'Level A', value: 'Level A', color: 'white'},
  {label: 'Level B', value: 'Level B', color: 'white'},
  {label: 'Level C', value: 'Level C', color: 'white'},
];

export const frequencies = [
  {label: 'Once/week', value: 'Once/week', color: 'white'},
  {label: 'Twice/week', value: 'Twice/week', color: 'white'},
  {label: 'More', value: 'More', color: 'white'},
];

type TScales = {
  name: 'weight' | 'height';
  title: string;
  mesuringUnit: string;
  required: boolean;
  svgSize: number;
};

export const scales: TScales[] = [
  {
    name: 'weight',
    title: 'Weight',
    mesuringUnit: 'KG',
    required: false,
    svgSize: 70,
  },
  {
    name: 'height',
    title: 'Height',
    mesuringUnit: 'CM',
    required: false,
    svgSize: 60,
  },
];
