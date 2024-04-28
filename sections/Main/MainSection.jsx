// pages/main.jsx
import React from 'react'
import { MyStyledContainer, MyMainStyledCard, MyStyledTitle, MyStyledBelowTitle } from './elements';


const MainSection = ({ ...props }) => {
  return (
    <>
      <MyStyledContainer {...props}>
        <MyStyledTitle>
          Managed agency selection
        </MyStyledTitle>
        <MyStyledBelowTitle>
          Strengthen your onboarding process
        </MyStyledBelowTitle>
        <MyMainStyledCard {...props} />
      </MyStyledContainer>


    </>
  );
};

export default MainSection;