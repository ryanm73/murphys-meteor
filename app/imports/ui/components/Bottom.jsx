import React from 'react';
import { Container, Header, Menu, Dropdown, Icon, Image, Segment, Grid, Divider, List, Input, Button, Item } from 'semantic-ui-react';

export default class Bottom extends React.Component {

  render() {
    return (
        <div className='footer'>
          <Container>
            <Grid>
              <Grid.Row columns={3}>
                <Grid.Column style={{color:'white'}}>
                  <Item>
                    Lunch
                    <hr/>
                    Monday - Friday: 11:00am - 2:30pm <br/>
                    Saturday - Sunday: Not open for lunch
                  </Item>
                </Grid.Column>
                <Grid.Column style={{color:'white'}}>
                  Bar
                  <hr/>
                  Monday - Friday from 11:00am <br/>
                  Saturday - Sunday from 4:00pm
                </Grid.Column>
                <Grid.Column style={{color:'white'}}>
                  Dinner
                  <hr/>
                  Monday - Saturday 5:30pm - 10:00pm <br/>
                  Sunday: 5:00pm - 9:00pm
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </div>
    );
  }
}