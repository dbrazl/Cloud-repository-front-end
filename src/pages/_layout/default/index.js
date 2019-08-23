import React from 'react';
import PropTypes from 'prop-types';

import { useSelector } from 'react-redux';

import { Wrapper } from './styles';
import UploadList from '~/components/UploadList';
import Header from '~/components/Header';

export default function DefaultLayout({ children }) {
  const uploaded = useSelector(state => state.file.uploaded);

  return (
    <Wrapper>
      <Header />
      {children}
      {!!uploaded.length && <UploadList />}
    </Wrapper>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
