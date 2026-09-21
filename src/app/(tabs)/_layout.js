import { Tabs } from "expo-router"
import FontAwesome from '@expo/vector-icons/FontAwesome'
import { AntDesign } from "@expo/vector-icons"

export default function TabsLayout() {
    return (
        <Tabs screenOptions={{
            // Mais opções de configuração podem ser adicionadas aqui
            // https://reactnavigation.org/docs/bottom-tab-navigator#options
            headerShown: false,
            tabBarActiveTintColor: "#f36715",
            tabBarInactiveTintColor: "#c2c2c2",
            tabBarIconStyle: { marginBottom: -3 },
        }}>
            <Tabs.Screen
                name="home"
                options={{
                    title: "Home",
                    tabBarIcon: ({ color }) => (
                        <FontAwesome name="home" size={24} color={color} />
                    )
                }}
            />

            < Tabs.Screen
                name="produtos"
                options={{
                    title: "Produtos",
                    tabBarIcon: ({ color }) => (
                        <FontAwesome name="product" size={24} color={color} />
                    )
                }}
            />

            <Tabs.Screen
                name="contato"
                options={{
                    title: "Contatos",
                    tabBarIcon: ({ color }) => (
                        <AntDesign name="contacts" size={24} color={color} />
                    )
                }}
            />

            <Tabs.Screen
                name="profile"
                options={{
                    title: "Perfil",
                    tabBarIcon: ({ color }) => (
                        <FontAwesome name="user" size={24} color={color} />
                    )
                }}
            />
        </Tabs>
    )
}