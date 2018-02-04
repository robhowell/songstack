import React from 'react';
import Dropbox from 'dropbox';
import { Button, Message, Segment } from 'semantic-ui-react';

const CLIENT_ID = 'mock-key';

const Login = () => {
  const dropboxClient = new Dropbox.Dropbox({ clientId: CLIENT_ID });
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
