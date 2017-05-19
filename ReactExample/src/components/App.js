import React, {
  Component,
  PropTypes,
} from 'react';
import Team from './Team';
import Member from './Member';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      teams: [],
      members: [],
      newTeam: {},
      newMember: {}
    };
  }

  onAddTeam = () => {
    const { newTeam } = this.state;
    if (!newTeam || !newTeam.name) {
      return;
    }
    let teams = this.state.teams.slice();
    teams.push({ ...newTeam , id: teams.length + 1});
    this.setState({ teams, newTeam: {} });
  }

  onAddMember = () => {
    const { newMember } = this.state;
    if (!newMember || !newMember.name) {
      return;
    }
    const members = this.state.members.slice();
    members.push({ ...newMember, id: members.length + 1 });
    this.setState({ members, newMember: {} });
  }

  onDeleteMember = id => {
    const members= this.state.members.filter(member => member.id !== id);
    this.setState({ members });
  }

  onDeleteTeam = id => {
    const members = this.state.members.map(member => {
      if (member.teamId === id) {
        return {...member, teamId: 0 }
      }
      return member
    })
    const teams = this.state.teams.filter(team => team.id !== id);

    this.setState({ teams, members });
  }

  onNewTeamNameChange = e => {
    this.setState({
      newTeam: { name: e.target.value },
    });
  }

  onNewMemberNameChange = e => {
    const { newMember } = this.state;
    this.setState({ newMember: { ...newMember, name: e.target.value } });
  }

  onNewMemberTeamChange = e => {
    const { newMember } = this.state;
    this.setState({ newMember: { ...newMember, teamId: parseInt(e.target.value) } });
  }

  onMemberChange = member => {
    console.log(member);
    const index = this.state.members.findIndex(m => m.id === member.id);
    if (index === -1) {
      return;
    }
    const members = this.state.members.slice();
    members[index] = member;
    this.setState({ members });
  }

  render() {
    const { teams, members, newMember, newTeam } = this.state;
    const unassignedMembers = members.filter(member => !member.teamId);
    const unassignedMarkup = unassignedMembers.length > 0 ?
      unassignedMembers.map(member =>
        <Member
          key={`member_id_${member.id}`}
          onDelete={this.onDeleteMember}
          onChange={this.onMemberChange}
          teams={teams}
          member={member}/>
      ) : 'No unassigned members'
    return (
      <div>
        <h1>Team organizer</h1>
          <div className="utlis">
            <div className="add-team">
              <input value={newTeam.name || ''} onChange={this.onNewTeamNameChange} placeholder="Team name"/>
              <button onClick={this.onAddTeam}>Add team</button>
            </div>
            <div className="add-member">
              <input value={newMember.name || ''} onChange={this.onNewMemberNameChange} placeholder="Member name"/>
              <select value={newMember.teamId} onChange={this.onNewMemberTeamChange} name="select-team">
                <option>No team</option>
                {teams.map(team => <option key={`option_team_id_${team.id}`} value={team.id}>{team.name}</option> )}
              </select>
              <button onClick={this.onAddMember}>Add member</button>
            </div>
          </div>
          <div className="unassigned-team">
            <h3>Unassigned members</h3>
            <ul>
              {unassignedMarkup}
            </ul>
          </div>
        <div className="teams">
          <h2>Teams</h2>
          {teams.map(team =>
            <Team
              key={`team_id_${team.id}`}
              onMemberChange={this.onMemberChange}
              onDeleteMember={this.onDeleteMember}
              onDelete={this.onDeleteTeam}
              members={members.filter(member => member.teamId === team.id)}
              team={team}
              teams={teams}
            />
          )}
        </div>
      </div>
    );
  }

}
