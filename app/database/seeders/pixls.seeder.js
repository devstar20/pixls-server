const { Seeder } = require('mongoose-data-seed');
const  Pixls  = require('../../models/pixls.model');

const data = [{
  tokenId: 1,
  artworkId: 1,  
  description: '',
  external_url: 'external url 1',
  image: 'https://gateway.ipfs.io/ipfs/QmTiDbf1iAvnmP1wERFKNf6EqbMKdFdZsS2eoVwkcmLgh5',
  hash_256: '',
  hash_ipfs: 'QmTiDbf1iAvnmP1wERFKNf6EqbMKdFdZsS2eoVwkcmLgh5',
  attributes: {
    hitchHiker: 'Pandar',
    rocket: 'The Bold Brrrr',
    moon: 'HalfMoon',
    window: 'Circle',
    pattern: 'Zig Zipper',
    baseColor: 'Green',
    colorScheme: 'Contrast',
    achromatic: 'Nope',
    dashedLines: 'Nope'
  }
},
{
  tokenId: 2,
  artworkId: 2,  
  description: '',
  external_url: 'external url 2',
  image: 'https://gateway.ipfs.io/ipfs/QmWFAsMxJSVsd3rEzgjjSncUPkxDfbswrkYy2aCn97qm9o',
  hash_256: '',
  hash_ipfs: 'QmWFAsMxJSVsd3rEzgjjSncUPkxDfbswrkYy2aCn97qm9o',
  attributes: {
    hitchHiker: 'Pandar',
    rocket: 'The Bold Brrrr',
    moon: 'HalfMoon',
    window: 'Circle',
    pattern: 'Zig Zipper',
    baseColor: 'Green',
    colorScheme: 'Contrast',
    achromatic: 'Nope',
    dashedLines: 'Nope'
  }
},
{
  tokenId: 3,
  artworkId: 3,  
  description: '',
  external_url: 'external url 3',
  image: 'https://gateway.ipfs.io/ipfs/Qmdb5aJZ2dmu2bmFyspaUYQUMT5YksNBSveobAu36YhSJ2',
  hash_256: '',
  hash_ipfs: 'Qmdb5aJZ2dmu2bmFyspaUYQUMT5YksNBSveobAu36YhSJ2',
  attributes: {
    hitchHiker: 'Pandar',
    rocket: 'The Bold Brrrr',
    moon: 'HalfMoon',
    window: 'Rectangle',
    pattern: 'Zig Zipper',
    baseColor: 'Blue',
    colorScheme: 'Contrast',
    achromatic: 'Nope',
    dashedLines: 'Nope'
  }
},
{
  tokenId: 4,
  artworkId: 4,  
  description: '',
  external_url: 'external url 4',
  image: 'https://gateway.ipfs.io/ipfs/QmbTpT8QENQ6NCNyPZZQjXywf3yiE8ndG3sH1Nu4iypKYf',
  hash_256: '',
  hash_ipfs: 'QmbTpT8QENQ6NCNyPZZQjXywf3yiE8ndG3sH1Nu4iypKYf',
  attributes: {
    hitchHiker: 'Cat',
    rocket: 'The Bold Brrrr',
    moon: 'Moon',
    window: 'Rectangle',
    pattern: 'Zig Zipper',
    baseColor: 'Red',
    colorScheme: 'Nope',
    achromatic: 'Nope',
    dashedLines: 'Nope'
  }
},
{
  tokenId: 5,
  artworkId: 5,  
  description: '',
  external_url: 'external url 5',
  image: 'https://gateway.ipfs.io/ipfs/QmQYvTxE4S4p6x23Kkf8EtarpEfW5FgXFrW46Ay7zmy7Vm',
  hash_256: '',
  hash_ipfs: 'QmQYvTxE4S4p6x23Kkf8EtarpEfW5FgXFrW46Ay7zmy7Vm',
  attributes: {
    hitchHiker: 'Dog',
    rocket: 'The Bold Brrrr',
    moon: 'Moon',
    window: 'Triangle',
    pattern: 'Zig Zipper',
    baseColor: 'lightblue',
    colorScheme: 'Nope',
    achromatic: 'Nope',
    dashedLines: 'Nope'
  }
},
{
  tokenId: 6,
  artworkId: 6,  
  description: '',
  external_url: 'external url 6',
  image: 'https://gateway.ipfs.io/ipfs/QmQJJRZ7SUtfnAGbZP9Qq4RE4B1sziBT5tnQarnRQHxgE6',
  hash_256: '',
  hash_ipfs: 'QmQJJRZ7SUtfnAGbZP9Qq4RE4B1sziBT5tnQarnRQHxgE6',
  attributes: {
    hitchHiker: 'Panda',
    rocket: 'The Bold Brrrr',
    moon: 'Moon',
    window: 'Triangle',
    pattern: 'Zig Zipper',
    baseColor: 'lightblue',
    colorScheme: 'Nope',
    achromatic: 'Nope',
    dashedLines: 'Nope'
  }
},

{
  tokenId: 7,
  artworkId: 7,  
  description: '',
  external_url: 'external url 7',
  image: 'https://gateway.ipfs.io/ipfs/QmXd4JjhhSgUztS8nkA8Hct2HkWB31XimHyykbJ1qUFC5w',
  hash_256: '',
  hash_ipfs: 'QmXd4JjhhSgUztS8nkA8Hct2HkWB31XimHyykbJ1qUFC5w',
  attributes: {
    hitchHiker: 'Panda',
    rocket: 'The Bold Brrrr',
    moon: 'Moon',
    window: 'Circle',
    pattern: 'Zig Zipper',
    baseColor: 'lightblue',
    colorScheme: 'Nope',
    achromatic: 'Nope',
    dashedLines: 'Nope'
  }
},

{
  tokenId: 8,
  artworkId: 8,  
  description: '',
  external_url: 'external url 8',
  image: 'https://gateway.ipfs.io/ipfs/QmdeaVQBvLcJuGPvqhehhyDy9qtoxLdP8tBQy3Bms4SFqr',
  hash_256: '',
  hash_ipfs: 'QmdeaVQBvLcJuGPvqhehhyDy9qtoxLdP8tBQy3Bms4SFqr',
  attributes: {
    hitchHiker: 'Cat',
    rocket: 'The Bold Brrrr',
    moon: 'Moon',
    window: 'Circle',
    pattern: 'Zig Zipper',
    baseColor: 'lightblue',
    colorScheme: 'Nope',
    achromatic: 'Nope',
    dashedLines: 'Nope'
  }
},
{
  tokenId: 9,
  artworkId: 9,  
  description: '',
  external_url: 'external url 9',
  image: 'https://gateway.ipfs.io/ipfs/QmP5kkhDMH964xoM7heU1LH7NTKFimJqwQFwiVvGgzVBRF',
  hash_256: '',
  hash_ipfs: 'QmP5kkhDMH964xoM7heU1LH7NTKFimJqwQFwiVvGgzVBRF',
  attributes: {
    hitchHiker: 'Cat',
    rocket: 'The Bold Brrrr',
    moon: 'HalfMoon',
    window: 'Rectangle',
    pattern: 'Zig Zipper',
    baseColor: 'lightblue',
    colorScheme: 'Nope',
    achromatic: 'Nope',
    dashedLines: 'Nope'
  }
},
{
  tokenId: 10,
  artworkId: 10,  
  description: '',
  external_url: 'external url 10',
  image: 'https://gateway.ipfs.io/ipfs/QmbHgsp6qnph4tCbQBiq4rrE5wdFp18eSv7C8iLJdcbs5B',
  hash_256: '',
  hash_ipfs: 'QmbHgsp6qnph4tCbQBiq4rrE5wdFp18eSv7C8iLJdcbs5B',
  attributes: {
    hitchHiker: 'Cat',
    rocket: 'The Bold Brrrr',
    moon: 'HalfMoon',
    window: 'Rectangle',
    pattern: 'Zig Zipper',
    baseColor: 'Red',
    colorScheme: 'Nope',
    achromatic: 'Nope',
    dashedLines: 'Nope'
  }
}
];

class PixlsSeeder extends Seeder {

  async shouldRun() {
    return Pixls.countDocuments().exec().then(count => count === 0);
  }

  async run() {
    return Pixls.create(data);
  }
}

module.exports = PixlsSeeder;
