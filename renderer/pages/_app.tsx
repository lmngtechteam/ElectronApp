import GlobalStyle from '../app/styles/globalStyle';
import { ThemeProvider } from 'styled-components';
import { useTheme } from 'app/theme/useTheme';
import { wrapper } from '../store/store';
import { useEffect } from "react";
import Layout from '../app/layout';
import Meta from '../app/components/meta';

import 'bootstrap-v4-rtl/dist/css/bootstrap-rtl.css';
import 'font-awesome/css/font-awesome.min.css';
// import '../app/assets/css/index.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const WrappedApp = ({ Component, pageProps }) => {
  const layoutType = Component.LayoutType || 'default';
  const layoutFluid = Component.LayoutFluid || false;
  const { theme } = useTheme();

  useEffect(() => {
    if("serviceWorker" in navigator) {
      window.addEventListener("load", function () {
       navigator.serviceWorker.register("/sw.js").then(
          function (registration) {
            console.log("Service Worker registration successful with scope: ", registration.scope);
          },
          function (err) {
            console.log("Service Worker registration failed: ", err);
          }
        );
      });
    }
  }, [])
  return (
      <ThemeProvider theme={theme}>
        <Meta />
        <GlobalStyle />
        <Layout type={layoutType} isFluid={layoutFluid}>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
  );
}

export default wrapper.withRedux(WrappedApp);
