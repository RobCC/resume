import React from 'react';
import ReactDOM from 'react-dom';
import InfoPanel from 'components/InfoPanel/InfoPanel';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser, faIdCard } from '@fortawesome/free-solid-svg-icons';

import './components/app.scss';

library.add(faUser, faIdCard);

const root = document.getElementById('root');

ReactDOM.render(<InfoPanel />, root)
