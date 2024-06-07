import { View } from "react-native"
import * as Progress from 'react-native-progress';
import { ConteinerBarraDeProgresso, ConteinerParaBarra } from "../Perfil/Style";

export const Eduardo = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>


            {/* <Progress.Pie progress={0.8} size={50} />

            <Progress.Circle size={30} indeterminate={true} />  

            <Progress.CircleSnail color={['red', 'green', 'blue']}/> */}

            <ConteinerParaBarra>

                <ConteinerBarraDeProgresso
                    progress={0.8} width={200} borderRadius={100}
                >
                    
                    {/* <Progress.Bar progress={0.8} width={200} borderRadius={100} /> */}

                </ConteinerBarraDeProgresso>


            </ConteinerParaBarra>


        </View>
    )
}
