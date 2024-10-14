"use strict";

const region1 = [1540, 1130, 1580, 1105];
const region2 = [2010, 1168, 2305, 4102];
const region3 = [2450, 1847, 2710, 2391];
const region4 = [1845, 1491, 1284, 1575];
const region5 = [2120, 1767, 1599, 3888];

const q1 = parseInt(region1[0] + region2[0] + region3[0] + region4[0] + region5[0]);
const q2 = parseInt(region1[1] + region2[1] + region3[1] + region4[1] + region5[1]);
const q3 = parseInt(region1[2] + region2[2] + region3[2] + region4[2] + region5[2]);
const q4 = parseInt(region1[3] + region2[3] + region3[3] + region4[3] + region5[3]);

const r1total = parseInt(region1[0] + region1[1] + region1[2] + region1[3]);
const r2total = parseInt(region2[0] + region2[1] + region2[2] + region2[3]);
const r3total = parseInt(region3[0] + region3[1] + region3[2] + region3[3]);
const r4total = parseInt(region4[0] + region4[1] + region4[2] + region4[3]);
const r5total = parseInt(region5[0] + region5[1] + region5[2] + region5[3]);

const total = parseInt(q1 + q2 + q3 + q4);

document.write(`<h2>Sales by Quarter</h2>`);

document.write(`<div>
                  <p>Q1: $${q1}</p>
                  <p>Q2: $${q2}</p>
                  <p>Q3: $${q3}</p>
                  <p>Q4: $${q4}</p>
                </div>`);

document.write(`<h2>Sales by Quarter</h2>`);

document.write(`<div>
                  <p>Region 1: $${r1total}</p>
                  <p>Region 2: $${r2total}</p>
                  <p>Region 3: $${r3total}</p>
                  <p>Region 4: $${r4total}</p>
                  <p>Region 5: $${r5total}</p>
                </div>`);

document.write(`<h2>Total Sales</h2>`);

document.write(`$${total}`)