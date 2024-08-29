import { Text, View } from "react-native";

export function Greeting() {
    return (
        <View style={{marginTop: 30}}>
            <Text style={{fontFamily: 'Inter_700Bold', fontSize: 36}}>Olá, Vinícius</Text>
            <Text style={{fontFamily: 'Inter_400Regular', fontSize: 22}}>Tenha um excelente dia!</Text>
        </View>
    )
}
