import 'styles/index.css';

import {Box, Flex} from 'rebass';

import {RESPONSIVE_APP_WIDTH} from 'styles/constants';
import React from 'react';

function PageLayout({header, content}) {
  return (
    <Flex
      css={{height: '100vh'}}
      flexDirection="column"
      mx="auto"
      width={RESPONSIVE_APP_WIDTH}>
      <Box
        bg="background"
        css={{
          position: 'fixed',
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          zIndex: -1,
        }}
      />
      <Box p={2}>{header}</Box>
      <Flex css={{flexGrow: 1}}>{content}</Flex>
    </Flex>
  );
}

export default PageLayout;
