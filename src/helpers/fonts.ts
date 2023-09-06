import { Roboto } from 'next/font/google';
import { Lexend_Deca } from 'next/font/google';

const body = Roboto({ weight: '400', subsets: ['latin'], variable: '--font-roboto' });
const header = Lexend_Deca({ weight: '700', subsets: ['latin'] });

export const fonts = {
  body,
  header
};
