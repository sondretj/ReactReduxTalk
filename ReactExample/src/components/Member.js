import React, {
  Component,
  PropTypes,
} from 'react';

export default class Member extends Component {

  static defaultProps = {}

  static propTypes = {
    member: PropTypes.object,
    teams: PropTypes.array,
    onChange: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
  }

  onChange = e => {
    this.props.onChange({ ...this.props.member, teamId: parseInt(e.target.value) });
  }

  onDelete = () => {
    this.props.onDelete(this.props.member.id);
  }


  render() {
    const { member = {}, teams = [] } = this.props;
    return (
      <li>
        <span>{member.name}</span>
        <select value={member.teamId} onChange={this.onChange}>
          <option>No team</option>
          {teams.map(team => <option key={`member_option_team_id_${team.id}`} value={team.id}>{team.name}</option> )}
        </select>
        <button onClick={this.onDelete}>Delete</button>
      </li>
    );
  }

}
