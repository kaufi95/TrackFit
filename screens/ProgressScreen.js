import React from 'react';

import ProgressView from '../components/ProgressView';

const ProgressScreen = (props) => {
  return <ProgressView workout={props.route.params.workout} />;
};

export default ProgressScreen;
