var darkBtn = document.getElementById("darkBtn");
if (darkBtn) {
  darkBtn.onclick = function () {
    document.body.classList.toggle("dark");
  };
}

var workouts = {
    1: ["Strength - 6pm"],
    2: ["HIIT - 7pm"],
    3: ["Yoga - 6pm"],
    4: ["Upper Body - 7pm"],
    5: ["Lower Body - 6pm"],
  
    6: ["Bootcamp - 9am"],
    7: ["Mobility & Stretch - 10am"],
  
    8: ["Strength - 6pm"],
    9: ["Strength - 6pm", "Core - 7pm"],
    10: ["Yoga - 6pm"],
    11: ["HIIT - 7pm"],
    12: ["Full Body - 6pm"],
  
    13: ["Open Gym - 9am"],
    14: ["Open Gym - 10am"],
  
    15: ["Upper Body - 6pm"],
    16: ["HIIT - 7pm"],
    17: ["Yoga - 6pm"],
    18: ["Lower Body - 7pm"],
    19: ["Full Body - 6pm"],
  
    20: ["Bootcamp - 9am"],
    21: ["Mobility & Stretch - 10am"],
  
    22: ["Strength - 6pm"],
    23: ["HIIT - 7pm"],
    24: ["Light Cardio - 10am"],
    25: ["Closed"],
    26: ["Full Body - 10am"],
  
    27: ["Open Gym - 9am"],
    28: ["Open Gym - 10am"],
  
    29: ["Upper Body - 6pm"],
    30: ["HIIT - 7pm"],
    31: ["Yoga - 10am"]
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




