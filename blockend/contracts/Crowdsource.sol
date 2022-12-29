// SPDX-License-Identifier: MIT-License
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

// Uncomment this line to use console.log
// import "hardhat/console.sol";


contract Crowdsource is ReentrancyGuard, Ownable {
    struct Contribution {
        uint256 code;
        uint256 points;
    }

    struct Badge {
        address badgeAddress;
        string link;
    }

    struct User {
        address userAddress;
        string username;
        uint256 contributionCount;
        uint256 totalPoints;
    }

    mapping(address => User) private Users;
    mapping(address => Contribution[]) private UsersContributions;
    mapping(address => Badge[]) private UsersBadges;


    // constructor () {

    // }

    // events
    event CreateUser(address indexed userAddress, string username, uint256 contributionCount, uint256 totalPoints);
    event GetUserContributions(Contribution[] contributions, uint256 count);


    function createUser() public {
        // user does not exists
        emit CreateUser(msg.sender, "", 0, 0);
        Users[msg.sender] = User(msg.sender, "", 0, 0);
    }

    function getUser() public view returns (User memory ) {
        // user exists
        return Users[msg.sender];
    }

    

    function addPointsToUser(uint256 _points) public payable {
        // user exists

        bool codeExist = false;
            
        for (uint256 i = 0; i < UsersContributions[msg.sender].length; i++) {
            if (UsersContributions[msg.sender][i].code == 0) {
                codeExist = true;
                if (UsersContributions[msg.sender][i].points == 0) {
                    Users[msg.sender].contributionCount += 1;
                }

                UsersContributions[msg.sender][i].points += _points;
                Users[msg.sender].totalPoints += _points;
            }
            
        }
        if (codeExist == false) {
            UsersContributions[msg.sender].push(Contribution(0, _points));
            Users[msg.sender].contributionCount += 1;
            Users[msg.sender].totalPoints += _points;
        }
    }

        

    function addContributionPointsToUser(uint256 _points, uint256 _code) public payable {
        // user exists
    
        bool codeExist = false;
        for (uint256 i = 0; i < UsersContributions[msg.sender].length; i++) {
            if (UsersContributions[msg.sender][i].code == _code) {
                codeExist = true;
                if (UsersContributions[msg.sender][i].points == 0) {
                    Users[msg.sender].contributionCount += 1;
                }

                UsersContributions[msg.sender][i].points += _points;
                Users[msg.sender].totalPoints += _points;
            }    
        }
        if (codeExist == false) {
            UsersContributions[msg.sender].push(Contribution(_code, _points));
            Users[msg.sender].contributionCount += 1;
            Users[msg.sender].totalPoints += _points;
        }   
    }

    function getUserTotalPoints() public view returns (uint256) {
        // user exists

        return Users[msg.sender].totalPoints;
    }

    function getUserContributions () public view returns(Contribution [] memory) {
        // user exists
        
        return UsersContributions[msg.sender];
    }

}