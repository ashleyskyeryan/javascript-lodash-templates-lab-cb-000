// index.js
function postComment() {
  var sidebar = document.getElementById("sidebar").value;
  var post = document.getElementById("post").value;

  //insert comment into "comments" div in this format:
  //<div class="comment"><p>comment</p><p>Posted By: <span class="commenter">commenter</span></p></div>

  //create template string - THIS IS THE ONLY LINE WE HAVE TO CHANGE
  //var commentTemplate = '<div class="comment"><p><%= comment %></p><p>Posted By: <span class="commenter"><%= commenter %></span></p></div>';
  var pageTemplate = document.getElementById("page-template").innerHTML;

  //create template function
  var templateFn = _.template(pageTemplate);

  var commentsDiv = document.getElementById("post");

  //execute template function with JSON object for the interpolated values
  var templateHTML = templateFn({ 'sidebar': sidebar, 'post': post });

  //append rather than replace!
  commentsDiv.innerHTML += templateHTML;
}
