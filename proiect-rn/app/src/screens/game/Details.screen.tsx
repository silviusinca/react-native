import { NavigationProp, useNavigation } from "@react-navigation/native"
import { useAuth } from "../../hooks/authContext"
import { Button, Text, View } from "react-native"
import { useUserDetails } from "../../hooks/userDetailsContext"
import UserDetails from "../../components/Details";

//   silviu123@silviu.silviu
// const DetailsScreen: React.FC = () => {
//     const { userDetails, getUserDetails } = useUserDetails();
//     return (
//       <View>
//         {userDetails ? (
//           <>
//             <Text>Email: {userDetails.email}</Text>
//           </>
//         ) : (
//           <Text>No user details available.</Text>
//         )}
//       </View>
//     );
//   };
  
// export default DetailsScreen

const DetailsScreen: React.FC = () => {
    const { userDetails } = useUserDetails();
  
    return (
      <UserDetails userDetails={userDetails} />
    ); 
  };
  
  export default DetailsScreen;
  