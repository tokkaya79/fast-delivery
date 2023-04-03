//для футера к низу экрана
// import {useEffect} from 'react';
// import AdjustFooter from '../../components/footer/AdjustFooter';

//     useEffect(() => {
//     AdjustFooter();
//     window.addEventListener('resize', AdjustFooter);
//     return () => {
//       window.removeEventListener('resize', AdjustFooter);
//     };
//   }, []);


function AdjustFooter() {
    const body = document.body;
    const html = document.documentElement;
    const height = Math.max(
        body.scrollHeight,
        body.offsetHeight,
        html.clientHeight,
        html.scrollHeight,
        html.offsetHeight
    );

    const footer = document.getElementById('footer');

    if (footer) {
        if (height > window.innerHeight) {
            footer.style.position = 'relative';
        } else {
            footer.style.position = 'absolute';
            footer.style.bottom = '0';
            footer.style.width = '100%';
        }
    }
}

export default AdjustFooter;
