import { useState, useEffect, useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/Login_Cad/login';
import DrawerRoutes from './drawer.routes';
import { UserContext } from '../../contexts/userContext';


const Stack = createStackNavigator();

export default function Routes() {
  // const [isAuthenticated, setIsAuthenticated] = useState(false);
  const { pacienteInfo } = useContext(UserContext);
  // const { login_paciente, error} = useContext(UserContext)
  
  // useEffect(() => {
  //   if (pacienteInfo) {
  //     setIsAuthenticated(true);
  //   } else {
  //     setIsAuthenticated(false);
  //   }
  // }, [pacienteInfo]);
  // const handleLoginSuccess = () => {
  //   setIsAuthenticated(true); // Define como autenticado após login
  // };  

  return ( 
    <Stack.Navigator>
      {pacienteInfo ? (
        <Stack.Screen 
        name="App" 
        component={DrawerRoutes} 
        options={{ headerShown: false }} 
        />
        ) : (
        <Stack.Screen 
          name="Login" 
          options={{ headerShown: false }} 
          component={Login}
          />           
        )}
          
          {/* <Stack.Screen name="Cadastro" component={Cadastro} options={{ headerShown: false }} /> */}
          
    </Stack.Navigator>
  );
}

