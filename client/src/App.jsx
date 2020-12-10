import React from 'react';
import Theme from './styled/Theme';
import Routes from './routes/Routes';
import AuthProvider from './context/AuthProvider';

const App = () => (
  <Theme>
    <AuthProvider>
      <Routes />
    </AuthProvider>
  </Theme>
);

export default App;
