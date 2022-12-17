pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";

contract tuNFT is ERC721, ReentrancyGuard {
    using SafeMath for uint256;

    uint256 public songsCount = 0;
    address tuNFTMain = 0xF163e3641f1d63146D6fD0B1d9A5cdA5F0459223;
    
    constructor() ERC721("tuNFT", "TNFT") {}

    struct Link {
        string spotify;
        string appleMusic;
        string amazonMusic;
        string youtubeMusic;
    }

    struct Characteristic {
        string genre;
        string[] instruments;
        string typeOfLyrics;
        string songType;
        string frequency;
        string instrumentType;
        bool sampleBased;
    }

    struct Sales {
        address[] previousOwners;
        uint256[] previousPrices;
        uint256[] previousSaleTimes;
    }

    struct Hashes {
        string imgHash;
        string songHash;
        string descHash;
        string lyricsHash;
    }

    struct Song {
        uint256 id;
        string songName;
        string artistName;
        uint256 price;
        uint256 createTime;
        Hashes hashes;
        address payable artistAddress;
        address payable currentOwnerAddress;
        bool onSale;
        Sales sales;
        Link links;
        Characteristic characteristics;
    }

    mapping(uint256 => Song) private songs;

    event SongCreated(
        uint256 id,
        string songName,
        string artistName,
        uint256 price,
        uint256 createTime
    );

    event SongPurchased(
        uint256 id,
        string songName,
        string artistName,
        uint256 price,
        address payable artistAddress,
        address payable currentOwnerAddress,
        bool onSale
    );

    event SongUpdated(
        uint256 id,
        string songName,
        string artistName,
        uint256 price,
        address payable artistAddress,
        address payable currentOwnerAddress,
        bool onSale
    );

    event FundsTransferred(
        uint256 fundsTransferredToSeller,
        uint256 fundsTransferredToArtist
    );

    event FundsTransferredToArtist(uint256 fundsTransferredToArtist);

    function createSong(
        string memory _songName,
        string memory _artistName,
        uint256 _price,
        string memory _imgHash,
        string memory _songHash,
        string memory _descHash,
        string memory _lyricsHash,
        bool _onSale,
        Link memory _links,
        Characteristic memory _characteristics
    ) public nonReentrant {
        require(bytes(_songName).length > 0, "Song name cannot be empty");
        require(bytes(_artistName).length > 0, "Artist name cannot be empty");
        require(_price > 0, "Price must be at least 1 wei");
        require(bytes(_imgHash).length > 0, "Cover image must be provided");
        require(bytes(_songHash).length > 0, "Song must be provided");

        songsCount += 1;
        uint256 _createTime = block.timestamp;
        Sales memory _sales;

        songs[songsCount] = Song(
            songsCount,
            _songName,
            _artistName,
            _price,
            _createTime,
            Hashes(_imgHash, _songHash, _descHash, _lyricsHash),
            payable(msg.sender),
            payable(msg.sender),
            _onSale,
            _sales,
            _links,
            _characteristics
        );

        _safeMint(msg.sender, songsCount);
        emit SongCreated(
            songsCount,
            _songName,
            _artistName,
            _price,
            _createTime
        );
    }

}