import { View, Text, TouchableOpacity, Image, ImageBackground, Dimensions } from 'react-native'
import React from 'react'
import tailwind from '../constants/tailwind'
import { ROUTES, COLORS } from '..'


const Welcome = ({ navigation }) => {
    return (
        <>
            <ImageBackground source={require("../../assets/wave.png")} style={{ height: Dimensions.get('window').height / 2, width: '100%' }}>
            </ImageBackground>

            <View className={`${tailwind.containerWrapper} bg-[${COLORS.brightGrey}] pt-0`}>
                <View className="justfy-center items-center" >
                    <Image source={require('../../assets/attendify-icon.png')} className="w-24 h-24" />
                </View>
                <View className={`justify-center items-center`}>
                    <Text className={`text-center font-bold mb-10 text-6xl`}>
                        Attendify
                    </Text>
                    <View className={`${tailwind.viewWrapper} w-11/12 `}>
                        <TouchableOpacity
                            className={`${tailwind.buttonBlue}`}
                            onPress={() => { navigation.navigate(ROUTES.SIGNIN) }}
                            style={{
                                shadowColor: '#000',
                                shadowOffset: {
                                    width: 0,
                                    height: 1,
                                },
                                shadowOpacity: 0.25,
                                shadowRadius: 4,
                                elevation: 5,
                            }}
                        >
                            <Text className={`${tailwind.buttonWhiteText}`}>Sign In</Text>
                        </TouchableOpacity>
                    </View>
                    <View className={`${tailwind.viewWrapper} w-11/12 mb-7`}>
                        <TouchableOpacity
                            className={`${tailwind.buttonWhite}`}
                            onPress={() => { navigation.navigate(ROUTES.SIGNUP) }}
                            style={{
                                shadowColor: '#000',
                                shadowOffset: {
                                    width: 0,
                                    height: 1,
                                },
                                shadowOpacity: 0.25,
                                shadowRadius: 4,
                                elevation: 5,
                            }}>
                            <Text className={`${tailwind.buttonBlueText}`} >Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                    {/* <TouchableOpacity className={``} onPress={() => Linking.openURL(`mailto:contact@attendify.com`)}>
                            <Text className={`text-center text-[${COLORS.primary}]`}>
                                Contact Us
                            </Text>
                        </TouchableOpacity> */}
                </View>
            </View>
        </>
    )
}

export default Welcome;
