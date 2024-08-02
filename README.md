<div align="center">
<a href="https://curencee.pro"><img src="public/logo.png" alt="logo" width="40px"></a>  
</div>

<div align="center">
<h1>Currencee</h1>
<p>The World's Most Trusted, Fast and Secure Currency Converter</p> 
</div>

<img src="https://res.cloudinary.com/victoreke/image/upload/v1722546085/currencee/cover.png">

<br />
<div align="center">
<a href="https://www.producthunt.com/posts/currencee?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-currencee" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=351079&theme=light" alt="Currencee - Trusted | Product Hunt" style="width: 190px; height: 54px;" width="250" height="54" /></a>
</div><br>

## Run project locally

This project utilizes a simple nodejs express backend which is hosted on Vercel to hide the API credentials. To run the project locally, follow the steps below:

- First generate your own API keys from [Currencybeacon](https://currencybeacon.com?ref=https://currencee.pro)
- Fork and clone the project to your machine.
- Rename `.env.example` in the `server` directory to `.env`
- Insert your API keys
- Run the commands below

```
npm install
npm start
```

This should start the backend server on [localhost:5000](http://localhost:5000)

## Vite App

With the server running, you can now run the converter locally,

- Rename `.env.example` to `.env`
- Set `VITE_API_URL` to the hosted backend URL (Only relevant for production)
- Run the commands below

```sh
npm install
npm run dev
```

Now you can visit [localhost:5173](http://localhost:5173) to see the project live.

## Server Endpoints

- Visit [localhost:8000/currency](http://localhost:8000/currency) to see the currency list
- Visit [localhost:8000/convert](http://localhost:8000/convert) to perform a conversion

> [!IMPORTANT]
> The convert endpoint takes in three parameters, a base currency code `base`, a foreign currency code `foreign`, and the `amount` you would like to convert.

Example endpoint

```
http://localhost:8000/convert?base=USD&foreign=NGN&amount=1
```

This should return an object that contains the conversion details.

> If you notice any bugs or errors, kindly raise an issue to discuss it. Contributions are also welcome.

## Attribution

The converter is powered by the [CurrencyBecacon API](https://currencybeacon.com), which supports over 161 commonly circulating world currencies listed [here](https://currencybeacon.com/supported-currencies). These cover 99% of all UN recognized states and territories.

The flags used are embedded using [Flagcdn](https://flagcdn.com/) which offers countries images based on their code.
