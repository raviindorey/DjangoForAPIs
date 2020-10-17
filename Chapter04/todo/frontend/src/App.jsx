import React, { Component } from 'react';

const list = [
  {
    id: 1,
    title: 'Post 1',
    body:
      '1st Post.\r\n\r\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget laoreet mauris. Aliquam erat volutpat. Vivamus semper tincidunt magna quis eleifend. Praesent congue condimentum ligula, id dictum enim porttitor nec. Vestibulum a volutpat ante, eu sodales nulla. Cras vestibulum, augue vel feugiat varius, enim tellus lacinia diam, ac cursus libero nisl quis metus. Etiam consequat ut orci non placerat. Donec vulputate tortor in quam condimentum, varius faucibus lorem euismod. Sed condimentum tempor metus ut varius. Duis et blandit ex. Phasellus et eros eget quam tempus porta eu et nisl. Donec vitae interdum sapien. Pellentesque rhoncus interdum nunc. Maecenas vestibulum id ante vel eleifend. Fusce hendrerit interdum pretium.',
  },
  {
    id: 2,
    title: 'Post 2',
    body:
      'The Second post:\r\n\r\nCras interdum rutrum turpis, scelerisque viverra risus ultricies in. In lectus massa, mattis vitae dui at, auctor accumsan dolor. Mauris eget eros in lacus hendrerit convallis eget id enim. Integer luctus faucibus lorem, convallis auctor velit lacinia quis. Praesent eleifend cursus pretium. Aenean congue tincidunt tellus eu blandit. Nunc nec faucibus dui, vitae iaculis nunc.',
  },
  {
    id: 3,
    title: 'Post 3',
    body:
      'The Third one my brothers:\r\n\r\nPellentesque sem urna, volutpat nec dignissim sit amet, varius et felis. Aenean eu ligula id ipsum commodo bibendum. Aenean tempus justo justo, non efficitur magna rutrum nec. Ut non rutrum turpis. Suspendisse auctor a risus ut venenatis. Mauris non leo sit amet justo pharetra accumsan non egestas velit. Suspendisse id lacus malesuada, cursus orci ut, rutrum turpis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc ex libero, pulvinar a nisl ut, viverra dictum quam. Vivamus sodales, erat id consectetur fermentum, orci justo interdum massa, vel vulputate ante felis ut dolor. Nulla sagittis ante vel neque rutrum condimentum. Morbi eget mauris elit. Maecenas interdum non leo ut convallis. Cras accumsan ullamcorper tellus, volutpat porta mi.',
  },
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { list };
  }

  render() {
    return (
      <div>
        {this.state.list.map((item) => (
          <div key={item.id}>
            <h1>{item.title}</h1>
            <p>{item.body}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
