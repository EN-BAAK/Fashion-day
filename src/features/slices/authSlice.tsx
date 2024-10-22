import { createSlice, PayloadAction, Slice } from "@reduxjs/toolkit";
import { AuthStateType, LoginType } from "../../misc/types";

const fetchStoredUser = sessionStorage.getItem("authUser");
const storedUser = fetchStoredUser ? JSON.parse(fetchStoredUser) : null;

const initialState: AuthStateType = {
  user: storedUser || {
    name: "",
    password: "",
    image: "",
    authUser: false
  }
}

export const authSlice: Slice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state: AuthStateType, action: PayloadAction<LoginType>) {
      const userId = action.payload
      const userValidation = /^[A-Za-z]{4,10}$/i.test(userId.name)
      const passwordValidation = /^(?=.*[0-9](?=.*[a-zA-Z])[a-zA-Z0-9!@#%$^&*]{4,10}$)/i.test(userId.password)

      state.user = { ...state.user, ...userId }

      if (!userValidation || !passwordValidation)
        state.user.authUser = false
      else {
        state.user.authUser = true
        const saveState = JSON.stringify(userId)
        sessionStorage.setItem("authUser", saveState)
      }
    },
    logout(state: AuthStateType) {
      state.user = {
        name: "",
        password: "",
        image: "",
        authUser: false
      }

      sessionStorage.clear()
    }
  }
})

export const { login, logout } = authSlice.actions
export default authSlice.reducer