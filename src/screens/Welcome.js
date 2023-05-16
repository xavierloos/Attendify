import { View, Text, TouchableOpacity, Image, ImageBackground, Dimensions } from 'react-native'
import React from 'react'
import tailwind from '../constants/tailwind'
import { ROUTES, COLORS } from '..'


const Welcome = ({ navigation }) => {
    return (
        <>
            <ImageBackground source={require("../../assets/wave.png")} style={{ height: Dimensions.get('window').height / 1.9, width: '100%' }} />
            <View className={`${tailwind.containerWrapper} bg-[${COLORS.brightGrey}] pt-0`} style={{ height: Dimensions.get('window').height / 2, width: '100%' }} >
                <Image source={require('../../assets/attendify-icon.png')} className="w-24 h-24 d-flex mx-auto justfy-center items-center" />
                <View className={`justify-center items-center`}>
                    <View className={`${tailwind.viewWrapper} w-11/12 `}>
                        <Text className={`text-center font-bold my-5 text-5xl`}>
                            Attendify
                        </Text>
                        <TouchableOpacity
                            className={`${tailwind.buttonBlue} mb-5`}
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
