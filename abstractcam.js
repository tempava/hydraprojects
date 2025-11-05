a.setBins[1]
a.setCutoff(5)
a.setSmooth(0.8)
a.show()


s0.initCam();
src(s0)
	.color(-180.922, 0.659)
	.pixelate(396.085)
	.kaleid(6.391)
	.contrast(4.744)
	.color(-10.579, 8.614)
.modulateKaleid(noise(5, () => a.fft[0]*0.05), 5)
//.modulateHue(voronoi(0.1, 79999), 2)
  .modulatePixelate(noise(0.9,0.02),20)
	.out();
