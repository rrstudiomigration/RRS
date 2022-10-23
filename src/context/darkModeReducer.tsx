enum ThemeModeActionType {
  LIGHT = 'LIGHT',
  DARK = 'DARK',
}

interface ThemeAction {
  type: ThemeModeActionType;
}

interface ThemeState {
  darkMode: boolean;
}

const DarkModeReducer = (state: ThemeState, action: ThemeAction) => {
  const { type } = action;
  switch (type) {
    case ThemeModeActionType.LIGHT: {
      return {
        ...state,
        darkMode: false,
      };
    }
    case ThemeModeActionType.DARK: {
      return {
        ...state,
        darkMode: true,
      };
    }
    default:
      return state;
  }
};

export default DarkModeReducer;
