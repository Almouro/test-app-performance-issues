import {PerformanceTester} from '@perf-profiler/e2e';
import {execSync} from 'child_process';

const bundleId = 'com.reactnativefeed';

const stopApp = () => {
  execSync(`adb shell am force-stop ${bundleId}`);
};
const startApp = () => {
  execSync(`adb shell am start ${bundleId}/${bundleId}.MainActivity`);
};

const main = async () => {
  const tester = new PerformanceTester(bundleId);

  await tester.iterate({
    beforeTest: () => stopApp(),
    run: () => startApp(),
    duration: 15000,
  });

  tester.writeResults();
};

main();
