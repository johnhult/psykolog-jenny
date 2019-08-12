import React from 'react';
import PropTypes from 'prop-types';

import WavesStyled from './WavesStyled';

const Waves = props => <WavesStyled {...props} src="/assets/gfx/waves.svg"></WavesStyled>;

Waves.propTypes = {};

Waves.defaultProps = {};

export default Waves;
