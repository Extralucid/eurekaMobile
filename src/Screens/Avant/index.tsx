import { View, Text, StatusBar, TouchableOpacity } from 'react-native'
import React from 'react'
import Images from '@constants/Images';
import { useTheme } from 'styled-components/native';
import McImage from '@components/McImage/McImage';
import McText from '@components/McText/McText';

const Avant = ({ navigation }) => {
    const theme = useTheme();
    return (
        <View>
            <StatusBar hidden={true} />
            <View style={{ flexDirection: 'row' }}>
                <McImage source={Images.color_bar} />
                <View style={{
                    marginTop: 44,
                    marginHorizontal: 26,
                    marginBottom: 53,
                    justifyContent: 'space-between',
                }}>
                    <View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <McText medium size={24} color={theme.colors.text1}>06:20 PM</McText>
                            <McImage source={Images.cloud} style={{ marginLeft: 20 }} />
                            <McText semi size={13} color={theme.colors.text1} style={{ marginLeft: 8 }}>34° C</McText>
                        </View>
                        <McText medium size={13} color={theme.colors.text3} style={{ marginTop: 7 }}>Mai 05.2025 | Mercredi</McText>
                    </View>
                    <View>
                        <McImage source={Images.banner} />
                        <McText secondary size={28} color={theme.colors.text1} style={{
                            marginTop: 16
                        }}>Ereuka</McText>
                        <View style={{
                            alignContent: 'space-between', width: 189, height: 110
                        }}>
                            <McText medium size={14} color={theme.colors.text3} style={{
                                marginTop: 16, lineHeight: 22
                            }}>Rejoignez-nous pour profiter d'offres d'assurances concurrentielles</McText>
                            <McText medium size={14} color={theme.colors.text3} style={{
                                marginTop: 16
                            }}>Rejoignez nous!</McText>
                        </View>
                    </View>
                    <View>
                        <TouchableOpacity style={{
                            height: 50,
                            width: 190,
                            borderRadius: 10,
                            backgroundColor: theme.colors.primary,
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                        onPress={()=>{
                            navigation.navigate('Login');
                        }}>
                            <McText semi size={16} color='#212330'>Se connecter</McText>
                            <McImage source={Images.right_arrow} style={{ marginLeft: 8 }} />
                        </TouchableOpacity>
                        <View style={{ alignItems: 'center', marginTop: 30, marginBottom: 8 }}>
                            <McText size={16} color={theme.colors.ext1}>Mode Invité</McText>
                            </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Avant