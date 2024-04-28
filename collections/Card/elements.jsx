// Styled elements for the Card go here
import styled, { css } from "styled-components";

export const StyledCard = styled(({ ...props }) => <div {...props} />)`
  font-family: sans-serif;
  overflow: hidden;
  align-self: center;
  line-height: 24px;
  min-width: 184px;
  min-height: 56px;
  padding: 16px 0;
  cursor: pointer;
  border: none;
  color: black;
  background: none;

.container--all{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin: -0px 400px;
}

.container--all-desc{
    display: flex;
    align-items: center;
    text-align: left:
}

.container--desc{
    display: flex;
    flex-direction: column;
    justify-content: space-evenly; 
    align-items: center; 
}

.desc--wrap{
    border-radius: 7px;
    margin-bottom: 35px;
    display: flex;
    background-color: #f0f0f0;
    align-items: center;
}

.desc--wrap:hover{
    border: 2px #0099ff solid;

    h3{
        color: #0099ff;
        text-decoration: underline;
    }
}


.text-icon--wrap{
    display: flex;
}

.icon--wrap{
    display: flex;
    align-items: center;
    margin: 20px;
}

.text--wrap{
    display: flex;
    justify-content: center;  
    flex-direction: column;
    width: 100%;
    padding: 0 20px;
}

  @media (max-width: 1024px) {
    .desc--wrap:hover {
        border: 2px #0099ff solid;
    
        h3{
            color: #0099ff;
            text-decoration: underline;
        }
    }
    .container--all {
      flex-direction: column;
      margin: 0;
    }
    .text--wrap {
        width: 100%; 
        padding: 0 20px;
      }
  }

`;

export const Icon = styled(({ ...props }) => <i />)`
font-size: 50px;
color: black;
`
