import styled from "styled-components";
import { mobile } from "../responsive";
import { NavLink } from "react-router-dom";

const Container = styled.div`
	flex: 1;
	margin: 3px;
	height: 70vh;
	position: relative;
`;

const Image = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
	${mobile({ height: "20vh" })}
`;

const Info = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

// const Title = styled.h1`
//     color:white;
//     margin-bottom: 20px;
// `;

const Button = styled.button`
	border: none;
	padding: 20px;
	background-color: white;
	color: gray;
	cursor: pointer;
	font-weight: 600;
`;

const CategoryItem = ({ item }) => {
	return (
		<Container>
			<Image src={item.img} />
			<Info>
				<Button>
					<NavLink style={{ color: "black" }} to={item.to}>
						{item.button}
					</NavLink>
				</Button>
			</Info>
		</Container>
	);
};

export default CategoryItem;
