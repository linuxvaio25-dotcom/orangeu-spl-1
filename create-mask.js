const fs = require('fs');
const { createCanvas } = require('canvas');

// Create canvas with dimensions that fit your nav panel
const width = 420;
const height = 380;
const canvas = createCanvas(width, height);
const ctx = canvas.getContext('2d');

// Fill background with black (transparent areas)
ctx.fillStyle = '#000000';
ctx.fillRect(0, 0, width, height);

// Draw white shape (opaque areas where gradient shows)
ctx.fillStyle = '#ffffff';
ctx.beginPath();

// Create a custom rounded rectangle shape
const radius = 30;
const x = 10;
const y = 10;
const w = width - 20;
const h = height - 20;

// Rounded rectangle path
ctx.moveTo(x + radius, y);
ctx.lineTo(x + w - radius, y);
ctx.quadraticCurveTo(x + w, y, x + w, y + radius);
ctx.lineTo(x + w, y + h - radius);
ctx.quadraticCurveTo(x + w, y + h, x + w - radius, y + h);
ctx.lineTo(x + radius, y + h);
ctx.quadraticCurveTo(x, y + h, x, y + h - radius);
ctx.lineTo(x, y + radius);
ctx.quadraticCurveTo(x, y, x + radius, y);
ctx.closePath();
ctx.fill();

// Save the mask image
const buffer = canvas.toBuffer('image/png');
fs.writeFileSync('./public/navpanel-2.png', buffer);
console.log('Mask image created: public/navpanel-2.png');
