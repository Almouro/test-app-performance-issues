# FlatList vs FlashList

## Install release APK

You can install the release apk directly

```
adb install flatlist.apk
adb install flaSHlist.apk
```

they both have the same bundle id, so they will override each other

## Modifying source

There's a boolean `USE_FLASHLIST` in `App.tsx`.

If `false` it will use the FlatList instead and will make sure items are memoized, which is absolutely necessary for `Flatlist` to work correctly.
