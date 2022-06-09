import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop("0xcD15aceA998b22AA83bbdE2D24861E1F20e0639D");

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "Never ending manhwa",
        description: "This NFT will give you access to ManhwaDAO!",
        image: readFileSync("scripts/assets/band.jpg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();