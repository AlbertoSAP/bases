
interface AuthState {
    validando: boolean;
    token: string | null;
    userName: string;
    name: string;
  }
  
  type AuthAction = { type: "logout" };

  const authReducer = (state: AuthState, action: AuthAction): AuthState => {
    switch (action.type) {
      case "logout":
        return {
          validando: false,
          token: null,
          userName: "",
          name: "",
        };
  
      default:
        return state;
    }
    return {} as AuthState;
  };
  
export default authReducer