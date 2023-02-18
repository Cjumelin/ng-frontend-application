import { Card } from '../Ui/card';
import Image from 'next/image';
import styled from 'styled-components';

export const QuestCard = () => {
	const stub = {
		id: 1,
		skillTree: 'smartphones',
		skill: 'Apple',
		title: 'iPhone 9',
		difficulty: 4,
		experience: 9400,
		gold: 549,
		type: '-',
		cover: 'https://i.dummyjson.com/data/products/1/thumbnail.jpg'
	};

	const StyledDiv = styled.div`
		min-width: 300px;
		min-height: 200px;
	`;

	const StyledImg = styled.img`
		max-width: 100%;
		padding: 0.5rem;
		height: auto;
		border-radius: 7px;
	`;

	return (
		<StyledDiv>
			<Card>
				<StyledImg src={stub.cover} alt='' />
				<h3>{stub.title}</h3>
			</Card>
		</StyledDiv>
	);
};
