


$(document).ready(function() {
$('.modal').modal();


	web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"))
	var account;
	web3.eth.getAccounts().then((f) => {
		console.log(f)
		account=f[0]
	})

	abi = JSON.parse('[{"inputs":[{"internalType":"bytes32[]","name":"candidateNames","type":"bytes32[]"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"candidateList","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"candidate","type":"bytes32"}],"name":"totalVotesFor","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"candidate","type":"bytes32"}],"name":"validCandidate","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"candidate","type":"bytes32"}],"name":"voteForCandidate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"name":"votesReceived","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]')
	VotingContract = new web3.eth.Contract(abi);

	listOfCandidates = ['Sanat','Aniket','Mandar','Akshay']

	bytecode = '60806040523480156100115760006000fd5b506040516104c33803806104c3833981810160405260208110156100355760006000fd5b81019080805160405193929190846401000000008211156100565760006000fd5b8382019150602082018581111561006d5760006000fd5b825186602082028301116401000000008211171561008b5760006000fd5b8083526020830192505050908051906020019060200280838360005b838110156100c35780820151818401525b6020810190506100a7565b505050509050016040526020015050505b80600160005090805190602001906100ed9291906100f5565b505b50610176565b82805482825590600052602060002090810192821561013a579160200282015b82811115610139578251826000509060001916905591602001919060010190610115565b5b509050610147919061014b565b5090565b6101739190610155565b8082111561016f5760008181506000905550600101610155565b5090565b90565b61033e806101856000396000f3fe60806040523480156100115760006000fd5b506004361061005c5760003560e01c80632f265cf714610062578063392e6678146100a95780637021939f146100f4578063b13c744b1461013b578063cc9ab267146101865761005c565b60006000fd5b610093600480360360208110156100795760006000fd5b8101908080356000191690602001909291905050506101b9565b6040518082815260200191505060405180910390f35b6100da600480360360208110156100c05760006000fd5b810190808035600019169060200190929190505050610204565b604051808215151515815260200191505060405180910390f35b6101256004803603602081101561010b5760006000fd5b810190808035600019169060200190929190505050610275565b6040518082815260200191505060405180910390f35b610168600480360360208110156101525760006000fd5b8101908080359060200190929190505050610290565b60405180826000191660001916815260200191505060405180910390f35b6101b76004803603602081101561019d5760006000fd5b8101908080356000191690602001909291905050506102b8565b005b60006101ca8261020463ffffffff16565b15156101d65760006000fd5b6000600050600083600019166000191681526020019081526020016000206000505490506101ff565b919050565b60006000600090505b60016000508054905081101561026657826000191660016000508281548110151561023457fe5b906000526020600020900160005b5054600019161415610258576001915050610270565b5b808060010191505061020d565b5060009050610270565b919050565b60006000506020528060005260406000206000915090505481565b6001600050818154811015156102a257fe5b906000526020600020900160005b915090505481565b6102c78161020463ffffffff16565b15156102d35760006000fd5b600160006000506000836000191660001916815260200190815260200160002060008282825054019250508190909055505b5056fea26469706673582212200a02bbb3b5f13107452f934ce888233c173a9f1856b76fb60a45cbc05d77e80d64736f6c63430006040033'
		 
	// deployedContract = VotingContract.new(['Sanat','Aniket','Mandar','Akshay'],{data: byteCode, from: web3.eth.accounts[0], gas: 4700000})
		//  console.log(deployedContract)
		// contractInstance = VotingContract.at(deployedContract.address)

		// console.log(contractInstance)

		// deployedContract.deploy({
		// 	data: bytecode,
		// 	arguments: [listOfCandidates.map(name => web3.utils.asciiToHex(name))]
		//   }).send({
		// 	from: '0xcbfd671cAd60Ee024e78cfE04981375a27e6077e',
		// 	gas: 1500000,
		// 	gasPrice: web3.utils.toWei('0.00003', 'ether')
		//   }).then((newContractInstance) => {
		// 	deployedContract.options.address = newContractInstance.options.address
		// 	console.log(newContractInstance.options.address)
		// 	console.log(deployedContract.options.address)
		//   });

		VotingContract.options.address="0xcD5Fca46904248165c6b44D7D9cAD211A0267383";

	// contractInstance = VotingContract.at('0xa7fb89a3fe6927b6d272637b148775f6fee5a8cf');
	// // candidates = {"Rama": "candidate-1", "Nick": "candidate-2", "Jose": "candidate-3"}


	// check cookie
	function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
	}

	var aadhaar_list = {
		"300000000000" : "Akola",
		"738253734567" : "Bhandara"
	}

	var aadhaar = readCookie('aadhaar');

	console.log(aadhaar);
	var address = aadhaar_list[aadhaar];
	console.log(address);
	$('#loc_info').text('Location based on Aadhaar : '+ address)

	function disable() {
			$('#vote1').addClass( "disabled" );
		    $('#vote2').addClass( "disabled" );
		    $('#vote3').addClass( "disabled" );
		    $('#vote4').addClass( "disabled" );
		    
		    //logout
		    document.cookie = "show=John Doe; expires=Thu, 18 Dec 2013 12:00:00 UTC";
		    document.cookie = "aadhaar=John Doe; expires=Thu, 18 Dec 2013 12:00:00 UTC";
		    window.location = '/app';


	}
	// deployedContract.methods.voteForCandidate(web3.utils.asciiToHex('Sanat')).send({from: '0x35dFd5Bd433a70ed84195FaEf9ea95fC3F09a2e3'}).then((f) => console.log(f))
	$('#vote1').click(function(){
		VotingContract.methods.voteForCandidate(web3.utils.asciiToHex('Sanat')).send({from: '0x7E672dd6e4B057D6e0FAB530f2acc9757e2Ee7d6'}).then((f) => {
			console.log(f);
		    alert('vote submited to Sanat');
		    disable();
		    $('#loc_info').text('Vote submited successfully to Sanat')

		});
	})
	$('#vote2').click(function(){
		VotingContract.methods.voteForCandidate(web3.utils.asciiToHex('Aniket')).send({from: '0x7E672dd6e4B057D6e0FAB530f2acc9757e2Ee7d6'}).then((f) => {
		    alert('vote submited to Aniket');
		     disable();
		     $('#loc_info').text('Vote submited successfully to Aniket')
		});
	})
	$('#vote3').click(function(){
		VotingContract.methods.voteForCandidate(web3.utils.asciiToHex('Mandar')).send({from: '0x7E672dd6e4B057D6e0FAB530f2acc9757e2Ee7d6'}).then((f) => {
		    alert('vote submited to Mandar');
		     disable();
		      
		      $('#loc_info').text('Vote submited successfully to Mandar')
		});
	})
	$('#vote4').click(function(){
		VotingContract.methods.voteForCandidate(web3.utils.asciiToHex('Akshay')).send({from: '0x7E672dd6e4B057D6e0FAB530f2acc9757e2Ee7d6'}).then((f) => {
		    alert('vote submited to Akshay');
		     disable();
		     $('#loc_info').text('Vote submited successfully to Akshay')
		});
	})
});