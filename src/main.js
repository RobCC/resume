import React from 'react';
import ReactDOM from 'react-dom';
import InfoPanel from 'Components/InfoPanel';
import './Components/App.scss';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser, faIdCard } from '@fortawesome/free-solid-svg-icons';

library.add(faUser, faIdCard);


const root = document.getElementById('root');

ReactDOM.render(<InfoPanel>Hello World</InfoPanel>, root)
