import React, { memo } from 'react';
import Spline from '@splinetool/react-spline';
import './SplineScene.css';

const SplineScene = memo(function SplineScene() {
  return (
    <div className="spline-scene">
        <Spline scene="https://prod.spline.design/Xe9hoTDdt8o02DrU/scene.splinecode" />
    </div>
  );
});

export default SplineScene;