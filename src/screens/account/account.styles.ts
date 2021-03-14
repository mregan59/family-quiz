import { dimensions, variables, spacing } from '../../theme/variables';
import { withStyles } from '@ui-kitten/components';
import { Account } from './account.screen';

export const ThemedAccount = withStyles(Account, (theme) => ({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
}));
