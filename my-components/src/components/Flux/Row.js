import styled from '@emotion/styled';
import { useMemo } from 'react';
import FluxProvider from './FluxProvider.js';

const AlignToCSSValue = {
  top: 'flex-start',
  middle: 'center',
  bottom: 'flex-end',
};

const StyledRow = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  box-sizing: border-box;

  justify-content: ${({ justify }) => justify};
  align-content: ${({ align }) => AlignToCSSValue[align]};
`;

const Row = ({ children, justify, align, gutter, ...props }) => {
  const gutterStyle = useMemo(() => {
    if (Array.isArray(gutter)) {
      const rowGap = gutter[0];
      const colGap = gutter[1];
      return {
        marginTop: `-${colGap / 2}px`,
        marginBottom: `-${colGap / 2}px`,
        marginLeft: `-${rowGap / 2}px`,
        marginRight: `-${rowGap / 2}px`,
      };
    } else {
      return {
        marginLeft: `-${gutter / 2}px`,
        marginRight: `-${gutter / 2}px`,
      };
    }
  }, [gutter]);

  return (
    <FluxProvider gutter={gutter}>
      <StyledRow
        {...props}
        align={align}
        justify={justify}
        style={{ ...props.style, ...gutterStyle }}
      >
        {children}
      </StyledRow>
    </FluxProvider>
  );
};

export default Row;
