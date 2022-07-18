import React, {memo, useState} from 'react';
import {View} from 'react-native';
import WebView from 'react-native-webview';
import {getBannerUri} from '../Api';

export const AnimatedReactNativeEU = memo(() => {
  const [show, setShow] = useState(false);
  return (
    <View style={{height: 100, width: 100}}>
      <WebView
        onLoadEnd={() => setShow(true)}
        source={{uri: getBannerUri()}}
        scrollEnabled={false}
        style={{opacity: show ? 1 : 0}}
      />
    </View>
  );
});
