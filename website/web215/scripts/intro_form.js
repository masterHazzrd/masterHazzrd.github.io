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
        const formattedCourses = currentCourses.map(course => `<li>${course}</li>`).join('');

        // Capture student type (Traditional/Non-traditional)
        const studentTypeOne = document.querySelector('input[name="student_type-1"]:checked').value;

        // Capture full-time or part-time student
        const studentTypeTwo = document.querySelector('input[name="student_type-2"]:checked').value;

        // Capture daytime or night classes preferences
        const dayNightPreferences = [];
        document.querySelectorAll('input[name="study_preferences_1"]:checked').forEach((checkbox) => {
            dayNightPreferences.push(checkbox.value);
        });

        // Capture in-person, online, or hybrid preferences
        const classFormatPreferences = [];
        document.querySelectorAll('input[name="study_preferences_2"]:checked').forEach((checkbox) => {
            classFormatPreferences.push(checkbox.value);
        });

        // Display the captured information
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
                <p><strong>Traditional/Non-traditional:</strong> ${studentTypeOne}</p><br>
                <p><strong>Full-time/Part-time:</strong> ${studentTypeTwo}</p><br>
                <p><strong>Study Preferences (Day/Night):</strong> ${dayNightPreferences.join(', ')}</p><br>
                <p><strong>Class Format Preferences (In Person/Online/Hybrid):</strong> ${classFormatPreferences.join(', ')}</p><br><br>
                
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
