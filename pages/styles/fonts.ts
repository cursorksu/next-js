import FontFaceObserver from 'fontfaceobserver';

export const Fonts = () => {
  const link = document.createElement('link');

  link.href = 'https://fonts.googleapis.com/css2?family=Comfortaa:wght@700&family=Raleway:wght@300&display=swapp';
  link.rel = 'stylesheet';

  document.head.appendChild(link);

  const comfortaa = new FontFaceObserver('Comfortaa');
  const raleway = new FontFaceObserver('Raleway');

  Promise.all([comfortaa.load(), raleway.load()]).then(function () {
    if (document.querySelector('h2')) {
      document.querySelector('h2').style.cssText = 'font-family: Comfortaa, sans-serif';
    }
    document.querySelector('body').style.cssText =   'font-family: Raleway, sans-serif';

    console.log('fonts')
  });
};

