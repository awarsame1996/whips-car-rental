import { Gradient } from './Gradient';
import React, { useEffect } from 'react';
import './style.css';

export const Canvas = () => {
	useEffect(() => {
		// Create your instance
		const gradient = new Gradient();

		// Call `initGradient` with the selector to your canvas
		gradient.initGradient('#gradient-canvas');
	});

	return <canvas id='gradient-canvas' data-transition-in />;
};
