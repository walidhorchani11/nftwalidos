// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract NftMarket is ERC721URIStorage {

  using Counters for Counters.Counter;

  Counters.Counter private _tokenIds;
  mapping(string => bool) private _usedTokenURIs;

  constructor() ERC721("NFTdos","NFTDOS") {
  }

  function mintToken(string memory tokenURI) public payable returns (uint) {

    // verifier si tokenURI not used yet
    require(!isUsed(tokenURI));

    // generer new tokenId
    _tokenIds.increment();
    uint newTokenId = _tokenIds.current();

    // safeMint va augmenter le balance du owner(how many token sender have) 
    // faire la liaison entre sender et tokenId (NFT) :  0x452x2s5s.... => 8
    _safeMint(msg.sender, newTokenId);

    // faire la liaison entre tokenId (NFT) et tokenURI (metadata)
    _setTokenURI(newTokenId, tokenURI);

     // save tokenURI in mapping
    _usedTokenURIs[tokenURI] = true;

    return newTokenId;
  } 



  // verifier si tokenURI n'est pas deja utiliser et lié à un tokenId (NFT)
  function isUsed(string memory tokenURI) public view returns (bool) {
    return _usedTokenURIs[tokenURI] == true;
  }
}
