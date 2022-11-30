import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground } from 'react-native';
import { useNavigation  } from '@react-navigation/native';
import React, { useEffect } from 'react';
import api from '../../api';

export default function CharactersList() {
    const navigation = useNavigation()


    const [character, setCharacter] = React.useState([])
    const [infoOn, setInfoOn] = React.useState(false)

    useEffect(() => {
        async function loadCharacters() {
            const response = await api.get("/character", {

            });
            setCharacter(response.data.results);
        }
        loadCharacters()
    }, [character])

    // function infosChar() {
    //     if (infoOn == true) {
    //         setInfoOn(false)
    //     } else {
    //         setInfoOn(true)
    //     }
    // }

    function handlePress(){
        // infosChar()
        navigation.navigate('CharacterInfo', `${character.id}`)

    }


    return (
        <View>
            {
                character.map((characters) => {
                    return (
                        <View key={characters.id}>
                            <View>
                                <Text style={styles.nome}>{characters.name}</Text>
                            </View>
                            <View>
                                {/* { infoOn ? null : */}
                                    <TouchableOpacity onPress={() => handlePress()}>
                                        <ImageBackground style={styles.image} source={{ uri: `${characters.image}` }}>
                                        </ImageBackground>
                                    </TouchableOpacity>
                                {/* }
                                { infoOn ?  */}
                                {/* <View>
                                    <TouchableOpacity onPress={() => handlePress()}>
                                        <ImageBackground style={styles.image} source={{ uri: `${characters.image}` }}>
                                        </ImageBackground>
                                    </TouchableOpacity>
                                    <Text>{characters.status}</Text>
                                    <Text>{characters.species}</Text>
                                    <Text>{characters.gender}</Text>
                                </View> : null }  */}
                            </View>
                        </View>
                    )
                })
            }
        </View>
    );
}

const styles = StyleSheet.create({
    nome: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    image: {
        height: 150,
        width: 150,
        resizeMode: 'stretch',
    }
});
