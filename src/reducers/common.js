import {
  UPDATE_SETTINGS,
  UPDATE_PROFILE,
  UPDATE_TAB,
  LOADING,
  MESSAGE_HANDLER,
  SHOW_SETTINGS,
  ZOOM_TO,
  RESET_SETTINGS
} from 'actions/types'
import { settingsInit } from 'Controls/settings-options'

const initialState = {
  activeTab: 0,
  showSettings: true,
  coordinates: [],
  loading: false,
  message: {
    receivedAt: 0,
    type: null,
    icon: null,
    topic: null,
    description: null
  },
  profile: 'bicycle',
  settings: { ...settingsInit }
}

export const common = (state = initialState, action) => {
  switch (action.type) {
    case MESSAGE_HANDLER: {
      return {
        ...state,
        message: action.payload
      }
    }
    case LOADING: {
      return {
        ...state,
        loading: action.payload
      }
    }

    case ZOOM_TO: {
      return {
        ...state,
        coordinates: action.payload
      }
    }

    case SHOW_SETTINGS: {
      return {
        ...state,
        showSettings: !state.showSettings
      }
    }

    case UPDATE_SETTINGS: {
      const { name, value } = action.payload
      return {
        ...state,
        settings: {
          ...state.settings,
          [name]: value
        }
      }
    }

    case RESET_SETTINGS: {
      return {
        ...state,
        settings: {
          ...settingsInit
        }
      }
    }

    case UPDATE_TAB: {
      const { activeTab } = action.payload
      return {
        ...state,
        activeTab
      }
    }

    case UPDATE_PROFILE: {
      const { profile } = action.payload
      return {
        ...state,
        profile
      }
    }

    default: {
      return state
    }
  }
}
