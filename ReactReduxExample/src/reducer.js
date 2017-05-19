import * as constants from './actions';

export const NEW_MEMBER_TEAM_CHANGE = 'NEW_MEMBER_TEAM_CHANGE';

const initialState = {
  teams: [],
  members: [],
  newTeam: {},
  newMember: {}
};

export default function todos(state = initialState, action) {
  switch (action.type) {
    case constants.NEW_MEMBER_NAME_CHANGE: {
      const newMember = { ...state.newMember, name: action.name };
      return {
        ...state,
        newMember
      }
    }

    case constants.NEW_MEMBER_TEAM_CHANGE: {
      const newMember = { ...state.newMember, teamId: action.teamId };
      return {
        ...state,
        newMember
      }
    }

    case constants.NEW_TEAM_NAME_CHANGE: {
      const newTeam = { ...state.newTeam, name: action.name };
      return {
        ...state,
        newTeam
      }
    }

    case constants.MEMBER_CHANGE: {
      const members = state.members.slice().map(member => {
        if (member.id === action.member.id) {
          return action.member;
        }
        return member;
      });
      return {
        ...state,
        members
      }
    }

    case constants.DELETE_MEMBER: {
      const members = state.members.filter(member => member.id !== action.id);
      return {
        ...state,
        members
      }
    }

    case constants.DELETE_TEAM: {
      const members = state.members.map(member => {
        if (member.teamId === action.id) {
          return { ...member, teamId: 0 };
        }
        return member;
      });
      const teams = state.teams.filter(team => team.id !== action.id);
      return {
        ...state,
        teams,
        members
      }
    }

    case constants.ADD_TEAM: {
      const teams = state.teams.slice();
      teams.push(action.team);
      return {
        ...state,
        teams
      }
    }

    case constants.ADD_MEMBER: {
      const members = state.members.slice();
      members.push(action.member);
      return {
        ...state,
        members
      }
    }

    case constants.RESET_NEW_TEAM: {
      return {
        ...state,
        newTeam: {}
      }
    }

    case constants.RESET_NEW_MEMBER: {
      return {
        ...state,
        newMember: {}
      }
    }

    default:
      return state
  }
}
