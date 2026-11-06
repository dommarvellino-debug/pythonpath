const weeks = [
  { title: "Meet Python", range: "Days 1–7", theme: "Your first steps" },
  { title: "Make decisions", range: "Days 8–14", theme: "Loops & choices" },
  { title: "Organize your code", range: "Days 15–21", theme: "Functions & modules" },
  { title: "Work with collections", range: "Days 22–28", theme: "Lists & dictionaries" },
  { title: "Save real data", range: "Days 29–35", theme: "Files & errors" },
  { title: "Build like a developer", range: "Days 36–42", theme: "Testing & GitHub" },
  { title: "Share your work", range: "Days 43–45", theme: "Polish & publish" },
];

const lessons = [
  ["Install Python and meet the terminal", "Set up Python 3 and a code editor. Learn what a file, folder, and terminal are.", "Run `python --version`, create `hello.py`, and run it from your terminal.", "Create a folder called `python-learning` and save your first script inside it.", "You can run a `.py` file and know where it lives."],
  ["Your first Python instructions", "Use `print()` to make Python display text, numbers, and simple calculations.", "Write three `print()` lines: a greeting, your favorite activity, and `8 * 7`.", "Make a tiny introduction program that prints your name, goal, and one fun fact.", "Change the text and run the program again."],
  ["Store information in variables", "Variables give names to values. Practice clear names and reassignment.", "Create variables for a book, a color, and a number. Print a sentence using each.", "Make a profile card from variables: name, city, and one goal.", "Update one variable and confirm the output changes."],
  ["Numbers and text have different types", "Meet `int`, `float`, `str`, and `bool`. Use `type()` to inspect a value.", "Print the type of `42`, `3.14`, `\"hello\"`, and `True`.", "Store the price and quantity of an item, then print the total cost.", "Know why `\"5\" + \"2\"` differs from `5 + 2`."],
  ["Get input from a person", "Use `input()` to make a program respond to someone. Input starts as text.", "Ask for a name and a favorite food, then print a friendly response.", "Add two questions to your profile card so each run feels personal.", "Run the script and enter your own answers."],
  ["Convert input and do useful math", "Convert user input using `int()` and `float()`. Try arithmetic operators.", "Ask for two numbers, convert them, and print their sum and product.", "Create a tip estimator: ask for a bill and tip percentage, then calculate the tip.", "Enter decimal values without causing a type error."],
  ["Week 1 project: a simple calculator", "Bring together input, number conversion, variables, and arithmetic. Build a calculator that adds, subtracts, multiplies, and divides.", "First plan the questions it should ask. Then write and test one operation at a time.", "Build the calculator below. Try whole numbers, decimals, and division by zero.", "Your calculator gives correct results for all four operations and handles a zero divisor."],
  ["Make your program choose", "Use `if`, `elif`, and `else` to run different code based on a condition.", "Ask for an age and print a different message for under 13, 13–17, or 18+.", "Add a simple pass/fail result to your tip estimator or calculator.", "Test a value that meets each branch."],
  ["Compare values and combine conditions", "Use `==`, `!=`, `<`, `>`, `<=`, `>=`, `and`, `or`, and `not`.", "Ask for a temperature and say whether it is below, at, or above 20 degrees.", "Make a ticket checker that tests age and whether someone has a ticket.", "Check the boundary values, not just the easy middle case."],
  ["Handle unexpected input gently", "Use `try` and `except` to respond to invalid number input.", "Ask for a number inside a `try` block and show a helpful message if conversion fails.", "Add friendly input validation to your calculator.", "Typing a word where a number is expected no longer crashes the program."],
  ["Repeat with a while loop", "A `while` loop repeats as long as a condition is true. Avoid loops that never end.", "Count from 1 to 5 with a `while` loop.", "Let the calculator ask whether the user wants another calculation.", "You can explain how the loop eventually stops."],
  ["Repeat with a for loop", "Use `for` and `range()` when you know how many repetitions you need.", "Print the numbers from 1 to 10 and then the even numbers from 2 to 20.", "Print a small multiplication table for a number entered by the user.", "Try changing the start and stop values in `range()`."],
  ["Choose from a menu", "Combine loops and conditions to build a simple text menu.", "Show three menu choices and respond to the selected number.", "Add a repeat-until-quit menu to your calculator.", "The menu repeats and exits only when asked."],
  ["Week 2 project: number guessing game", "Use `random`, loops, conditions, and input validation to build a guessing game.", "Write the game steps in plain language before coding.", "Build the game below. Test correct guesses, low guesses, high guesses, and invalid input.", "The program gives clues and ends when the player wins or quits."],
  ["Write your own function", "Functions package reusable instructions. Define them with `def` and call them by name.", "Write a `greet(name)` function and call it with two different names.", "Turn one repeated action in your guessing game into a function.", "The function runs when called, not just when defined."],
  ["Pass information into functions", "Use parameters and arguments to let a function work with different values.", "Write `area(width, height)` that returns a rectangle's area.", "Create a `calculate_tip(bill, percent)` function.", "Call the function with at least three different inputs."],
  ["Return a result", "Use `return` to send a value back. Keep printing separate from calculating.", "Write a function that converts minutes to seconds and returns the answer.", "Refactor your calculator so each operation has a small function.", "You can store a returned result in a variable."],
  ["Keep functions focused", "Break a problem into small named steps and use default parameter values.", "Create a function with a default greeting, then call it with and without an argument.", "Split the guessing game into setup, play, and result functions.", "Each function has one clear job."],
  ["Import useful modules", "Use Python's standard library with `import`. Explore `random` and `math`.", "Use `math.sqrt()` and `random.randint()` in short experiments.", "Add a random target and a replay choice to your guessing game.", "Find a standard-library function and read its example."],
  ["Read error messages and debug", "Read a traceback from the bottom up. Use small checks and print debugging.", "Intentionally make a small error, read its message, and fix it.", "Find and fix one bug in an earlier project. Write down what caused it.", "You can describe the error and the change that fixed it."],
  ["Week 3 project: unit converter", "Build a menu-driven converter with separate conversion functions.", "Choose three conversions: for example Celsius/Fahrenheit, km/miles, and kg/pounds.", "Let a user choose a conversion, enter a value, and see a rounded result.", "Each conversion is a function and the menu handles unknown choices."],
  ["Lists keep items in order", "Create lists, access items by index, and use `len()`.", "Make a list of five favorite songs. Print the first, last, and number of items.", "Store the converter's supported choices in a list and display them.", "Remember that the first index is zero."],
  ["Change and loop through a list", "Use `append`, `remove`, and `for` to manage a list.", "Start a to-do list, add two tasks, remove one, and print the rest.", "Make a shopping list program that adds and shows items.", "The displayed list matches the changes you made."],
  ["Dictionaries label related information", "Store key-value pairs in a dictionary and access values by key.", "Create a book dictionary with title, author, and year.", "Represent a quiz question with a question and answer in a dictionary.", "Use a key to retrieve a value and handle a missing key safely."],
  ["Combine lists and dictionaries", "Put dictionaries in a list to represent repeated records.", "Create a list of three book dictionaries and print each title.", "Build a small set of quiz questions and loop through them.", "Add a new question without changing the quiz logic."],
  ["Track scores and summaries", "Use counters and accumulators to keep totals while looping.", "Count how many numbers in a list are above 10.", "Give your quiz a score and show the final percentage.", "Test the score when all answers are right and all are wrong."],
  ["Plan your quiz questions", "Turn a topic you enjoy into clear questions, answers, and a simple scoring rule.", "Write five questions and their expected answers on paper or in a notes file.", "Decide how your quiz should handle capitalization, extra spaces, and a replay.", "Your questions have one clear answer and are ready to put into Python."],
  ["Week 4 project: quiz game", "Build a friendly quiz with multiple questions, scoring, and a replay option.", "Choose a topic and write five question/answer pairs.", "Build the quiz below using a list of dictionaries.", "The score is accurate, answers are checked consistently, and replay works."],
  ["Read and write text files", "Use `with open(...)` to safely read and write a file.", "Write three lines to a text file and read them back.", "Save a note from the user and show it on the next run.", "The file appears in your project folder."],
  ["Save structured data as JSON", "JSON stores lists and dictionaries. Use Python's `json` module to read and write it.", "Save a list of favorite movies to `movies.json`, then load and print it.", "Save your quiz's best score between runs.", "The JSON file can be opened as readable text."],
  ["Catch errors when using files", "Files may be missing or malformed. Catch expected errors and explain what happened.", "Try opening a missing file and show a helpful first-run message.", "Make your saved quiz score load safely if its file does not exist yet.", "A missing file does not crash the program."],
  ["Keep data separate from program logic", "Use functions to load, save, and update data independently.", "Write `load_data()` and `save_data(data)` for a small JSON file.", "Refactor your quiz so its questions and game flow are easier to change.", "Changing a question does not require rewriting the scoring code."],
  ["Plan a small useful app", "Turn a user need into a short feature list and simple data shape.", "Sketch an expense record with amount, category, and note.", "Plan an expense tracker: add, list, total, and save expenses.", "Write down how you will test each feature before coding."],
  ["Build the expense tracker core", "Use functions, lists, and dictionaries to add and display expense records.", "Add one expense and print it in a readable format.", "Implement add and list commands in your tracker.", "You can add several expenses and see each one."],
  ["Week 5 project: save expenses", "Add JSON persistence, total spending, and gentle validation to the tracker.", "Try valid and invalid amounts and missing data.", "Complete the tracker below, then enter at least three sample expenses.", "Expenses persist after restarting; totals are correct; errors are understandable."],
  ["What Git does for your projects", "Git records useful snapshots of your code. Learn repository, status, add, and commit.", "Install Git if needed. Run `git --version` and `git status` in a project folder.", "Create a repository for your expense tracker and make a first commit.", "A commit has a short message describing a meaningful change."],
  ["Use Git as you make changes", "Practice the small cycle: edit, inspect status, stage, commit.", "Change a message in a project, inspect `git diff`, and commit it.", "Make separate commits for validation and README improvements.", "You can see your project history with `git log --oneline`."],
  ["Test with assertions", "Assertions check whether a result matches what you expect. Learn why small tests help.", "Write assertions for addition, temperature conversion, and a total.", "Add tests for your expense total and any conversion functions.", "Your tests pass, and a deliberately wrong expected value fails."],
  ["Organize a project into files", "Separate reusable logic from the entry point; use imports and a clear folder structure.", "Move a helper function into a second file and import it.", "Organize your tracker into a main file and a data/helper file.", "Run the app from its project folder without import errors."],
  ["Polish and review your app", "Improve the command-line experience, then test the tracker from a clean start.", "Rewrite unclear prompts and make a checklist for add, list, totals, save, reload, and invalid amounts.", "Add a simple help or quit option, then work through your checklist and fix any issues.", "A new user can use the app, and your checklist passes."],
  ["Write a README people can follow", "A README explains what the project does, how to install/run it, and how to use it.", "Draft a README with a title, features, requirements, run command, and example.", "Write the expense tracker README and include a sample terminal session.", "Someone else can run your app using only the README."],
  ["Publish your tracker to GitHub", "Create a GitHub repository and push your local project so people can explore it.", "Choose a clear repository name, review the project files, and create a public GitHub repository.", "Connect your local repository, push your commits, and check that the README and code appear online.", "The repository URL opens and the project is easy to understand at a glance."],
  ["Final project: choose your polish", "Pick one project to make portfolio-ready. Add one thoughtful feature and improve the rough edges.", "Choose a project and write down one improvement you can finish today.", "Add a feature such as expense categories, quiz difficulty, or calculator history.", "The new feature works and does not break the existing behavior."],
  ["Final project: test and document", "Verify your chosen project from a fresh run and make its documentation accurate.", "Follow your own setup instructions as if you were a new user.", "Update the README with examples and known limitations.", "The project runs cleanly and the instructions match the current version."],
  ["Final project: publish your progress", "Make your final commit, push it to GitHub, and reflect on how far you have come.", "Run `git status`, commit your final changes, and push to GitHub.", "Share your repository link and write three things you can now build.", "Your chosen project is public, documented, and ready to show."],
];

const projects = {
  7: {
    name: "Simple calculator",
    description: "A first command-line app that asks for two numbers and an operation, then shows the result. Add a friendly message for division by zero.",
    requirements: ["Support +, -, *, and /.", "Convert typed values to numbers.", "Handle invalid numbers and division by zero.", "Try multiple examples, including decimals."],
    solution: "first = float(input(\"First number: \"))\noperation = input(\"Choose +, -, *, or /: \")\nsecond = float(input(\"Second number: \"))\n\nif operation == \"+\":\n    print(first + second)\nelif operation == \"-\":\n    print(first - second)\nelif operation == \"*\":\n    print(first * second)\nelif operation == \"/\":\n    if second == 0:\n        print(\"You cannot divide by zero.\")\n    else:\n        print(first / second)\nelse:\n    print(\"Please choose a supported operation.\")",
  },
  14: {
    name: "Number guessing game",
    description: "Python picks a secret number. The player guesses until they find it, with higher/lower clues and a count of attempts.",
    requirements: ["Choose a random number from 1 to 20.", "Repeat guesses until correct or the player quits.", "Tell the player whether to guess higher or lower.", "Count attempts and celebrate a win."],
  },
  21: {
    name: "Unit converter",
    description: "A menu-based tool that converts values between three pairs of units, using one function for each conversion.",
    requirements: ["Include at least three conversions.", "Let the user choose from a visible menu.", "Validate the number and menu choice.", "Round results to a readable number of decimal places."],
  },
  28: {
    name: "Topic quiz game",
    description: "A short quiz with questions, answers, scoring, and an option to play another round.",
    requirements: ["Write at least five questions.", "Keep questions in a list of dictionaries.", "Ignore accidental spaces or capitalization in answers.", "Show the final score and offer replay."],
  },
  35: {
    name: "Expense tracker",
    description: "A practical command-line app that records expenses, lists them, calculates totals, and saves data in a JSON file.",
    requirements: ["Add expenses with amount, category, and note.", "List saved expenses and show the total.", "Save and reload data using JSON.", "Handle invalid amounts and a first run with no data."],
  },
  42: {
    name: "Publish your expense tracker",
    description: "Your tracker is ready to leave your computer. Create a GitHub repository, push the project, and check that a visitor can understand it.",
    requirements: ["Choose a clear repository name and description.", "Push your code and commit history to GitHub.", "Include a README with setup steps and an example.", "Open the repository page and verify the files look right."],
  },
  45: {
    name: "Publish a portfolio-ready project",
    description: "Pick the project you are proudest of, polish its README, and push it to GitHub. Your repository is your public showcase.",
    requirements: ["Use a clear repository name and description.", "Include features, requirements, run instructions, and an example.", "Push your latest code and verify it appears on GitHub.", "Share the repo link; a Python app needs a Python host to run online."],
  },
};

const storageKey = "pythonpath-progress-v1";
let state = loadState();
let activeDay = Math.max(1, Math.min(45, state.activeDay || nextUnfinishedDay()));

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(storageKey) || "{}");
    return {
      completed: Array.isArray(saved.completed) ? saved.completed.filter((day) => Number.isInteger(day) && day >= 1 && day <= 45) : [],
      activeDay: Number.isInteger(saved.activeDay) ? saved.activeDay : 1,
      prompted: Array.isArray(saved.prompted) ? saved.prompted : [],
    };
  } catch (error) {
    console.error("Could not read saved course progress:", error);
    return { completed: [], activeDay: 1, prompted: [] };
  }
}

function saveState() {
  try {
    localStorage.setItem(storageKey, JSON.stringify(state));
  } catch (error) {
    console.error("Could not save course progress:", error);
  }
}

function nextUnfinishedDay() {
  for (let day = 1; day <= 45; day += 1) {
    if (!state.completed.includes(day)) return day;
  }
  return 45;
}

function renderRoadmap() {
  const container = document.getElementById("week-list");
  container.innerHTML = weeks.map((week, index) => {
    const first = index * 7 + 1;
    const last = Math.min(first + 6, 45);
    const done = Array.from({ length: last - first + 1 }, (_, offset) => first + offset)
      .filter((day) => state.completed.includes(day)).length;
    const isActive = activeDay >= first && activeDay <= last;
    const isComplete = done === last - first + 1;
    return `<button type="button" class="week-item${isActive ? " active" : ""}${isComplete ? " complete" : ""}" data-week="${index}" aria-current="${isActive ? "step" : "false"}">
      <span class="week-number">${isComplete ? "✓" : String(index + 1).padStart(2, "0")}</span>
      <span class="week-copy"><strong>${week.title}</strong><small>${week.range} · ${week.theme}</small></span>
      <span class="week-check">${done}/${last - first + 1}</span>
    </button>`;
  }).join("");
  container.querySelectorAll("[data-week]").forEach((button) => {
    button.addEventListener("click", () => selectDay(Number(button.dataset.week) * 7 + 1));
  });
}

function renderLesson() {
  const [title, intro, learn, practice, checkpoint] = lessons[activeDay - 1];
  const weekIndex = Math.min(Math.floor((activeDay - 1) / 7), weeks.length - 1);
  const project = projects[activeDay];
  const complete = state.completed.includes(activeDay);
  const projectHtml = project ? `<div class="project-box">
    <div class="project-kicker">Build checkpoint · ${project.name}</div>
    <h3>${project.name}</h3>
    <p>${project.description}</p>
    <ul>${project.requirements.map((item) => `<li>${item}</li>`).join("")}</ul>
    ${project.solution ? `<button type="button" class="solution-toggle" id="solution-toggle">Show one possible solution</button><p class="solution" id="solution">${escapeHtml(project.solution)}</p>` : ""}
  </div>` : "";
  document.getElementById("lesson-content").innerHTML = `
    <div class="lesson-topline"><span class="day-chip">DAY ${String(activeDay).padStart(2, "0")} · ${weeks[weekIndex].title.toUpperCase()}</span><span class="lesson-count">${state.completed.length} / 45 complete</span></div>
    <h2>${title}</h2><p class="lesson-intro">${intro}</p>
    <section class="lesson-section"><div class="section-title"><span class="section-icon">✳</span>Learn</div><p>${learn}</p></section>
    <section class="lesson-section"><div class="section-title"><span class="section-icon">⌨</span>Try it</div><div class="practice-box"><p>${practice}</p></div></section>
    ${projectHtml}
    <section class="lesson-section"><div class="section-title"><span class="section-icon">✓</span>Done for today when…</div><p>${checkpoint}</p></section>
    <div class="lesson-actions"><button type="button" id="complete-button" class="complete-button${complete ? " done" : ""}">${complete ? "✓ Completed" : "○ Mark day complete"}</button>
      <div class="lesson-nav"><button type="button" class="nav-button" id="previous-day" ${activeDay === 1 ? "disabled" : ""}>← Previous</button><button type="button" class="nav-button" id="next-day" ${activeDay === 45 ? "disabled" : ""}>Next day →</button></div></div>`;

  document.getElementById("complete-button").addEventListener("click", toggleComplete);
  document.getElementById("previous-day").addEventListener("click", () => selectDay(activeDay - 1));
  document.getElementById("next-day").addEventListener("click", () => selectDay(activeDay + 1));
  const solutionToggle = document.getElementById("solution-toggle");
  if (solutionToggle) {
    solutionToggle.addEventListener("click", () => {
      const solution = document.getElementById("solution");
      const visible = solution.classList.toggle("visible");
      solutionToggle.textContent = visible ? "Hide possible solution" : "Show one possible solution";
    });
  }
  renderRoadmap();
  renderProgress();
}

function escapeHtml(text) {
  return text.replace(/[&<>"']/g, (character) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
  })[character]);
}

function selectDay(day) {
  if (day < 1 || day > 45) return;
  activeDay = day;
  state.activeDay = day;
  saveState();
  renderLesson();
  document.getElementById("course").scrollIntoView({ behavior: "smooth", block: "start" });
}

function renderProgress() {
  const count = state.completed.length;
  document.getElementById("progress-count").textContent = `${count} / 45 days`;
  document.getElementById("progress-bar").style.width = `${(count / 45) * 100}%`;
}

function toggleComplete() {
  const wasComplete = state.completed.includes(activeDay);
  if (wasComplete) {
    state.completed = state.completed.filter((day) => day !== activeDay);
  } else {
    state.completed.push(activeDay);
    state.completed.sort((a, b) => a - b);
  }
  saveState();
  renderLesson();
  if (!wasComplete && projects[activeDay] && !state.prompted.includes(activeDay)) {
    showProjectPrompt(activeDay);
  }
}

function showProjectPrompt(day) {
  const project = projects[day];
  state.prompted.push(day);
  saveState();
  document.getElementById("modal-title").textContent = `Ready to build your ${project.name.toLowerCase()}?`;
  document.getElementById("modal-description").textContent = `You've completed the learning steps. Now it's time to use them: ${project.description}`;
  document.getElementById("project-modal").hidden = false;
  document.getElementById("modal-start").onclick = () => {
    document.getElementById("project-modal").hidden = true;
    document.querySelector(".project-box")?.scrollIntoView({ behavior: "smooth", block: "center" });
  };
}

function closeModal() {
  document.getElementById("project-modal").hidden = true;
}

document.getElementById("modal-close").addEventListener("click", closeModal);
document.getElementById("modal-later").addEventListener("click", closeModal);
document.getElementById("project-modal").addEventListener("click", (event) => {
  if (event.target.id === "project-modal") closeModal();
});
document.querySelectorAll("[data-day-link]").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    selectDay(Number(link.dataset.dayLink));
  });
});

renderLesson();
