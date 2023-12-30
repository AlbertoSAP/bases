
interface AuthState {
    validando: boolean;
    token: string | null;
    userName: string;
    name: string;
  }

  type LoginPayload ={
    userName: string;
    name: string;
  }
  
  type AuthAction = 
  | { type: "logout" } 
  | { type : "login", payload: LoginPayload};

  const authReducer = (state: AuthState, action: AuthAction): AuthState => {
    switch (action.type) {
      case "logout":
        return {
          validando: false,
          token: null,
          userName: "",
          name: "",
        };
  
        case 'login':
          const {name, userName  } = action.payload;
          return{
            validando: false,
          token:'Abcde12345',
          name,
          userName
          }
          

      default:
        return state;
    }
    return {} as AuthState;
  };
  
export default authReducer