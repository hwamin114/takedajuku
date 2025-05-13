import '../styles/globals.css'; // ← これを追加！！

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
