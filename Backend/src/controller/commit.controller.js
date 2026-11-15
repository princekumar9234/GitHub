import fs from "fs/promises";
import path from "path";
import {v4 as uuidv4} from "uuid";

export async function commitRepo() {
  const repoPath = path.resolve(process.cwd(),".YourGit");
  const stagedPath = path.join(repoPath,"staging");
  const commitPath = path.join(repoPath,"commits");

  try {
    const commitID = uuidv4();
    const  commitDir = path.join(commitPath,commitID);
    await fs.mkdir(commitDir , {recursive : true}); 

    const files = await fs.readdir(stagedPath);
    for(const file of files ){
      await fs.copyFile(
        path.join(stagedPath,file),
        path.join(commitDir,file)
      );
    }

    await fs.writeFile(
      path.join(commitDir,"commit-json"),
      JSON.stringify({message,date: new data().toISOString()})
    );

    console.log(`commit ${commitID} created with message: ${message }`);
    
  } catch (error) {
    console.log("Error commiting files :",error);
    
  }
}
  