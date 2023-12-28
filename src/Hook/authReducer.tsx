
interface AuthState {
    validando: boolean;
    token: string | null;
    userName: string;
    name: string;
  }

  type LoginPayload = {
    userName:string;
    name:string;
  }
  
type AuthAction = 
  | { type: "logout" }
  | { type: "login", payload:LoginPayload } 

  const authReducer = (state: AuthState, action: AuthAction): AuthState => {

    switch (action.type) {
      case "logout":
        return {
          validando: false,
          token: null,
          userName: "",
          name: "",
        };
        case "login":
        const {userName,name} = action.payload
        return {
        ...state,
        name,
        userName,
        token:'auth=true,token-test',
        validando:false
        }
  
      default:
        return state;
    }
    return {} as AuthState;
  };
  
export default authReducer