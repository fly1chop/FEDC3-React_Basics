import styled from '@emotion/styled';
import Text from '../Text/index.js';
import Icon from '../Icon/index.js';

const BreadcrumbItemContainer = styled.div`
  display: inline-flex;
  align-items: center;
`;

const Anchor = styled.a`
  color: inherit;
  text-decoration: none;
`;

const BreadcrumbItem = ({ children, href, active, _type, ...props }) => {
  return (
    <BreadcrumbItemContainer {...props}>
      <Anchor href={href}>
        <Text size={14} strong={active}>
          {children}
        </Text>
      </Anchor>
      {!active && <Icon name='chevron-right' size={22} strokeWidth={1} />}
    </BreadcrumbItemContainer>
  );
};

BreadcrumbItem.defaultProps = {
  _type: 'BreadcrumbItem',
};

BreadcrumbItem.propTypes = {
  _type: 'BreadcrumbItem',
};

export default BreadcrumbItem;
