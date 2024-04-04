import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from "../internal/Home"
import Like from "../internal/Like"
import Search from "../internal/Search"
import Cart from "../internal/Cart"

const Tab = createBottomTabNavigator();

function Main() {
  return (
    <Tab.Navigator>
      <Tab.Screen name='Home' component={Home} />
      <Tab.Screen name="Like" component={Like} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Cart" component={Cart} options={{headerShown : false}}/>
    </Tab.Navigator>
  );
}
export default Main;