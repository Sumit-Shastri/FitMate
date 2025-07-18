document.addEventListener("DOMContentLoaded", () => {
  const nextButton = document.getElementById("Next");
  const pincodeField = document.getElementById("pincode");
  const stateField = document.getElementById("state");
  const cityField = document.getElementById("city");

 
  if (!nextButton) {
    console.error("Element with ID 'Next' not found.");
    return;
  }

  
  nextButton.addEventListener("click", async () => {
    const pincode = pincodeField.value.trim(); 

    if (pincode.length !== 6 || isNaN(pincode)) {
      alert("Thik se daal chutiye.");
      return;
    }

    try {
      const response = await fetch(`https://api.postalpincode.in/pincode/${pincode}`);
      const data = await response.json();

      if (data[0].Status === "Success") {
        const details = data[0].PostOffice[0];
        stateField.value = details.State;
        cityField.value = details.District;
      } else {
        alert("Invalid pincode. Please try again.");
      }
    } catch (error) {
      console.error("Error fetching details:", error);
      alert("Failed to fetch pincode details. Please try again later.");
    }
  });
});
