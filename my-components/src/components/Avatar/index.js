import ImageComponent from '../Image/index.js';
import styled from '@emotion/styled';
import { useEffect, useState } from 'react';

const AvatarWrapper = styled.div`
  position: relative;
  display: inline-block;
  border: 1px solid #dadada;
  border-radius: ${({ shape }) =>
    shape === 'circle' ? '50%' : shape === 'round' ? '4px' : '0px'};
  background-color: #eee;
  overflow: hidden;

  > img {
    transition: opacity 0.2s ease-out;
  }
`;

const Avatar = ({
  lazy,
  threshold,
  src,
  size = 70,
  shape = 'circle', //rount, square
  placeholder,
  alt,
  mode = 'cover',
  ...props
}) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const image = new Image();
    image.src = src;
    image.onload = () => setLoaded(true);
  }, [src]);

  return (
    <AvatarWrapper {...props} shape={shape}>
      <ImageComponent
        block
        lazy={lazy}
        threshold={threshold}
        width={size}
        height={size}
        src={src}
        placeholder={placeholder}
        alt={alt}
        mode={mode}
        style={{ opacity: loaded ? 1 : 0 }}
      />
    </AvatarWrapper>
  );
};

export default Avatar;
