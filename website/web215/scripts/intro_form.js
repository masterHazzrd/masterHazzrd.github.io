// Wait for the DOM content to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Select the form by its ID
    const form = document.getElementById("intro_form");

    // Add an event listener to capture form submission
    form.addEventListener("submit", function(event) {
        // Prevent the form from submitting the traditional way
        event.preventDefault();

        // Capture the values from the form fields
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const personal_bkgrd = document.getElementById("personal_bkgrd").textContent;
        const academic_bkgrd = document.getElementById("academic_bckgrd").textContent;
        const platform = document.getElementById("primary_platform_used").value;
        const course1 = document.getElementById("current_courses_1").value;

        // Radio buttons - student type
        const studentType = document.querySelector('input[name="student_type"]:checked').value;

        // Collecting checkbox values (study preferences)
        const studyPreferences = [];
        document.querySelectorAll('input[name="study_preferences"]:checked').forEach((checkbox) => {
            studyPreferences.push(checkbox.value);
        });

        // Format the submitted data to display at the bottom of the page
        const displayDiv = document.getElementById("submittedData");
        displayDiv.innerHTML = `
            <h3>Submitted Information</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Personal Background:</strong> ${personal_bkgrd}</p>
            <p><strong>Academic Background:</strong> ${academic_bkgrd}</p>
            <p><strong>Primary Computer Platform:</strong> ${platform}</p>
            <p><strong>First Course:</strong> ${course1}</p>
            <p><strong>Student Type:</strong> ${studentType}</p>
            <p><strong>Study Preferences:</strong> ${studyPreferences.join(", ")}</p>
        `;

        // Optionally clear the form after submission
        form.reset();
    });
});
