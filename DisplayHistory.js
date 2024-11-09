import { Secp256k1KeyIdentity } from '@dfinity/identity-secp256k1';
import { HttpAgent, Actor } from "@dfinity/agent";
import { Principal } from "@dfinity/principal";
import { IcrcIndexCanister } from "@dfinity/ledger-icrc";
import fs from 'fs';

const pemFilePath = "aymer.pem";
const pemKey = fs.readFileSync(pemFilePath, "utf8");
const identity = Secp256k1KeyIdentity.fromPem(pemKey);

const agent = await HttpAgent.create({ identity });

const ledgerCanisterId = Principal.fromText("6fhxy-yaaaa-aaaal-amthq-cai");

const { getTransactions } = IcrcIndexCanister.create({
    agent,
    canisterId: ledgerCanisterId,
});

const transactionParam = {
    account: { owner: Principal.fromText("34kx6-isdl4-pjkj6-l3vs5-bfmj5-fsxk3-up3uj-7mr2v-aejnl-cjjrl-3ae"), subaccount: null },
    start: null,
    max_results: 5,
};

const returnVal = await getTransactions(transactionParam);
// Use console.dir to log the entire return value with depth control
console.dir(returnVal, { depth: null, colors: true });
