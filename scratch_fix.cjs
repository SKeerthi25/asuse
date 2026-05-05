const fs = require('fs');
let file = fs.readFileSync('src/pages/Products.jsx', 'utf8');
let imgCounter = 1;
file = file.replace(/image:\s*'https:\/\/images\.unsplash\.com\/photo-[^']+',/g, () => {
    let rep = `image: img${imgCounter},`;
    imgCounter = imgCounter >= 10 ? 1 : imgCounter + 1;
    return rep;
});
fs.writeFileSync('src/pages/Products.jsx', file);
