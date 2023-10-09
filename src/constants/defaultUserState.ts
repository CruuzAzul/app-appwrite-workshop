import {AccountState} from "@/types/AccountState.type";

export const defaultState: AccountState = {
  user: null,
  loading: true,
  error: null,
  logout: async () => {},
  register: async () => {},
  login: async () => {},
  socialLogin: async () => {},
};