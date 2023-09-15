import React from 'react';
import Row from './Row';
function FullPageSpread() {
  // This component is intended to use a bunch of images,
  // slowly sliding across the screen, and some interesting page/menu transitions

  return (
    <div>
      <Row
        imageURLx={[
          '/assets/fullPageSpread/image1.jpg',
          '/assets/fullPageSpread/image2.jpg',
          '/assets/fullPageSpread/image3.jpg',
          '/assets/fullPageSpread/image4.jpg',
          '/assets/fullPageSpread/image5.jpg',
        ]}
        imageProps={{ height: 300, width: 300 }}
      />
    </div>
  );
}

export default FullPageSpread;
