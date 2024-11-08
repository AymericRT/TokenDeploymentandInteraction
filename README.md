# Token Deployment and Interaction

Objectives:
- Minting
- Transfer
- Display History

## Minting
The minting was done during deployment Time:
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
## Transfer
The code for transfering tokens can be found at Transfer.js

## Display History
The code for displaying history can be found at DisplayHistory.js
