import { forwardRef } from "react";
import styled from "styled-components";

export const StyledSectionHeader = styled(forwardRef((props, ref) => <h1 {...props} ref={ref} />))`
font-family: Poppins;
font-size: 2.5rem;
line-height: 4.375rem;
font-weight: 600;
text-align: center;
`;

export const StyledSectionBelowHeader = styled(forwardRef((props, ref) => <h5 {...props} ref={ref} />))`
font-family: Poppins;
font-size: 1.25rem;
line-height: 1.875rem;
font-weight: 300;
text-align: center;
`;

StyledSectionHeader.displayName = 'StyledSectionHeader';
StyledSectionBelowHeader.displayName = 'StyledSectionBelowHeader';

