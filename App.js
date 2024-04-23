import {View,Text, Image, ImageBackground, Button, ActivityIndicator, Alert} from "react-native";
const logoImage = require("./assets/adaptive-icon.png")

//IMAGE VIEW, TEXT VIEW
// export default function App(){
//     return (
//     <View style={{flex:1, backgroundColor: "pink", padding:60}}>
//     <ImageBackground source={logoImage} style={{flex:1}}>
//       <Text> IMAGE TEXT</Text>
//     </ImageBackground>
//     </View>
//   );
// }

//Button 
// export default function App(){
//   return (
//     <View style={{flex:1, backgroundColor:"pink", padding:60}}>
//   <Button title="Hello"
//     onPress={()=> console.log("Vanakkam thala")}
//   />
//     </View>  
// );
// }

//App indicator
// export default function App(){
//   return(
//     <View style={{flex:1, backgroundColor:"white", padding:60}}>
//       <ActivityIndicator size={"large"}color={"red"}></ActivityIndicator>
//     </View>
//   )
// }

export default function App(){
  return(
    <View style={{flex:1, backgroundColor:"pink", padding:60}}>
    <Button title="Alert" onPress={()=> Alert.alert("pODA dEI! pODA")}/>
    </View>
  )
}