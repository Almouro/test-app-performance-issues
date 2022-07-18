import React from 'react';
import {StyleSheet, View} from 'react-native';
import SkeletonContent from 'react-native-skeleton-placeholder';

export const ListContainer = ({children, style}: any) => {
  return (
    <View style={style}>
      <View style={StyleSheet.absoluteFill}>
        <SkeletonContent>
          {Array(3)
            .fill(null)
            .map((_, index) => (
              <SkeletonContent.Item
                flexDirection="row"
                alignItems="center"
                margin={10}
                key={index}>
                <SkeletonContent.Item
                  width={60}
                  height={60}
                  borderRadius={50}
                  marginRight={20}
                />
                <SkeletonContent.Item
                  width={250}
                  height={200}
                  borderRadius={4}
                />
              </SkeletonContent.Item>
            ))}
        </SkeletonContent>
      </View>
      {children}
    </View>
  );
};
