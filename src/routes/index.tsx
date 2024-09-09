import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { SignUp } from "../screens/sign-up";
import { Login } from "../screens/login";
import { Home } from "../screens/home";
import { CreateTask } from "../screens/create-task";
import { MyTasks } from "../screens/my-tasks";
import { useAuth } from "../hooks/use-auth";

interface RouteProps {
  userSignedId: string | null;
}

export const getInitialRouteName = (userSignedIn: boolean) => {
  return userSignedIn ? "Home" : "Login";
};

export function Routes() {
  const Stack = createNativeStackNavigator();

  const { accessToken } = useAuth()

  return (
    <Stack.Navigator
      initialRouteName={getInitialRouteName(!!accessToken)}
      screenOptions={{
        headerShown: false,
      }}
    >
      {accessToken ? (
        <>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="MyTasks" component={MyTasks} />
          <Stack.Screen name="CreateTask" component={CreateTask} />
        </>
      ) : (
        <>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="SignUp" component={SignUp} />
        </>
      )}
    </Stack.Navigator>
  );
}
