import React, {
  Component,
  PropTypes,
} from 'react';
import Team from './Team';
import Member from './Member';

export default class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Team organizer</h1>
      </div>
    );
  }

}
