let body = document.getElementById("body1");
let isWhite = true;

const handleClick = (event) => {
  if (isWhite) {
    event.target.style.backgroundColor = "white";
    isWhite = false;
  } else if (!isWhite) {
    event.target.style.backgroundColor = "black";
    isWhite = true;
  }
};

body.addEventListener("click", handleClick);
