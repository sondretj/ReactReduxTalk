import React, {
  Component,
  PropTypes,
} from 'react';
import Member from './Member';

export default class Team extends Component {

  static propTypes = {
    team: PropTypes.object,
    onDelete: PropTypes.func.isRequired
  }

  render() {
    return (
      <div className="team">
        Team
      </div>
    );
  }

}
