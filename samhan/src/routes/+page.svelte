<script lang="ts">
	import { goto } from "$app/navigation";
    import Modal from "$lib/components/Modal.svelte";
    import { api_store } from "$lib/store";
    let api_result: {} = {res: "Please click button above"}

    let create_id: number
    let create_data: string

    let read_id: number

    let update_id: number
    let update_data: string

    let destroy_id: number

    async function create(){
        
        api_store.set(
            fetch("/api/create", {
                method: "POST",
                body: JSON.stringify({
                    id: create_id,
                    user: "samhan",
                    data: create_data
                }),
                headers:{
                    'content-type': 'application/json'
                }
            }).then((res) => {
                return res.json()
            })
        )
    }

    async function read(){
        api_store.set(
            fetch("/api/read", {
                method: "POST",
                body: JSON.stringify({
                    id: read_id,
                }),
                headers:{
                    'content-type': 'application/json'
                }
            }).then((res) => {
                return res.json()
            })
        )
    }

    async function update(){
        api_store.set(
            fetch("/api/update", {
                method: "POST",
                body: JSON.stringify({
                    id: update_id,
                    data: update_data
                }),
                headers:{
                    'content-type': 'application/json'
                }
            }).then((res) => {
                return res.json()
            })
        )
    }

    async function destroy(){
        api_store.set(
            fetch("/api/destroy", {
                method: "POST",
                body: JSON.stringify({
                    id: destroy_id,
                }),
                headers:{
                    'content-type': 'application/json'
                }
            }).then((res) => {
                return res.json()
            })
        )

    }

</script>

<svelte:head>
    <title>samhan Dapp</title>
</svelte:head>

<div class="container  mx-auto min-h-screen px-20 pb-20 pt-20">
    <div class="flex justify-center">
        <div on:click={() => goto("https://twitter.com/natashacrown8")} class="avatar relative cursor-pointer mb-4">
            <div class="w-8 h-8 rounded-full absolute z-20 bottom-0 right-0">
                <img src="https://i.ibb.co/Z2TFhnC/icons8-twitter-squared-64.png" />
            </div>
            <div class="w-24 mask mask-square bordered">
              <img src="https://i.ibb.co/wwHP2sc/icons8-person-94.png" />
            </div>
          </div>
    </div>
    <div class="mb-10 text-center">
        <div class="text-4xl  animate__animated animate__fadeIn animate__delay-1s text-purple-400 font-bold ">
        SAMHAN DAPPS INERY
        </div>
        <div class="mt-4  animate__animated animate__fadeIn animate__delay-1s text-black ">Please use the button below to execute a simple transaction with Inery Blockchain <br> And after the transaction is complete, the log will be shown below</div>
    </div>

    <div class="grid animate__animated animate__fadeIn animate__delay-2s grid-cols-4 gap-4">
        <label for="modal-create" class="btn bg-purple text-brown-500  btn-error">Build</label>
        <label for="modal-read" class="btn bg-purple text-brown-500 btn-error">View</label>
        <label for="modal-update" class="btn bg-purple text-brown-500 btn-error">Update</label>
        <label for="modal-destroy" class="btn bg-purple text-brown-500 btn-error">Delete</label>
    </div>
    
    <div class="divider"></div>

    <!-- detailed -->
    <div class="mockup-code  animate__animated animate__fadeIn animate__delay-3s">
        {#await $api_store}
            <pre data-prefix="$"><code>Please wait..</code></pre>    
        {:then api} 
            <pre data-prefix="$"><code>{JSON.stringify(api, null, 4)}</code></pre>    
        {/await}
    </div>
</div>

<Modal modal_id="modal-create" modal_title="Build New Record on Inery" on:click={() => create()}>
    <div slot="body" class="flex flex-col gap-4">
        <input bind:value={create_id} type="text" placeholder="Type ID" class="input input-bordered w-full max-w-xs" />
        <input type="text" placeholder="samhan" class="input input-bordered w-full max-w-xs" disabled />
        <textarea bind:value={create_data} class="textarea textarea-bordered w-full" placeholder="Type the details"></textarea>
    </div>
</Modal>

<Modal modal_id="modal-read" modal_title="View Record by ID" on:click={() => read()}>
    <div slot="body" class="flex flex-col gap-4">
        <input bind:value={read_id} type="text" placeholder="Type ID" class="input input-bordered w-full max-w-xs" />
    </div>
</Modal>

<Modal modal_id="modal-update" modal_title="Update Record by ID" on:click={() => update()}>
    <div slot="body" class="flex flex-col gap-4">
        <input bind:value={update_id} type="text" placeholder="Type ID" class="input input-bordered w-full max-w-xs" />
        <textarea bind:value={update_data} class="textarea textarea-bordered w-full" placeholder="Type the data..."></textarea>
    </div>
</Modal>

<Modal modal_id="modal-destroy" modal_title="Delete Record by ID" on:click={() => destroy()}>
    <div slot="body" class="flex flex-col gap-4">
        <input bind:value={destroy_id} type="text" placeholder="Type ID" class="input input-bordered w-full max-w-xs" />
    </div>
</Modal>
