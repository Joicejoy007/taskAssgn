/*
 * Project: boilerplate
 * Created Date: Tuesday, March 21st 2023
 * Author: Joice Joy (joice@radiansys.com)
 * -----
 * Last Modified: Tuesday, March 21st 2023 8:13:51 pm
 * Modified By: Joice Joy
 * -----
 * Copyright (c) 2023 Radiansys Inc
 */
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
import { goBack } from '@/Navigators/utils'
import { useGetDogsQuery } from '@/Services/city'
import { useDispatch } from 'react-redux'
import { setFavorite } from '@/Store/weather/weather'

const Favorites = () => {
  const { Layout, Gutters, Fonts } = useTheme()

  const { t } = useTranslation()

  const dogsState = useSelector((state: RootState) => state.state)

  const dispatch = useDispatch()

  const { data, isLoading, isFetching } = useGetDogsQuery({})

  const renderItems = (props: { item: string; index: number }) => {
    const { item, index } = props
    return (
      <View
        style={[
          Gutters.smallVPadding,
          Gutters.smallHPadding,
          Layout.alignItemsCenter,
        ]}
      >
        <Image style={[Style.image]} source={{ uri: item }} />
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
          data={dogsState.favoriteList}
          renderItem={renderItems}
          ItemSeparatorComponent={renderItemSeperator}
        />
        {/* <ActivityIndicator size={'large'} style={[Gutters.largeVMargin]} />
        <Text style={Fonts.textCenter}>{t('welcome')}</Text> */}
      </View>
    </SafeAreaView>
  )
}

export default Favorites
