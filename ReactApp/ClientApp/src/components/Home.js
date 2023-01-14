import React, { Component } from 'react';
import { UncontrolledCarousel } from 'reactstrap';

export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
        <div>
            <UncontrolledCarousel
                items={[
                    {
                        altText: '',
                        caption: '',
                        key: 1,
                        src: 'https://picsum.photos/id/123/1200/600'
                    },
                    {
                        altText: '',
                        caption: '',
                        key: 2,
                        src: 'https://picsum.photos/id/456/1200/600'
                    },
                    {
                        altText: '',
                        caption: '',
                        key: 3,
                        src: 'https://picsum.photos/id/678/1200/600'
                    }
                ]}
            />
      </div>
    );
  }
}
