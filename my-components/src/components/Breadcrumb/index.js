import styled from '@emotion/styled';
import React from 'react';
import BreadcrumbItem from './BreadcrumbItem.js';

const BreadcrumbContainer = styled.nav`
  display: inline-block;
`;

const Breadcrumb = ({ children, ...props }) => {
  const items = React.Children.toArray(children)
    .filter(element => {
      if (
        React.isValidElement(element) &&
        element.props._type === 'BreadcrumbItem'
      ) {
        return true;
      } else {
        console.warn('Only accepts Breadcrumb.Item as children');
        return false;
      }
    })
    .map((element, index, elements) => {
      return React.cloneElement(element, {
        ...element.props,
        active: index === elements.length - 1,
      });
    });
  return <BreadcrumbContainer {...props}>{items}</BreadcrumbContainer>;
};

Breadcrumb.Item = BreadcrumbItem;

export default Breadcrumb;
