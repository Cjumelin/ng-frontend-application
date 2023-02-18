import { FC, ReactNode } from 'react';
import styled from 'styled-components';

type props = {
	children: ReactNode;
};

export const Card: FC<props> = ({ children }) => {
	const StyledDiv = styled.div`
		box-sizing: border-box;
		height: 100%;
		width: 100%;
		background: ${({ theme }) => theme.colors.lighterGrey};
		border: 1px solid rgba(58, 58, 58, 0.5); // Export border color to config
		border-radius: 10px;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	`;

	return <StyledDiv>{children}</StyledDiv>;
};
