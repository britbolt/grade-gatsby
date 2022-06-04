const logOut = document.querySelector("#logout");

const handleLogOut = async (event) => {
  event.preventDefault();
  const response = await fetch("/logout", {
    method: "post",
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/");
  }
};

logOut.addEventListener("click", handleLogOut);
