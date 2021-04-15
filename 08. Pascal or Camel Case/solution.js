function solve() {
  let input = Array.from((document.getElementById("text").value).toLowerCase());
  let conv = document.getElementById("naming-convention").value;

  for (let i = 0; i < input.length - 1; i++) {
    if (conv == "Camal Case") {
      if (input[i] == " ") {
        input[i + 1] = input[i + 1].toUpperCase();
        input.splice(i, 1);
      }

    } else if (conv == "Pascal Case") {
      input[0] = input[0].toUpperCase();
      if (input[i] == " ") {
        input[i + 1].toUpperCase();
        input[i + 1] = input[i + 1].toUpperCase();
        input.splice(i, 1);
      }
    }
  }
  if (conv != "Pascal Case" || conv != "Camal Case") {
    document.getElementById("result").textContent = "Error!";
  }
  let final = '';

  if (conv == "Pascal Case" || conv == "Camal Case") {
    for (let i = 0; i < input.length; i++) {
      final += input[i];
    }
    document.getElementById("result").textContent = final;
  }

}