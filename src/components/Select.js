import styled, { css } from 'styled-components';

export default styled.select`
font-size:1rem;
border:1px solid;
border-color:blue;
border-radius:5px;
padding:7px  10px; 
background:white; 
box-shadow: 5px 5px #ec524b;
margin:5% 5%;
${(props) =>
                props.background &&
                css` 
background:${(props) => props.background};
`} 
color:black;
&:hover{ 
text-decoration:underline;
} 
`;