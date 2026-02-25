#!/usr/bin/env node
const FtpDeploy = require("ftp-deploy");
const path = require("path");
require("dotenv").config();

const ftpDeploy = new FtpDeploy();

const configFile = process.argv[2] || "ftp.live.json";
const config = require(path.join(__dirname, configFile));

// Replace environment variable placeholders
Object.keys(config).forEach((key) => {
  if (
    typeof config[key] === "string" &&
    config[key].startsWith("${") &&
    config[key].endsWith("}")
  ) {
    const envVar = config[key].slice(2, -1);
    config[key] = process.env[envVar];
  }
});

console.log(`\n📦 Starting FTP deployment with config: ${configFile}`);
console.log(`Host: ${config.host}`);
console.log(`Remote Root: ${config.remoteRoot}`);
console.log(`Local Root: ${config.localRoot}\n`);

ftpDeploy
  .deploy(config)
  .then((res) => {
    console.log("\n✅ Deployment finished successfully!");
    console.log("Files transferred:", res.length);
    process.exit(0);
  })
  .catch((err) => {
    console.error("\n❌ Deployment failed:", err);
    process.exit(1);
  });
