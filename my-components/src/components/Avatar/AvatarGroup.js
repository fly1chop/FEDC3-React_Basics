import React from 'react';
import Avatar from './index.js';

const AvatarGroup = ({ children, shape = 'circle', size = 70, ...props }) => {
  const avatars = React.Children.toArray(children)
    .filter(element => {
      if (React.isValidElement(element) && element.props._type === 'Avatar') {
        return true;
      }

      console.warn("'PropType invalid: Only accepts 'Avatar' as children");
      return false;
    })
    .map((avatar, index, avatars) => {
      return React.cloneElement(avatar, {
        ...avatar.props,
        size,
        shape,
        style: {
          ...avatar.props.style,
          marginLeft: -size / 5,
          zIndex: avatars.length - index,
        },
      });
    });

  return <div style={{ paddingLeft: size / 5 }}>{avatars}</div>;
};

export default AvatarGroup;
