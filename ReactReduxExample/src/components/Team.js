import React, {
  Component,
} from 'react';
import PropTypes from 'prop-types';

import Member from './Member';

export default class Team extends Component {

  static propTypes = {
    team: PropTypes.object,
    onDelete: PropTypes.func.isRequired
  }

  onDelete = () => {
    const { team } = this.props;
    this.props.onDelete(team.id);
  }

  render() {
    const { team = {}, members = [], onMemberChange, onDeleteMember, ...rest } = this.props;
    const content = members.length > 0 ?
      members.map(member =>
        <Member {...rest}
          key={`member_id_${member.id}`}
          onDelete={onDeleteMember}
          onChange={onMemberChange}
          member={member}/>
      ) : 'No members';
    return (
      <div className="team">
        <h3>{team.name}</h3>
        <button onClick={this.onDelete}>Delete team</button>
        <h5>Members</h5>
        <ul>
          {content}
        </ul>
      </div>
    );
  }

}
