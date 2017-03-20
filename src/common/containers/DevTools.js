import React from 'react';
import { createDevTools } from 'redux-devtools';

import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';

const monitor = (
  <DockMonitor
    toggleVisibilityKey="ctrl-y"
    changePositionKey="ctrl-m"
    defaultIsVisible={false}
  >
    <LogMonitor />
  </DockMonitor>
);

export default createDevTools(monitor);
