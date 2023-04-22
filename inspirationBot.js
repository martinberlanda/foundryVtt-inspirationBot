let chatData = {};
let chatMessage = "";

// Get all active players
let players = game.users.filter(user => user.active && !user.isGM && user.character);

// Loop through each player and get their character sheet
players.forEach(player => {
  let character = player.character;

  // Check if the character sheet exists and has an "inspiration" field
  if (character && character.system.attributes.inspiration) {

    // Get the "inspiration" field value and add it to the chat message
    let inspirationValue = character.system.attributes.inspiration;
    let message = inspirationValue ? "Yes" : "No";
    chatMessage += `${character.name}: ${message}<br>`;
  }
});

// Set up the chat message data object
chatData.content = chatMessage;
chatData.speaker = ChatMessage.getSpeaker({alias: "Inspiration bot"});

// Send the chat message to the chat log
ChatMessage.create(chatData);
