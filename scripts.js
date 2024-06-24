const tg = window.Telegram.WebApp;

var myVar;

function myFunction() {
	myVar = setTimeout(showPage, 2000);
}

function showPage() {
	document.getElementById("loader").style.display = "none";
	document.getElementById("myDiv").style.display = "flex";
}

function buy() {
	const tg = window.Telegram.WebApp;
	tg.sendData(
		JSON.stringify({
			country: "Moscow",
			street: "Kalotushkino",
		})
	);
	// const url = "http://127.0.0.1:5000/handle_endpoint"; // Replace with your backend endpoint

	// document
	// 	.getElementById("paymentButton")
	// 	.addEventListener("click", function () {
	// 		const data = JSON.stringify({
	// 			amount: 100, // Example data
	// 			currency: "USD", // Example data
	// 		});

	// 		tg.MainButton.show();
	// 		tg.MainButton.setText("Pay");
	// 		tg.MainButton.onClick(() => {
	// 			console.log("Starting payment process...");
	// 			const xhr = new XMLHttpRequest();
	// 			xhr.open("POST", url, true);
	// 			xhr.setRequestHeader("Content-Type", "application/json");
	// 			xhr.setRequestHeader("X-Custom-Info", "getOpenInvoiceUrl");
	// 			xhr.onreadystatechange = function () {
	// 				if (xhr.readyState === 4 && xhr.status === 200) {
	// 					const response = JSON.parse(xhr.responseText);
	// 					const invoiceUrl = response.invoice_url;
	// 					if (invoiceUrl) {
	// 						// Open invoice URL in a new tab
	// 						window.open(invoiceUrl, "_blank");
	// 					} else {
	// 						console.error("Failed to get invoice URL");
	// 					}
	// 				}
	// 			};
	// 			xhr.send(data);
	// 		});
	// 	});
}

function animateRipple(event) {
	const button = event.currentTarget;

	// Remove existing ripples
	const ripples = button.querySelectorAll(".ripple");
	ripples.forEach((ripple) => ripple.remove());

	// Create new ripple element
	const ripple = document.createElement("span");
	ripple.classList.add("ripple");

	// Calculate position of click relative to the button
	const rect = button.getBoundingClientRect();
	const x = event.clientX - rect.left;
	const y = event.clientY - rect.top;

	// Set ripple position and activate animation
	ripple.style.left = `${x}px`;
	ripple.style.top = `${y}px`;
	button.appendChild(ripple);

	// Remove ripple after animation ends
	ripple.addEventListener("animationend", () => {
		ripple.remove();
	});
}
