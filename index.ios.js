// @flow

import React from 'react';

import { AppRegistry } from 'react-native';

import Navigation from './src/navigation';

const renderApp = () => <Navigation />;

AppRegistry.registerComponent('DoThings', () => renderApp);
