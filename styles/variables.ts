import { css } from 'styled-components';

const colors = {
  prim_1: '#fcf1ed',
  prim_2: '#edd5cf',
  prim_3: '#e0a697',
  prim_4: '#d18775',
  // prim_5: '#c06f5b',
  prim_5: '#de7157',
  prim_6: '#ab5c49',
  prim_7: '#6b3122',
  prim_8: '#46190e',
  prim_9: '#37160a',

  white: '#ffffff',
  neut_1: '#f9f9fa',
  neut_2: '#eff3f4',
  neut_3: '#dee6eb',
  neut_4: '#c8d4dd',
  neut_5: '#a4b1bd',
  neut_6: '#798291',
  neut_7: '#515a6b',
  neut_8: '#323D4E',
  neut_9: '#232933',

  succ_1: '#edfcf8',
  succ_2: '#d0f2e8',
  succ_3: '#86d3ba',
  succ_4: '#63b69a',
  succ_5: '#51a185',
  succ_6: '#3c7e66',
  succ_7: '#2a5847',
  succ_8: '#3b524b',
  succ_9: '#23362f',

  warn_1: '#fcf9d9',
  warn_2: '#f2efad',
  warn_3: '#f4ee85',
  warn_4: '#ede565',
  warn_5: '#e0d96b',
  warn_6: '#b9ad5b',
  warn_7: '#9c8e3d',
  warn_8: '#6f622b',
  warn_9: '#4f4329',

  dang_1: '#f7dada',
  dang_2: '#e7a2a0',
  dang_3: '#e57a76',
  dang_4: '#d0504a',
  dang_5: '#b73c36',
  dang_6: '#a02a22',
  dang_7: '#843835',
  dang_8: '#60221f',
  dang_9: '#3f1311',
};

const font = (
  size: number,
  weight: number,
  color?: string,
  style?: string
) => css`
  color: ${color};
  font-size: ${size}px;
  font-style: ${style};
  font-weight: ${weight};
`;

export { colors, font };
