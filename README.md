
# My Coffee Shop — GitHub Pages Starter

A clean, monochrome website for a coffee shop using **black, white, and quicksilver** with the **Montserrat** font.

## 1) How to publish on GitHub Pages
1. Create a public repository (e.g., `coffee-shop-site`).
2. Upload all files from this folder to the repository root.
3. Go to **Settings → Pages**.
4. Under **Source**, select the `main` branch and the `/root` folder, then **Save**.
5. After a minute, your site will be live at `https://YOUR-USERNAME.github.io/REPO-NAME`.

## 2) Enable the Order Form
This template uses **Formspree** to send orders via email.
1. Sign up at https://formspree.io/ and create a new form.
2. Copy your form endpoint (looks like `https://formspree.io/f/abcdefg`).
3. Open `order.html` and replace `YOUR_FORM_ID` in the `action` attribute with your endpoint ID (e.g., `https://formspree.io/f/abcdefg`).

> Tip: On the free plan, Formspree sends submissions to your email and supports basic spam protection.

## 3) Customize
- **Shop name**: Edit the text `My Coffee Shop` in `index.html`, `menu.html`, and `order.html`.
- **Contact details**: Update phone, email, and address in `index.html`.
- **Menu & prices**: Edit items in `menu.html` and `order.html` (the quantities/prices are in the form inputs with `data-price`).
- **Branding**: Replace `assets/logo.svg` and `assets/favicon.svg` with your own artwork if you like.

## 4) Local testing
Double-click `index.html` to open in your browser. Everything is static and works without a server.

## 5) Structure
```
/ (root)
  index.html
  menu.html
  order.html
  style.css
  script.js
  /assets
    logo.svg
    favicon.svg
```

## 6) License
This starter is free to use and modify. No attribution required.
