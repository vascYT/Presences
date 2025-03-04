const presence = new Presence({
    clientId: "865212562130862120"
  }),
  timer = Math.floor(Date.now() / 1000);

presence.on("UpdateData", async () => {
  const presenceData: PresenceData = {
    largeImageKey: "gamee_logo",
    startTimestamp: timer
  },  

   {pathname, href} = location,
  [, , IDs] = pathname.split("/");

  if (pathname === "/") 
    presenceData.details = "Viewing homepage";
   else if (pathname.includes("/prizes")) 
    presenceData.details = "Viewing the prizes";
   else if (pathname.includes("/winners")) 
    presenceData.details = "Viewing the winners";
   else if (pathname.includes("/create-profile")) 
    presenceData.details = "Creating an account";
   else if (pathname.includes("/login")) 
    presenceData.details = "Logg  ing In";
   else if (pathname.includes("/phone-login")) 
    presenceData.details = "Logging in with a phone number";
   else if (pathname.includes("/reset-password")) 
    presenceData.details = "Resetting a password";
   else if (pathname === "/contest" || pathname === "/contest/") 
    presenceData.details = "Viewing Contest Page";
   else if (pathname.includes("/contest-rules")) {
    presenceData.details = "Reading the contest rules";
    presenceData.smallImageKey = "reading";
    presenceData.smallImageText = "Reading";
  } else if (pathname.includes("/squad")) 
    presenceData.details = "Viewing the squad";
   else if (pathname.includes("/terms-of-use")) {
    presenceData.details = "Reading the Terms Of Service";
    presenceData.smallImageKey = "reading";
    presenceData.smallImageText = "Reading";
  } else if (pathname.includes("/privacy")) {
    presenceData.details = "Reading the Privacy Policy";
    presenceData.smallImageKey = "reading";
    presenceData.smallImageText = "Reading";
  } else if (pathname.includes(`/profile/${IDs}`)) {
    const name = document.querySelector("#root > div.layout.layout--with-tab-bar.layout__profile-page > div.profile-page__container > div.profile-header > h1");

    presenceData.details = "Viewing a user's profile:";
    presenceData.state = name.textContent;
    presenceData.buttons = [
      {
        label: `View ${name.textContent}'s profile`,
        url: href
      }
    ];
  } else if (pathname.includes(`/game/${IDs}`)) {
    const gameName = document.querySelector("#root > div.game-page > div.game-detail > div.game-bar > div.game-bar__slot.game-bar__slot--left > h3");

    presenceData.details = "Playing a game:";
    presenceData.state = gameName.textContent;
  } 

  if (!presenceData.details) {
    presence.setTrayTitle();
    presence.setActivity();
  } else 
    presence.setActivity(presenceData);
  
});