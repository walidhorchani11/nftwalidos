const NftMarket = artifacts.require('NftMarket');

contract("NftMarket", (accounts) => {
    //console.log("🚀 ~ file: NftMarket_test.js:5 ~ contract ~ accounts", accounts);
    let _contract;
    before(async () => {
        _contract = await NftMarket.deployed();
    })

    describe('MintToken', async()=> {
        const tokenURI = 'http://testwalidos.com'
        before(async()=> {
            // before test minToken , il faut l'executer
            const nftTokenId = await _contract.mintToken(tokenURI, {from: accounts[0]});
            console.log("🚀 ~ file: NftMarket_test.js:16 ~ before ~ nftTokenId", nftTokenId)

        })

        // test safeMint qui augmente balance of sender et fait la liaison entre owner et tokenId generé
        it('owner of first tokenId = NFT should be address 0 ', async()=> {
            // first tokenId is 1
            const owner = await _contract.ownerOf(1);
            console.log("🚀 ~ file: NftMarket_test.js:22 ~ it ~ owner", owner)
            assert.equal(owner, accounts[0], 'owner should be first accounts 0')
        })

        // test setTokenURI qui fait la liaison entre tokenId generé et tokenURI
        it('tokenURI for first tokenId = nFT  should be equal to our tokenURI', async()=> {
            const tokenURI_Recupered = await _contract.tokenURI(1);
            console.log("🚀 ~ file: NftMarket_test.js:30 ~ it ~ tokenURI_Recupered", tokenURI_Recupered)
            assert.equal(tokenURI_Recupered, tokenURI, 'should be equal ----')
        })
    })
    
})
