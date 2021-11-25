const container = document.querySelector(".container");
const form = document.getElementById("commentForm");
const loggedinTextarea = form.querySelector(".loggedin__textarea");
const button = form.querySelector("button");

const addComment = (text, id) => {
    const postComments = document.querySelector(".post__comments ul");
    const newComment = document.createElement("li");
    newComment.dataset.id = id;
    newComment.className = "post__comment";
    const span = document.createElement("span");
    span.innerText = `💛 ${text} `;
    const deleteSpan = document.createElement("span");
    deleteSpan.innerText = "삭제";
    newComment.appendChild(span);
    newComment.appendChild(deleteSpan);
    postComments.prepend(newComment);
};

const handleSubmit = async (event) => {
    event.preventDefault();
    const text = loggedinTextarea.value;
    const postId = container.dataset.id;
    if(text === "") {
        return;
    }
    const response = await fetch(`/api/posts/${postId}/comment`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ text }),
    });
    if(response.status === 201) {
        const { newCommentId } = await response.json();
        addComment(text, newCommentId);
        loggedinTextarea.value = "";
    }
};
    
form.addEventListener("submit", handleSubmit);