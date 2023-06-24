pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract LoanContract is Ownable {
    IERC20 public fgtsToken;
    IERC20 public realDigitalToken;

    mapping(address => uint256) public deposits;

    constructor(IERC20 _fgtsToken, IERC20 _realDigitalToken) {
        fgtsToken = _fgtsToken;
        realDigitalToken = _realDigitalToken;
    }

    function deposit(uint256 _amount) public {
        // Transfere o token FGTS do usuário para este contrato
        fgtsToken.transferFrom(msg.sender, address(this), _amount);

        // Registra o valor depositado
        deposits[msg.sender] += _amount;
    }

    function borrow(uint256 _amount) public {
        uint256 maxBorrow = (deposits[msg.sender] * 75) / 100;
        require(
            _amount <= maxBorrow,
            "You cannot borrow more than 75% of your collateral!"
        );

        // Transfere o token RealDigital deste contrato para o usuário
        realDigitalToken.transfer(msg.sender, _amount);
    }
}
