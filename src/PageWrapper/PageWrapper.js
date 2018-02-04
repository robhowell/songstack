import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledPageWrapper = styled.div`
  margin: 20px auto;
  max-width: 960px;
`;

const PageWrapper = ({ children }) => (
  <StyledPageWrapper>{children}</StyledPageWrapper>
);

PageWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageWrapper;
