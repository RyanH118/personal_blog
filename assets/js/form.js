const form = document.getElementById("blogForm");

// This event listener is waiting for the submit button to be clicked.
form.addEventListener("submit", function (event) {
    
    // these 3 const are for the if statement.
    const username = document.getElementById('username').value;
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;
    
    //This if is for when one of the textboxes is empty it pops up a message telling you to fill it out.
    if (username === "" || title === "" || content === "") {
        //preventDefault will stop the page from going to the next page if nothing is filled out. 
        event.preventDefault();
        document.getElementById("errorMessage").textContent = 'Please fill out the whole form!';
        //This setInterval makes the text disappear after 3 seconds.
        setInterval(() => {
            document.getElementById("errorMessage").textContent = '';
        }, 3000);
    } else {

        //This array gets the content from the form and is for localStorage to send it all together.
        const blogPost = {
            username: document.getElementById("username").value,
            title: document.getElementById("title").value,
            content: document.getElementById("content").value
        };
        let blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
        // this push is adding a new post to the end of the array.
        blogPosts.push(blogPost);
        // stringify is making the objects into a string to send to localStorage. 
        localStorage.setItem('blogPosts', JSON.stringify(blogPosts));

        // this makes the form null after hitting submit.
        form.reset();    
    }
    
});