import React from 'react';
import Dropbox from 'dropbox';
import { Button, Message, Segment } from 'semantic-ui-react';

const { REACT_APP_DROPBOX_APP_KEY } = process.env;

const Login = () => {
  const dropboxClient = new Dropbox.Dropbox({
    clientId: REACT_APP_DROPBOX_APP_KEY,
  });
  const authUrl = dropboxClient.getAuthenticationUrl(window.location.href);

  return (
    <Segment color="blue">
      <Message warning>
        <p>
          To access SongStack, you need to connect the app to your Dropbox
          account, please login now.
        </p>
      </Message>

      <Button
        primary
        onClick={() => {
          window.location.href = authUrl;
        }}
      >
        Login
      </Button>
    </Segment>
  );
};

export default Login;
