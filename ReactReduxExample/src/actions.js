
export const ADD_TEAM = 'ADD_TEAM';
export const ADD_MEMBER = 'ADD_MEMBER';

export const DELETE_TEAM = 'DELETE_TEAM';
export const DELETE_MEMBER = 'DELETE_MEMBER';


export const NEW_MEMBER_NAME_CHANGE = 'NEW_MEMBER_NAME_CHANGE';
export const NEW_MEMBER_TEAM_CHANGE = 'NEW_MEMBER_TEAM_CHANGE';

export const NEW_TEAM_NAME_CHANGE = 'NEW_TEAM_NAME_CHANGE';

export const MEMBER_CHANGE = 'MEMBER_CHANGE';

export const RESET_NEW_MEMBER = 'RESET_NEW_MEMBER';

export const RESET_NEW_TEAM = 'RESET_NEW_TEAM';

export const newMemberNameChange = name => ({ type: NEW_MEMBER_NAME_CHANGE, name });

export const newMemberTeamChange = teamId => ({ type: NEW_MEMBER_TEAM_CHANGE, teamId });

export const deleteTeam = id => ({ type: DELETE_TEAM, id });

export const deleteMember = id => ({ type: DELETE_MEMBER, id });

export const addTeam = team => ({ type: ADD_TEAM, team });

export const addMember = member => ({ type: ADD_MEMBER, member });

export const memberChange = member => ({ type: MEMBER_CHANGE, member });

export const newTeamNameChange = name => ({ type: NEW_TEAM_NAME_CHANGE, name });

export const resetNewMember = () => ({ type: RESET_NEW_MEMBER });

export const resetNewTeam = () => ({ type: RESET_NEW_TEAM });
