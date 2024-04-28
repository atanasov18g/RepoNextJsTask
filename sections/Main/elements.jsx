import styled from "styled-components";
import MySectionContainer from "../../components/Containers/MySectionContainer/MySectionContainer";
import { SectionHeader, SectionBelowHeader } from "../../components/MyTypography";
import Card from "../../collections/Card/Card"

export const MyStyledContainer = styled(({ ...props }) => <MySectionContainer {...props} />)`
`;

export const MyMainStyledCard = styled(({ ...props }) => <Card {...props} />)`
`;

export const MyStyledTitle = styled((props) => <SectionHeader {...props} />)`
  font-family: Poppins;
  margin: 0;
  color: black;
`;
export const MyStyledBelowTitle = styled((props) => <SectionBelowHeader {...props} />)`
  font-family: Poppins;
  margin: 0;
  color: black;
`;