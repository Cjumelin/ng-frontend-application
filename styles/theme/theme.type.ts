import 'styled-components';

const colors = ['gold', 'white', 'grey', 'lighterGrey', 'darkGrey', 'lighterBlack', 'black', 'blue', 'green'];

type Colors = typeof colors;
type Color = Colors[number];

const spacings = [
	'unset',
	's',
	'm',
	'l',

	'xs',
	'6xs',
	'5xs',
	'4xs',
	'3xs',
	'2xs',

	'xl',
	'2xl',
	'3xl',
	'4xl',
	'5xl',
	'6xl',
	'7xl',
	'8xl'
];

type Spacings = typeof spacings;
type Spacing = Spacings[number];

declare module 'styled-components' {
	export interface DefaultTheme {
		radius: {
			s: string;
			m: string;
			l: string;
		};
		spacing: { [key: Spacing]: string };
		colors: { [key: Color]: string };
	}
}
