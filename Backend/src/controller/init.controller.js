import fs from "fs/promises";
import path from "path";

export async function initRepo() {
  const repoPath = path.resolve(process.cwd(), ".YourGit");
  const commitPath = path.join(repoPath, "commits");

  try {
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server Error" });
  }
}
