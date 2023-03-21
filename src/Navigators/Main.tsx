/*
 * Project: boilerplate
 * Created Date: Tuesday, March 21st 2023
 * Author: Joice Joy (joice@radiansys.com)
 * -----
 * Last Modified: Tuesday, March 21st 2023 7:38:57 pm
 * Modified By: Joice Joy
 * -----
 * Copyright (c) 2023 Radiansys Inc
 */

import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { StartupContainer } from '@/Containers'
import Favorites from '@/Containers/Favorites'

const Tab = createBottomTabNavigator()

// @refresh reset
const MainNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={StartupContainer}
        options={{
          tabBarIconStyle: { display: 'none' },
          tabBarLabelPosition: 'beside-icon',
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={Favorites}
        options={{
          tabBarIconStyle: { display: 'none' },
          tabBarLabelPosition: 'beside-icon',
        }}
      />
    </Tab.Navigator>
  )
}

export default MainNavigator
