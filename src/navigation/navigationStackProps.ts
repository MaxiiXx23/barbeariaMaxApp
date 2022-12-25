import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type RootStackParamList = {
    SignUp: undefined;
    SignIn: {
      title: string;
      content: string;
    }
    Welcome: undefined;
};
type NavigationProps = NativeStackNavigationProp<RootStackParamList, "SignUp">;
export { RootStackParamList, NavigationProps };