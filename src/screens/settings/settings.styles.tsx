import { dimensions, variables, spacing } from '../../theme/variables';
import { withStyles } from '@ui-kitten/components';
import { Settings } from './settings.screen';

export const ThemedSettings = withStyles(Settings, theme => ({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
    },


}));
