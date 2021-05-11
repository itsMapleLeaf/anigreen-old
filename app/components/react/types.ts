// thanks ben! https://www.benmvp.com/blog/polymorphic-react-components-typescript/
// prettier-ignore
export type PolyProps<As extends React.ElementType, OtherProps> =
	OtherProps & { as?: As } &
	Omit<React.ComponentPropsWithRef<As>, keyof OtherProps>
