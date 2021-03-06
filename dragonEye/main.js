function moveEye(m) {
	// Elements
	const eye = document.querySelector(".eye");
	const iris = document.querySelector(".iris");
	const retina = document.querySelector(".retina");
	// Sizes
	const [eyeWidth, eyeHeight] = [eye.offsetWidth, eye.offsetHeight];
	const [pageWidth, pageHeight] = [window.innerWidth, window.innerHeight];
	
	const eyePosition = document.querySelector('.eye').getBoundingClientRect()
	const [eyePositionX, eyePositionY] = [eyePosition.x, eyePosition.y]
	const [centerX, centerY] = [eyePositionX + eyeWidth/2, eyePositionY + eyeHeight / 2];
	
	const [widthFromEyeAsPointZero, heighthFromEyeAsPointZero] = [pageWidth - centerX, pageHeight - centerY]

	// Init all values as 0
	let [tx, ty] = [0, 0];

	const [xChangeFromCenter, yChangeFromCenter] = [
		m.pageX - centerX,
		m.pageY - centerY,
	];

	const [propChangeX, propChangeY] = [
		(xChangeFromCenter * 100) / widthFromEyeAsPointZero,
		(yChangeFromCenter * 100) / heighthFromEyeAsPointZero,
	];

	rx = xChangeFromCenter / centerX;
	ry = yChangeFromCenter / centerY;



	ry = ry > 0 ? -Math.abs(ry) : Math.abs(ry)

	tx = (propChangeX * 100) / (eyeWidth / 1.5);
	ty = (propChangeY * 100) / (eyeHeight / 1.5);

	retina.style.transform = `
		rotate3d(${0}, ${rx}, ${0}, ${45}deg) 
		translate(${tx}px, ${0}px)
		rotate(-45deg)
	`;

	let eyeGradientPos = 0

	if (tx < 0) {
		eyeGradientPos = 50 - (Math.abs(tx/2))
	} else {
		eyeGradientPos = 50 + (Math.abs(tx/2))
	}

	setTimeout(() => {
		document.querySelector('.eye').style.background = `radial-gradient(circle at ${eyeGradientPos}%, rgba(252, 244, 103, 1) 0%, rgb(188, 67, 13) 50%, rgba(37, 5, 7, 1) 100%)`
	}, 200)
}

window.addEventListener("mousemove", moveEye);
window.addEventListener("click", moveEye);
window.addEventListener("touchstart", moveEye);