import { extendTheme } from '@chakra-ui/react';

// Common
import { fontSizes } from './commons/fontSizes';
import { fonts } from './commons/fonts';
import { colors } from './commons/colors';
import { lineHeights } from './commons/lineHeights';

// Components
import { Text } from './components/text';

const overrides = {
  components: {
    Text
  },
  fontSizes,
  fonts,
  colors,
  lineHeights
};

export const CHAKRA_THEME = extendTheme(overrides);
