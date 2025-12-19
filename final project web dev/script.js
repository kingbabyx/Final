var darkBtn = document.getElementById("darkBtn");
if (darkBtn) {
  darkBtn.onclick = function () {
    document.body.classList.toggle("dark");
  };
}

var workouts = {
  2: ["HIIT - 7pm"],
  6: ["Open Gym - 10am"],
  13: ["Open Gym - 10am"],
  20: ["Open Gym - 10am"],
  27: ["Open Gym - 10am"],
  9: ["Strength - 6pm", "Core - 7pm"],
  25: ["Closed"],
  31: ["Closed"]
};

var grid = document.getElementById("calGrid");
if (grid) {
  var firstDay = new Date(2025, 11, 1).getDay();

  for (var i = 0; i < firstDay; i++) {
    var empty = document.createElement("div");
    empty.className = "empty";
    grid.appendChild(empty);
  }

  for (var d = 1; d <= 31; d++) {
    var cell = document.createElement("div");
    cell.className = "day";
    cell.innerHTML = d;

    if (workouts[d]) {
      for (var j = 0; j < workouts[d].length; j++) {
        var w = document.createElement("div");
        w.className = "workout";
        w.innerHTML = workouts[d][j];
        cell.appendChild(w);
      }
    }

    grid.appendChild(cell);
  }
}

var submitBtn = document.getElementById("submitBtn");
var clearBtn = document.getElementById("clearBtn");

function allFieldsFilled(fields) {
  for (var i = 0; i < fields.length; i++) {
    if (fields[i] == "") {
      return false;
    }
  }
  return true;
}

function emailValid(email) {
  if (email.indexOf("@") == -1 || email.indexOf(".") == -1) {
    return false;
  }
  return true;
}

function phoneValid(phone) {
  if (phone.length != 10) {
    return false;
  }
  for (var i = 0; i < phone.length; i++) {
    if (phone[i] < "0" || phone[i] > "9") {
      return false;
    }
  }
  return true;
}

function ageValid(age) {
  if (age < 16 || age > 100) {
    return false;
  }
  return true;
}

if (submitBtn && clearBtn) {
  submitBtn.onclick = function () {
    var name = document.getElementById("fullName").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var membership = document.getElementById("membership").value;
    var goals = document.getElementById("goals").value;
    var age = document.getElementById("age").value;
    var extra1 = document.getElementById("extra1").value;
    var extra2 = document.getElementById("extra2").value;

    var fields = [name, email, phone, membership, goals, age, extra1, extra2];

    if (!allFieldsFilled(fields)) {
      alert("All fields must be filled out.");
      return;
    }

    if (!emailValid(email)) {
      alert("Email format is invalid.");
      return;
    }

    if (!phoneValid(phone)) {
      alert("Phone number must be 10 digits.");
      return;
    }

    if (!ageValid(age)) {
      alert("Age must be between 16 and 100.");
      return;
    }

    alert("Submitted!");
  };

  clearBtn.onclick = function () {
    document.getElementById("regForm").reset();
  };
}




