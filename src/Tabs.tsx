import * as React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {TweetsTab} from './tabs/TweetsTab';
import {LikesTab, MediaTab, RepliesTab} from './tabs/OtherTabs';

const Tab = createMaterialTopTabNavigator();

export const Tabs = () => {
  return (
    <Tab.Navigator screenOptions={{lazy: true}}>
      <Tab.Screen name="Tweets" component={TweetsTab} />
      <Tab.Screen name="Likes" component={LikesTab} />
      <Tab.Screen name="Media" component={MediaTab} />
      <Tab.Screen name="Replies" component={RepliesTab} />
    </Tab.Navigator>
  );
};
