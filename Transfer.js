import { Secp256k1KeyIdentity } from '@dfinity/identity-secp256k1';
import { HttpAgent, Actor } from "@dfinity/agent";
import { Principal } from "@dfinity/principal";
import { IcrcLedgerCanister } from "@dfinity/ledger-icrc";
import fs from 'fs';

const pemFilePath = "aymer.pem";
const pemKey = fs.readFileSync(pemFilePath, "utf8");
const identity = Secp256k1KeyIdentity.fromPem(pemKey);

const agent = await HttpAgent.create({ identity });

const ledgerCanisterId = Principal.fromText("7unjh-aiaaa-aaaal-amtca-cai");

const { transfer } = IcrcLedgerCanister.create({
    agent,
    canisterId: ledgerCanisterId,
});

const transferParams = {
  to: {
    owner: Principal.fromText("34kx6-isdl4-pjkj6-l3vs5-bfmj5-fsxk3-up3uj-7mr2v-aejnl-cjjrl-3ae"), 
    subaccount: [],
  },
  fee: 0, 
  memo: null,
  from_subaccount: null,
  created_at_time: null,
  amount: 1000000, // 0.01 ICP

};

const returnVal = await transfer(transferParams);
console.log(returnVal);
