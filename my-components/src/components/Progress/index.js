import styled from '@emotion/styled';

const ProgressContainer = styled.div`
  position: relative;
  width: 100%;
  height: ${({ height }) => (height ? `${height}px` : '16px')};
`;

const Rail = styled.div`
  position: absolute;
  top: 6px;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 2px;
  background-color: #aaa;
`;

const Track = styled.div`
  position: absolute;
  top: 6px;
  left: 0;
  width: 0;
  height: 100%;
  border-radius: 2px;
  background-color: #44b;
  background-size: 50px 50px;
  background-image: linear-gradient(
    45deg,
    rgba(255, 255, 255, 0.25) 25%,
    transparent 25%,
    transparent 50%,
    rgba(255, 255, 255, 0.25) 50%,
    rgba(255, 255, 255, 0.25) 75%,
    transparent 75%,
    transparent 100%
  );
  animation: move 1000ms linear infinite;
  transition: width 100ms linear;

  @keyframes move {
    from {
      background-position: 0 0;
    }
    to {
      background-position: 50px 0;
    }
  }
`;

const Progress = ({ value, height, ...props }) => {
  return (
    <ProgressContainer {...props} height={height}>
      <Rail />
      <Track style={{ width: `${value}%` }} />
    </ProgressContainer>
  );
};

export default Progress;
