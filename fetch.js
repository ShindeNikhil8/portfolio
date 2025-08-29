// fetch.js
const fs = require("fs");
const https = require("https");
require("dotenv").config();

const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;
const GITHUB_USERNAME = process.env.GITHUB_USERNAME;

// Example: fetch GitHub profile
if (GITHUB_USERNAME) {
  const data = JSON.stringify({
    query: `
    {
      user(login:"${GITHUB_USERNAME}") {
        name
        bio
      }
    }
    `
  });

  const options = {
    hostname: "api.github.com",
    path: "/graphql",
    method: "POST",
    headers: {
      Authorization: `Bearer ${GITHUB_TOKEN}`,
      "User-Agent": "Node"
    }
  };

  const req = https.request(options, (res) => {
    let result = "";
    res.on("data", (chunk) => (result += chunk));
    res.on("end", () => {
      fs.writeFileSync("./public/profile.json", result);
      console.log("Saved GitHub profile data!");
    });
  });

  req.on("error", console.error);
  req.write(data);
  req.end();
}
