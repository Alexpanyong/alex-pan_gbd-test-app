/* eslint-disable no-undef */
export const getScreenSize = () => {
  if (Modernizr.mq('(max-width: 1024px)')) { return 'mobile'; }
  return 'web';
};
