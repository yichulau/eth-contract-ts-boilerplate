import { run, network} from 'hardhat';
import { networkConfig } from '../helper-hardhat-config'; 


const verify = async (contractAddress: any, args: any) =>{
    console.log("Verifying contract...");
  try {
    await run("verify:verify", {
      address: contractAddress,
      constructorArguments: args,
    });
  } catch (e: any) {
    if (e.message.toLowerCase().includes("already verified")) {
      console.log("Already verified!");
    } else {
      console.log(e);
    }
  }
}
export { verify };

