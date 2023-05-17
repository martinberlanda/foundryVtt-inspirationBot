let chatData = {};
let chatMessage = "";

// Get all active players
let players = game.users.filter(user => user.active && !user.isGM && user.character);

if (players.length == 0) {
  chatMessage = "No players connected"
} else {
  chatMessage = "Characters with Inspiration:<br>"
  // Loop through each player and get their character sheet
  players.forEach(player => {
    let character = player.character;

    // Check if the character sheet exists and has inspiration
    if (character && character.system.attributes.inspiration) {
      // Adds the character to the message
      chatMessage += `${character.name}<br>`;
    }
  });
}

// Set up the chat message data object
chatData.content = chatMessage;
chatData.speaker = ChatMessage.getSpeaker({ alias: "Inspiration bot" });

// Send the chat message to the chat log
ChatMessage.create(chatData);
