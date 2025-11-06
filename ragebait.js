
a.setBins(1)

a.show(o2)
a.setCutoff(15)
a.setSmooth(0.8)


osc(89, -0.1)
//.kaleid(6)
.color(-1, -1, 1)
  .colorama()
.modulateRotate(noise(6, () => a.fft[0]*0.001))
//.kaleid(2)
.scrollX(()=>mouse.y*(0.001))
.scrollY(()=>mouse.x*(-0.001))
.out(o1)

render(o1)

//asdfjasudfujasdfjaskjjdfkjasdhhfkjasdhfashdaksjdjfjasdjhfiuas
