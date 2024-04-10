// The parse is making the previous string back into a object and the OR operator with [] is for when theres nothing in the array.
const blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
// this is calling on the div with the id so we can post the blog on the page.
const blogPostList = document.getElementById('blogContainer');

// This loop is what is reading over the array 
blogPosts.forEach(post => {
    // newPost is creating a new div for each new post.
    const newPost = document.createElement('article');
    newPost.innerHTML = `
    <h2>${post.title}</h2>
    <p>${post.content}</p>
    <p>Author: ${post.username}</p>
  `;
    blogPostList.appendChild(newPost);
});