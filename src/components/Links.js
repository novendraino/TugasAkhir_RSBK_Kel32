import styled, { css } from 'styled-components';

export default styled.a`
font-family:  'roboto';
font-size:1.3em;
font-weight: bold;
border:2px solid;
border-color:#ec524b;
border-radius:5px;
padding:7px  10px; 
background:#9ad3bc; 

${(props) =>
                props.background &&
                css` 
background:${(props) => props.background};
`} 
color:#ec524b;
`;