function checkPassword() {
    
    let password = document.getElementById("password").value;

    let result = "";
    let score = 0;

    // Check password length
    if (password.length >= 12) {
        result += "✅ Password length is good.<br>";
        score++;   
    } else {
        result += "❌ Password is too short.<br>";
    }

    // Check uppercase letters
    if (/[A-Z]/.test(password)) {
        result += "✅ Contain uppercase letters.<br>";
        score++;
    } else {
        result += "❌ No uppercase letters.<br>";
    }

    // Check lowercase letters
    if (/[a-z]/.test(password)) {
        result += "✅ Contains lowercase letters.<br>";
        score++;
    } else {
        result += "❌ No lowercase letters.<br>";
    }

    // Check numbers
    if (/[0-9]/.test(password)) {
        result += "✅ Contains numbers.<br>";
        score++;
    } else {
        result += "❌ No numbers.<br>";
    }

    // Check special characters
    if (/[@#$%&!]/.test(password)) {
        result += "✅ Contains special characters.<br>";
        score++;
    } else {
        result += "❌ No special characters.<br>";
    }

    let fill = document.getElementById("strength-fill");

    fill.style.width = (score * 20) + "%";

    if(score <= 2) {
        fill.style.backgroundColor = "red";
    }
    else if (score <= 4) {
        fill.style.backgroundColor = "orange";
    }
    else {
        fill.style.backgroundColor = "green";
    }

    // Display password score
        result += "<div class='score'>Password Score: " + score + "/5</div>";
    
    // Diaplay password
    if (score == 5) {
        result += "<div class='strength' style='color:green; font-size:20px;'><strong>🟢 Password Strength: Strong</strong></div>";
    }
    else if (score >= 3) {
        result += "<div class='strength' style='color:orange; font-size:20px;'><strong>🟡 Password Strength: Medium</strong></div>";
    }
    else {
        result += "<div class='strength' style='color:red; font-size:20px'><strong>🔴 Password Srength: Weak</strong></div>";
    }
    document.getElementById("result").innerHTML = result;
    }

    // Show / Hide Password
    function togglePassword() {
        let password = document.getElementById("password");

        if (password.type === "password") {
            password.type = "text";
        } else {
            password.type = "password"
        }
    }

    function clearPassword() {

        document.getElementById("password").value = "";
        document.getElementById("result").innerHTML = "";
    }