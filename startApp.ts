// @flow

import {execSync} from 'child_process';
import {TestCase, PerformanceTester} from '@perf-profiler/e2e';

const bundleId = 'com.twitter.android';

const stopApp = () => execSync(`adb shell am force-stop ${bundleId}`);
const startApp = () =>
  execSync(
    `adb shell monkey -p ${bundleId} -c android.intent.category.LAUNCHER 1`,
  );

const startTestCase: TestCase = {
  duration: 15000,
  beforeTest: () => {
    stopApp();
  },
  run: () => {
    startApp();
  },
};

const test = async () => {
  const performanceTester = new PerformanceTester(bundleId);
  await performanceTester.iterate(startTestCase, 10);
  performanceTester.writeResults();
};

test();
