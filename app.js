const fs = require("fs"); //import filesystem module
const generatePage = require("./src/page-template.js");

// const profileDataArgs = process.argv.slice(2); removes the two referenced paths for node and filelaunch
const profileDataArgs = process.argv.slice(2, process.argv.length);
const [name, github] = profileDataArgs;

fs.writeFile('./index.html', generatePage(name, github), (err) => {
  if (err) throw new Error(err);
  console.log("Portfolio complete! Check out index.html to see the output!");
});
