/* global window */
import test from 'tape';

test.onFinish(window.browserTestDriver_finish);
test.onFailure(window.browserTestDriver_fail);

import './src/components';
import './src/utils';
import './render';
