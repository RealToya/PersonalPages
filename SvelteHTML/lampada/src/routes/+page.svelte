<script lang="pt">
    let isTurnOn = false;

	function Toggle() {
		isTurnOn = !isTurnOn;
	}
</script>

    <title>Lamp Page</title>
    
    <div class="divwrap">
        <div id="maincontainer">
            <div class="Lamp">
                <img src={isTurnOn ? "bulb-on.png" : "bulb-off.png"} alt="lamponandoff"/>
            </div>
            <button on:click={Toggle}>
                {isTurnOn ? "Turned On" : "Turned Off"} <!-- Operação ternária if true else false-->
            </button>
        </div>
    </div>


<style>
    
  .divwrap {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100vh; /* tamanho do wrap é 100% do tamanho da viewport do browser */
		background-color: #111111;
	}

    #maincontainer {
		text-align: center;
	}

	img {
		width: 250px;
		margin-bottom: 25px;
	}

	button {
		margin: auto;
		padding: 10px 20px;
		font-size: 15px;
		cursor: pointer;
	}

</style>