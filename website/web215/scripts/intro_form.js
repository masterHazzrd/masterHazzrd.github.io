document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("intro_form");
    const mainContent = document.querySelector("main");
    const submittedDataDiv = document.getElementById("submittedData");

    // Initially hide the submitted data section
    submittedDataDiv.style.display = "none";

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent default form submission

        // Capture form values
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const personalBkgrd = document.getElementById("personal_bkgrd").textContent;
        const academicBkgrd = document.getElementById("academic_bckgrd").textContent;
        const subjectBkgrd = document.getElementById("subject_bckgrd").textContent;
        const platform = document.getElementById("primary_platform_used").value;

        // Capture current courses
        const currentCourses = [
            document.getElementById("current_courses_1").value,
            document.getElementById("current_courses_2").value,
            document.getElementById("current_courses_3").value,
            document.getElementById("current_courses_4").value,
            document.getElementById("current_courses_5").value
        ];

        // Map current courses to an unordered list format
        const formattedCourses = currentCourses.map(course => `<li>${course}</li>`).join('');

        // Capture student type (radio button)
        const studentType = document.querySelector('input[name="student_type"]:checked').value;

        // Capture study preferences (checkboxes)
        const studyPreferences = [];
        document.querySelectorAll('input[name="study_preferences"]:checked').forEach((checkbox) => {
            studyPreferences.push(checkbox.value);
        });

        // Replace only the main content (not the entire page)
        mainContent.innerHTML = `
            <div id="submittedData">
                <h3>Submitted Information</h3><br><br>
                <p><strong>Name:</strong> ${name}</p><br>
                <p><strong>Email:</strong> ${email}</p><br>
                <p><strong>Personal Background:</strong> ${personalBkgrd}</p><br>
                <p><strong>Academic Background:</strong> ${academicBkgrd}</p><br>
                <p><strong>Subject Background:</strong> ${subjectBkgrd}</p><br>
                <p><strong>Primary Platform:</strong> ${platform}</p><br>
                <p><strong>Current Courses:</strong></p>
                <ul>${formattedCourses}</ul><br>
                <p><strong>Student Type:</strong> ${studentType}</p><br>
                <p><strong>Study Preferences:</strong> ${studyPreferences.join(', ')}</p><br><br>
                
                <button id="resetButton">Reset</button>
            </div>
        `;

        // Add event listener to the reset button to return to the original form
        document.getElementById("resetButton").addEventListener("click", function() {
            submittedDataDiv.style.display = "none"; // Hide submitted data section
            form.reset(); // Reset form fields
            mainContent.innerHTML = ""; // Clear the main content
            mainContent.appendChild(form); // Re-add the original form back to the main content
        });

        // Show the submitted data
        submittedDataDiv.style.display = "block";
    });
});
