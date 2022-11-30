import { View, Text, Button, SafeAreaView } from 'react-native'
import { useNavigation  } from '@react-navigation/native';
import React, { useEffect } from 'react';
import api from '../api'

export default function CharacterInfo(ident) {
    const [singleChar, setSingleChar] = React.useState([])
    const navigation = useNavigation();

    const indentifica = ( ident.route )

    useEffect(() => {

        async function loadCharacter() {
            const response = await api.get(`/character/${indentifica}`, {

            });
            setSingleChar(response.data);
        }
        loadCharacter()
    }, [])
    
    return (
        <SafeAreaView>
            <Text>{singleChar.name}</Text>
        </SafeAreaView>
    )
}