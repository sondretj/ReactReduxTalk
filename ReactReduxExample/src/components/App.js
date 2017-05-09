import React, {
  Component,
} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions';
import Team from './Team';
import Member from './Member';


const mapStateToProps = state => {
  return { ...state };
}
const mapDispatchToProps = dispatch => {
  return { actions: bindActionCreators({ ...actions }, dispatch) };
}

class App extends Component {

  onAddTeam = () => {
    const { newTeam, teams } = this.props;
    if (!newTeam || !newTeam.name) {
      return;
    }
    this.props.actions.addTeam({ ...newTeam , id: teams.length + 1});
    this.props.actions.resetNewTeam();
  }

  onAddMember = () => {
    const { newMember, members } = this.props;
    if (!newMember || !newMember.name) {
      return;
    }
    this.props.actions.addMember({ ...newMember, id: members.length + 1 });
    this.props.actions.resetNewMember();
  }

  onDeleteMember = id => {
    this.props.actions.deleteMember(id);
  }

  onDeleteTeam = id => {
    this.props.actions.deleteTeam(id);
  }

  onNewTeamNameChange = e => {
    this.props.actions.newTeamNameChange(e.target.value)
  }

  onNewMemberNameChange = e => {
    this.props.actions.newMemberNameChange(e.target.value);
  }

  onNewMemberTeamChange = e => {
    this.props.actions.newMemberTeamChange(parseInt(e.target.value))
  }

  onMemberChange = member => {
    const { members } = this.props;
    const index = members.findIndex(m => m.id === member.id);
    if (index === -1) {
      return;
    }
    this.props.actions.memberChange(member);
  }

  render() {
    const { teams, members, newMember, newTeam } = this.props;
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
        {/*<div>
          <pre>
            {JSON.stringify(this.state, null, 4)}
          </pre>

        </div>*/}
      </div>
    );
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(App);
