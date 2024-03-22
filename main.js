document.addEventListener("DOMContentLoaded", function () {
  const input = document.getElementById("input_nilai");
  const buttons = document.querySelectorAll("button");

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      const value = button.getAttribute("value");

      if (value === "=") {
        try {
          input.value = eval(input.value);
        } catch (erro) {
          input.value = "error";
        }
      } else if (value === "C") {
        input.value = "";
      } else {
        input.value += value;
      }
    });
  });
});
