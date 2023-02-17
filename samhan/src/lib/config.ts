import { Api, JsonRpc, JsSignatureProvider } from 'ineryjs/dist/index.js';

const url = 'https://tas.blockchain-servers.world';

const json_rpc = new JsonRpc(url);
const private_key = '5JeAnutfUwSp2oK96Dpdy71Jm6vrnZUMVk1XauiSm6iZPdcepb9'; // this is my test account, don't worry
export const actor = 'samhan.lite';

export const account = 'samhan';
const signature = new JsSignatureProvider([private_key]);

export const api = new Api({
	rpc: json_rpc,
	signatureProvider: signature
});
