import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs'
import Home from '../screens/HomePage';
import List from '../screens/DonorList';
import Donate from '../screens/Donate'

export const titanic = createBottomTabNavigator({
  House: Home,
  Money: Donate,
  TB: List,
})