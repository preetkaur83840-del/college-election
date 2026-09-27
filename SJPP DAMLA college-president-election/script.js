let harshVotes = Number(localStorage.getItem("harshVotes")) || 0;
let kadeerVotes = Number(localStorage.getItem("kadeerVotes")) || 0;

function vote(candidateName) {
if (!confirm("Are you sure you want to vote for " + candidateName + "?")) {
    return;
}
    if (localStorage.getItem("hasVoted") === "true") {
        alert("You have already voted.");
        return;
    }

    if (candidateName === "HARSH") {
        harshVotes++;
        localStorage.setItem("harshVotes", harshVotes);
    } 
    else if (candidateName === "KADEER") {
        kadeerVotes++;
        localStorage.setItem("kadeerVotes", kadeerVotes);
    }

    localStorage.setItem("hasVoted", "true");
    document.querySelectorAll("button").forEach(function(button) {
    button.disabled = true;
});
document.getElementById("voteMessage").textContent =
    "✅ VOTE CAST SUCCESSFULLY!";
    document.getElementById("harshCount").textContent = harshVotes;
    document.getElementById("kadeerCount").textContent = kadeerVotes;

    alert("Your vote has been recorded for " + candidateName);
}

document.getElementById("harshCount").textContent = harshVotes;
document.getElementById("kadeerCount").textContent = kadeerVotes;