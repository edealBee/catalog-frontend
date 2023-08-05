import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = () => (
  <ContentLoader
    speed={2}
    width={380}
    height={240}
    viewBox="0 0 380 240"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="10" y="10" rx="20" ry="20" width="360" height="220" />
  </ContentLoader>
);

export default Skeleton;
