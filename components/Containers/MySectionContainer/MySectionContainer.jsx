import { MyStyledSectionContainer } from "./elements";
import Image from 'next/image'
export default function MySectionContainer({ ...props }) {
  return (
    <>
      <MyStyledSectionContainer {...props}>
      </MyStyledSectionContainer>
    </>
  )
};

