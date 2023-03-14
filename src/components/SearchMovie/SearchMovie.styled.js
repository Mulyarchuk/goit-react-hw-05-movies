import styled from "styled-components";

export const SearchMovieList = styled.ul`
display: grid; 
grid-template-columns: repeat(3, 1fr); 
grid-template-rows: repeat(4, 1fr); 
grid-column-gap: 10px;
grid-row-gap: 10px; 
list-style: none;
`;

export const Title = styled.p`
font-size: 15px;
font-weight: 700;
text-decoration: none;
color: black;`