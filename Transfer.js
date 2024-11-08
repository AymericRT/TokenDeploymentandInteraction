// Transfer
import { Secp256k1KeyIdentity } from '@dfinity/identity-secp256k1';
import { HttpAgent, Actor, } from "@dfinity/agent";
import { Principal } from "@dfinity/principal";

import idlFactory from "./idlFactory.js";
import fs from 'fs';

const pemFilePath = "aymer.pem";
const pemKey = fs.readFileSync(pemFilePath, "utf8");
const identity = Secp256k1KeyIdentity.fromPem(pemKey)

const agent = await HttpAgent.create({ identity });


// START Transfer Tokens

const ledgerCanisterId = Principal.fromText("7unjh-aiaaa-aaaal-amtca-cai"); // Ledger canister ID
const actor = Actor.createActor(idlFactory, { //idlFactory contains the candid
  agent,
  canisterId: ledgerCanisterId,
});

const ReceiverPrincipal = Principal.fromText("34kx6-isdl4-pjkj6-l3vs5-bfmj5-fsxk3-up3uj-7mr2v-aejnl-cjjrl-3ae");

const TransferArg = {
    'to': {
        'owner': ReceiverPrincipal, // ReceiverPrincipal should be a valid Principal here
        'subaccount': [],           // Empty array if subaccount isn't used
    },
    'fee': [],
    'memo': [],
    'from_subaccount': [],         // Empty if not used
    'created_at_time': [],         // Empty if not used
    'amount': 1_000_000_000,
};

try {
    const result = await actor.icrc1_transfer(TransferArg);
    console.log("Transfer result:", result);
} catch (error) {
    console.error("Error :", error);
}

// END Tranfser Tokens

