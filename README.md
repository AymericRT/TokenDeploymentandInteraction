# Token Deployment and Interaction

Objectives:
- Minting
- Transfer
- Display History

## Minting
The Minting was done during the Initialization of the ICRC-1 Token :
``` bash
dfx deploy icrc1-ledger --argument "(variant { Init = record {
  token_symbol = \"ART\";
  token_name = \"Aymeric Russel Taylor\";
  minting_account = record { owner = principal \"$PRINCIPAL\" };
  transfer_fee = 10_000;
  metadata = vec {};
  initial_balances = vec { 
      record { 
        record { owner = principal \"$PRINCIPAL\"; }; 
        100_000_000_000_000; 
      }; 
    };
  archive_options = record {
    num_blocks_to_archive = 2000;
    trigger_threshold = 1000;
    controller_id = principal \"$PRINCIPAL\";
  };
}})"
```
The resources i used to deploy this ICRC1 Ledger along with the Index Canister were:
- https://github.com/dfinity/ic/tree/master/rs/ledger_suite/icrc1/ledger
- https://internetcomputer.org/docs/current/developer-docs/defi/tokens/indexes

Ther wasms were combined within the same dfx.json folder. Understand more on the Deployed [Token Folder](https://github.com/AymericRT/TokenDeploymentandInteraction/tree/main/Token%20Folder).


## Transfer
The code for transfering tokens using [`IC-JS`](https://github.com/dfinity/ic-js/tree/main/packages/ledger-icrc) can be found at [`Transfer.js`](./Transfer.js)

## Display History
The code for displaying history using [`IC-JS`](https://github.com/dfinity/ic-js/tree/main/packages/ledger-icrc) can be found at [`DisplayHistory.js`](./DisplayHistory.js)
