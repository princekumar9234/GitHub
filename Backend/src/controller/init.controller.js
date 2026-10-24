import fs from "fs/promises";
import path from "path"; //for our current folder path
import config from "../config/auth.config.js";

export async function initRepo() {
  /**
   * @description Create the folder to YourGit.
   */
  const repoPath = path.resolve(process.cwd(), ".YourGit");
  const commitPath = path.join(repoPath, "commits");

  try {
    await fs.mkdir(repoPath, { recursive: true }); //recurise means nested folder.
    await fs.mkdir(commitPath, { recursive: true });
    await fs.writeFile(
      path.join(repoPath, "config.json"),
      JSON.stringify({ bucket: config.S3_BUCKET }),
      console.log("config created"),
    );
    console.log("repository initialized!");
  } catch (error) {
    console.log(error);
    // return res.status(500).json({ message: "Internal server Error" });
  }
}
