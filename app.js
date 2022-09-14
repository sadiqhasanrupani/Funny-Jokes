const resetBtn = document.querySelector("#reset-btn");
const jokes = document.querySelector("#jokes");

const addNewJoke = async () => {
  const newJoke = await dadsJoke();
  const li = document.createElement("li");
  const div = document.createElement("div");
  div.classList.add("joke-container");
  li.classList.add("jokeList");
  li.textContent = newJoke;
  jokes.append(div);
  div.append(li);
};

// dadjoke api
const dadsJoke = async () => {
  try {
    const config = { headers: { Accept: "application/json" } };
    const response = await axios.get("https://icanhazdadjoke.com/", config);
    return response.data.joke;
  } catch {
    return "No Jokes Right Now"
  }
};

for (let i = 0; i < 10; i++) {
  addNewJoke();
}

resetBtn.addEventListener("click", () => {
  let divs = document.querySelectorAll(".joke-container");
  for (di of divs) {
    di.remove();
  }
  for (let i = 0; i < 10; i++) {
    addNewJoke();
  }
});
