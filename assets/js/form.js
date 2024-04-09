const form = document.getElementById("blogForm");

// This event listener is waiting for the submit button to be clicked.
form.addEventListener("submit", function (event) {
    
    //This array gets the content from the form and is for localStorage to send it all together.
    const formData = {
        username: document.getElementById("username").value,
        title: document.getElementById("title").value,
        content: document.getElementById("content").value
    };
    
    //This if is for when one of the textboxes is empty it pops up a message telling you to fill it out.
    if (username === "" || title === "" || content === "") {
        //preventDefault will stop the page from going to the next page if nothing is filled out. 
        event.preventDefault();
        document.getElementById("errorMessage").textContent = 'Please fill out the whole form!';
        //This setInterval makes the text disappear after 3 seconds.
        setInterval(() => {
            document.getElementById("errorMessage").textContent = '';
        }, 3000);
        //When the whole form is filled out this sends it to localStorage.
    } else {
        localStorage.setItem("formData", JSON.stringify(formData));
    }

});