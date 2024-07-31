import puppeteer from "puppeteer";

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("http://localhost:4321", { waitUntil: "networkidle2" });

  await page.pdf({
    path: "./public/Mayorov Max CV.pdf",
    format: "A4",
    printBackground: true,
    margin: {
      top: "20mm",
      bottom: "20mm",
      left: "10mm",
      right: "10mm",
    },
  });

  await browser.close();
})();
