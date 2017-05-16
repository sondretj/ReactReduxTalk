import React, {
  Component,
  PropTypes,
} from 'react';

export default class Member extends Component {

  static propTypes = {
    member: PropTypes.object,
    teams: PropTypes.array,
    onChange: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
  }

  render() {
    const { member = {}, teams = [] } = this.props;
    return (
      <li>
        Member
      </li>
    );
  }

}
