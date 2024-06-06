import { View } from "react-native"
import * as Progress from 'react-native-progress';

export const Eduardo = ({navigation}) => {
    return(
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Progress.Bar progress={0.8} width={200} />

            <Progress.Pie progress={0.8} size={50} />

            <Progress.Circle size={30} indeterminate={true} />  

            <Progress.CircleSnail color={['red', 'green', 'blue']}/>
        </View>
    )
}