// Copyright Epic Games, Inc. All Rights Reserved.

import { Config, PixelStreaming } from '@EpicGames/libpixelstreamingfrontend';
import { Application, PixelStreamingApplicationStyle } from '@EpicGames/libpixelstreamingfrontend-ui';
const PixelStreamingApplicationStyles =
    new PixelStreamingApplicationStyle();
PixelStreamingApplicationStyles.applyStyleSheet();

document.body.onload = function() {
	// Example of how to set the logger level
	// Logger.SetLoggerVerbosity(10);

	// Create a config object
	const config = new Config({ useUrlParams: true });

	// Create a Native DOM delegate instance that implements the Delegate interface class
	const stream = new PixelStreaming(config);
	const application = new Application({
		stream: stream,
		onColorModeChanged: (isLightMode) => PixelStreamingApplicationStyles.setColorMode(isLightMode)
	});
	// document.getElementById("centrebox").appendChild(application.rootElement);
	document.body.appendChild(application.rootElement);
}
