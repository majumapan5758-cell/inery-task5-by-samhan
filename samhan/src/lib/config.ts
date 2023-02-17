import { Api, JsonRpc, JsSignatureProvider } from 'ineryjs/dist/index.js';

const url = 'https://tas.blockchain-servers.world';

const json_rpc = new JsonRpc(url);
const private_key = '5JT25ui79CLhBr8MutEwLTgxyAR2vPmXx2yahHSjBDYCnmNUKpk'; // this is my test account, don't worry
export const actor = 'samhan';

export const account = 'agustina';
const signature = new JsSignatureProvider([private_key]);

export const api = new Api({
	rpc: json_rpc,
	signatureProvider: signature
});
