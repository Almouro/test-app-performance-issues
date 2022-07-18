import React, {memo} from 'react';
import {FlatList, View} from 'react-native';
import {Feed, Tweet} from '../Tweet';
import {TweetItem} from './TweetItem';

const ItemSeparatorComponent = memo(() => (
  <View style={{height: 1, backgroundColor: '#eee', marginVertical: 10}} />
));

const MemoizedTweetItem = memo(TweetItem);

const renderItem = ({item}: {item: Tweet}) => (
  <MemoizedTweetItem tweet={item} />
);
const keyExtractor = ({id}: Tweet) => id;

export const TweetList = ({feed}: {feed: Feed}) => {
  return (
    <FlatList
      contentContainerStyle={{
        paddingVertical: 10,
        backgroundColor: 'white',
      }}
      style={{backgroundColor: 'white', flex: 1}}
      ItemSeparatorComponent={ItemSeparatorComponent}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      data={feed.tweets}
      contentInsetAdjustmentBehavior="automatic"
    />
  );
};
