import React from 'react';
import { Grid, Image, Segment } from 'semantic-ui-react';

const Main = () => {
  return (
    <Segment>
      <Grid>
        <Grid.Row>
          <Grid.Column width={12}>
            <Image
              src="https://placehold.it/800x400?text=IMAGE"
              rounded
              fluid
              style={{ paddingLeft: '0.5em' }}
            />
          </Grid.Column>
          <Grid.Column width={4}></Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
};

export default Main;
