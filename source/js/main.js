import {ieFix} from './utils/ie-fix';
import {iosVhFix} from './utils/ios-vh-fix';

import {initBlur} from './modules/init-blur';
import {initQuestion} from './modules/init-question';

// Utils
// ---------------------------------

ieFix();
iosVhFix();

// Modules
// ---------------------------------

initBlur();
initQuestion();
