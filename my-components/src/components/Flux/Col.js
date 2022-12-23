import styled from '@emotion/styled';
import { useMemo } from 'react';
import { useFlux } from './FluxProvider.js';

const StyledCol = styled.div`
  max-width: 100%;
  box-sizing: border-box;

  width: ${({ span }) => span && `${(span / 12) * 100}%`};
  margin-left: ${({ offset }) => offset && `${(offset / 12) * 100}%`};
`;

const Col = ({ children, span, offset, ...props }) => {
  const { gutter } = useFlux();
  const gutterStyle = useMemo(() => {
    if (Array.isArray(gutter)) {
      const rowGap = gutter[0];
      const colGap = gutter[1];
      return {
        paddingTop: `${rowGap / 2}px`,
        paddingBottom: `${rowGap / 2}px`,
        paddingLeft: `${colGap / 2}px`,
        paddingRight: `${colGap / 2}px`,
      };
    } else {
      return {
        paddingLeft: `${gutter / 2}px`,
        paddingRight: `${gutter / 2}px`,
      };
    }
  }, [gutter]);
  return (
    <StyledCol
      {...props}
      span={span}
      offset={offset}
      style={{ ...props.style, ...gutterStyle }}
    >
      {children}
    </StyledCol>
  );
};

export default Col;
