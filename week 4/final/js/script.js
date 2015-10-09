

   	// display the instructions with javascript
   	var instructions = "Select a link below to see the definition:";
    $('#instructions').text(instructions);

	// function to display definitions of CIA terms
	function displayDefinition(term) {
		var string;
		if (term == 'c') {
			string = "Confidentiality is the assurance of data privacy -- only the intended and authorized recipients may read the data";
		} else if (term == 'i') {
			string = "Integrity is the trustworthiness of information resources; assurance of data non-alteration. Data integrity insures that information has not been altered in transmission, from origin to reception.  Source integrity insures that the sender of that information is who it is supposed to be.";
		} else if (term == 'a') {
			string = "Availability is the assurance of timely and reliable access to data services for authorized users. Information or resources are available when required and available at a rate which is fast enough for the wider system to perform its task as intended.";
		} else {
			// nada
		}
		// set the the text of the html element to the appropriate string
		$('#definition').html(string);
	}