import React, { useEffect, useState } from 'react'
import {
  View,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  Image,
  Text,
} from 'react-native'
import { useTranslation } from 'react-i18next'
import { useTheme } from '@/Hooks'
import Icon from '@/Assets/Icons'
import { heightPixel, normalize, widthPixel } from '@/utils'
import { Style } from './Style'
import { useSelector } from 'react-redux'
import { RootState } from '@/Store'
import { Record } from '@/Interfaces/city'
import { goBack, navigate } from '@/Navigators/utils'
import { Routes } from '@/utils/routes'
import { useGetDogsQuery } from '@/Services/city'
import { useDispatch } from 'react-redux'
import { setFavorite } from '@/Store/weather/weather'

const StartupContainer = ({ navigation, route }) => {
  const { Layout, Gutters, Fonts } = useTheme()

  const { t } = useTranslation()

  const dogsState = useSelector((state: RootState) => state.state)

  const dispatch = useDispatch()

  const { data, isLoading, isFetching } = useGetDogsQuery({})

  const headerLeft = () => {
    return (
      <TouchableOpacity
        onPress={goBack}
        style={[Layout.center, Gutters.regularLPadding, Gutters.smallTPadding]}
      >
        <Icon
          name="ChevronBack"
          width={widthPixel(20)}
          height={widthPixel(20)}
          viewBox="0 0 20 20"
        />
      </TouchableOpacity>
    )
  }

  const renderItems = (props: { item: string; index: number }) => {
    const { item, index } = props
    const isFavorite = dogsState.favoriteList.findIndex(el => el === item) > -1
    return (
      <View
        style={[
          Gutters.smallVPadding,
          Gutters.smallHPadding,
          Layout.alignItemsCenter,
        ]}
      >
        <Image style={[Style.image]} source={{ uri: item }} />
        <TouchableOpacity
          onPress={() => {
            dispatch(setFavorite(item))
          }}
          disabled={isFavorite}
          activeOpacity={0.8}
          style={[
            Style.btn,
            Gutters.smallHPadding,
            Layout.center,
            Gutters.smallTMargin,
          ]}
        >
          <Text style={[Fonts.textSmall, Style.favText]}>
            {isFavorite ? 'Added to Favorites' : 'Make Favorite'}
          </Text>
        </TouchableOpacity>
      </View>
    )
  }

  const renderItemSeperator = () => {
    return <View style={[Style.itemSeperator]} />
  }

  return (
    <SafeAreaView style={[Layout.fill]}>
      <View style={[Layout.fill, Gutters.smallHPadding, Style.container]}>
        <FlatList
          contentContainerStyle={[Gutters.regularTPadding]}
          data={dogsState.dogsData}
          renderItem={renderItems}
          ItemSeparatorComponent={renderItemSeperator}
        />
        {/* <ActivityIndicator size={'large'} style={[Gutters.largeVMargin]} />
        <Text style={Fonts.textCenter}>{t('welcome')}</Text> */}
      </View>
    </SafeAreaView>
  )
}

export default StartupContainer
