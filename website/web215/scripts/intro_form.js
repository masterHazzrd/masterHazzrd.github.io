document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("intro_form");

    // Store the original page content
    const originalContent = document.body.innerHTML;

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

        // Capture student type (radio button for Traditional/Non-traditional)
        const studentType = document.querySelector('input[name="student_type"]:checked').value;

        // Capture full-time or part-time student (radio button)
        const timeCommitment = document.querySelector('input[name="student_type"]:checked').value;

        // Capture study preferences (checkboxes for Daytime or Night classes)
        const studyPreferences = [];
        document.querySelectorAll('input[name="study_preferences"]:checked').forEach((checkbox) => {
            studyPreferences.push(checkbox.value);
        });

        // Replace the entire page content (body) with the submitted data using the #submittedData styling
        document.body.innerHTML = `
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
                <p><strong>Full-time or Part-time:</strong> ${timeCommitment}</p><br>
                <p><strong>Study Preferences (Day/Night/In-Person/Online):</strong> ${studyPreferences.join(', ')}</p><br><br>
                
                <button id="resetButton">Reset</button>
            </div>
        `;

        // Add event listener to the reset button
        document.getElementById("resetButton").addEventListener("click", function() {
            document.body.innerHTML = originalContent; // Restore the original content
            location.reload(); // Reload the page to reinitialize the event listeners
        });
    });
});
