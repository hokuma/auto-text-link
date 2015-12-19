import React from 'react';
import ReactDOM from 'react-dom';
import AutoTextLink from '../src/auto_text_link';

ReactDOM.render(
  <AutoTextLink>{'This module repository: https://github.com/hokuma/auto-text-link'}</AutoTextLink>,
  document.getElementById('sample1')
);

ReactDOM.render(
  <AutoTextLink className='text-link' target='_blank'>{'Target blank test https://github.com/hokuma/auto-text-link <- Click'}</AutoTextLink>,
  document.getElementById('sample2')
);
