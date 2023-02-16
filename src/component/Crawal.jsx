import puppeteer from "puppeteer";
import React from "react";

const Crawal = () => {
    async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://datalab.labangba.com/recruit');
  
  const tbody = await page.$('tbody');
  const tbodyHtml = await page.evaluate(tbody => tbody.innerHTML, tbody);
  console.log(tbodyHtml);
  return <div></div>;
};

export default Crawal;
