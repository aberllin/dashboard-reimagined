export type BoxShadow = {
  card: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  inner: string;
  none: string;
};

const boxShadow: BoxShadow = {
  card: '2px 3px 22px 2px rgba(0,0,0,0.48)',

  sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
  inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
  none: 'none',
};

export default boxShadow;
