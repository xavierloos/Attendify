import { NavigationContainer } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { firebase } from './config';
// Navigator
import WelcomeStackNavigator from './src/navigations/AuthNavigator';
//import MenuDrawerNavigator from './src/navigations/MenuDrawerNavigator'; 
import 'react-native-gesture-handler';
import { checkConnection, getPermission } from './functions';
import { Offline } from './src/screens/Offline';
import MenuDrawerNavigator from './src/navigations/MenuDrawerNavigator';
import { LogBox } from 'react-native';
import BottomTabNavigator from './src/navigations/BottomNavigator';
import BottomTabNavigatorUser from './src/navigations/BottomNavigatorUser';

LogBox.ignoreAllLogs()

export default function App() {

  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  const [connection, setConnection] = useState(false)

  function onAuthStateChange(user) {
    setUser(user);
    getPermission(firebase.auth().currentUser?.email).then(res => setPermission(res))
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChange);
    return subscriber;
  }, [])

  const [permission, setPermission] = useState()

  // useEffect(() => {
  //   getPermission(firebase.auth().currentUser?.email).then(res => setPermission(res))
  // }, [permission])

  useEffect(() => {
    checkConnection().then(res => {
      setConnection(res)
    })
  }, [])

  if (initializing) return null;

  return (
    connection ? (
      <NavigationContainer>
        {(user && (permission == 'Admin' || permission == 'Super Admin')) ? <BottomTabNavigator /> : (user && (permission == 'Associate')) ? <BottomTabNavigatorUser /> : <WelcomeStackNavigator />}
      </NavigationContainer>
    ) : (<Offline onCheck={checkConnection} />)
  )

}

