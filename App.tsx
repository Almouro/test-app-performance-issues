// In App.js in a new project

import * as React from 'react';
import {View, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {QueryClient, QueryClientProvider} from 'react-query';
import {Tabs} from './src/Tabs';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';

const queryClient = new QueryClient();

export default function App() {
  const [renderApp, setRenderApp] = React.useState(true);

  return (
    <View style={{flex: 1}}>
      <SafeAreaProvider>
        <SafeAreaView style={{flex: 1}} edges={['top']}>
          {renderApp ? (
            <QueryClientProvider client={queryClient}>
              <NavigationContainer>
                <Tabs />
              </NavigationContainer>
            </QueryClientProvider>
          ) : (
            <Button
              onPress={() => {
                setRenderApp(true);
              }}
              title="Render App"
            />
          )}
        </SafeAreaView>
      </SafeAreaProvider>
    </View>
  );
}
