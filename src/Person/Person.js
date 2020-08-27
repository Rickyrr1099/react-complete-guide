import React from 'react';
// import './Person.css'
import styled from 'styled-components';

const StyledDiv = styled.div`
    width: 60%;
    margin: 20px auto;
    border: 1px solid rgb(138, 235, 248);
    box-shadow: 1 2px 3px rgb(208, 201, 243);
    padding: 16px;
    text-align: center;

    @media (min-width: 500px) {
        width: 450px;
    }
`;

const person = props => {

    return (
    // <div className="Person" style={style}>
    <StyledDiv>
        <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
        <p>{props.children}</p>
        <input type="text" onChange={props.changed}/>
    </StyledDiv>        
    // </div>
    )
};

export default person;