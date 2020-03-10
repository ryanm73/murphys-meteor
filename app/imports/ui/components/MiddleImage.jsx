import React from 'react';
import { Container, Header, Menu, Dropdown, Icon, Image, Segment, Grid, Divider, List, Input, Button, Item } from 'semantic-ui-react';

export default class MiddleImage extends React.Component {

  render() {
    return (
        <div className='middleoverlay'>
          <Container>
            <Grid>
              <Grid.Row columns={2}>
                <Grid.Column style={{color:'white', marginTop:'10%'}}>
                  <Image src="http://murphyshawaii.com/media/2014/04/murphyshawaiilogo.png"/>
                </Grid.Column>
                <Grid.Column style={{color:'white', marginTop:'15%'}}>
                  A traditional downtown saloon and eatery located in the Honolulu <br/>
                  Financial District, just one block off the waterfront, Murphys has <br/>
                  been a haven for mariners, businessmen and locals since 1891.
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </div>
    );
  }
}