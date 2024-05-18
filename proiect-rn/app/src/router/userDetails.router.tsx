import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Text } from 'react-native'
import DetailsScreen from '../screens/game/Details.screen';

const UserDetailsStack = createNativeStackNavigator()

const userDetailsRoutes = (
    <UserDetailsStack.Navigator>
        <UserDetailsStack.Screen name='USER_DETAILS' component={DetailsScreen} options={{
            headerTitle: (props) => <Text {...props}>User Details</Text>
        }}/>
    </UserDetailsStack.Navigator>
)

export default userDetailsRoutes;