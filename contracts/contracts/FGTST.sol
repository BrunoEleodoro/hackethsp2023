pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract FGTS_Token is ERC20, Ownable {
    constructor() ERC20("FGTS Token", "FGTST") {}

    // Função para criar tokens e atribuí-los a um endereço específico
    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }

    // Função para queimar (remover) tokens de um endereço específico
    function burn(address from, uint256 amount) public onlyOwner {
        _burn(from, amount);
    }
}
