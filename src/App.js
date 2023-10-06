import React from 'react';
import './App.css';
import MonaLisaImage from './components/MonaLisaImage.jpg';

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <ul>
            <li><a href="https://www.youtube.com/">Ссылка 1</a></li>
            <li><a href="http://localhost:3000/#">Ссылка 2</a></li>
            <li><a href="https://www.google.com/search?q=%D0%BF%D0%B5%D0%B9%D0%B6%D0%B0%D0%B7+%D1%81%D0%BA%D0%B0%D1%87%D0%B0%D1%82%D1%8C+%D0%BF%D0%B5%D1%81%D0%B5%D0%BD%D0%BA%D1%83+%D0%B1%D0%B5%D1%81%D0%BF%D0%BB%D0%B0%D1%82%D0%BD%D0%BE&tbm=isch&ved=2ahUKEwjlw8D_luGBAxUZAxAIHTJwBoUQ2-cCegQIABAA&oq=%D0%BF%D0%B5%D0%B9%D0%B6%D0%B0%D0%B7+%D1%81%D0%BA%D0%B0%D1%87%D0%B0%D1%82%D1%8C+%D0%B1%D0%B5%D1%81%D0%BF%D0%BB%D0%B0%D1%82%D0%BD%D0%BE&gs_lcp=CgNpbWcQA1AAWNIcYNMeaABwAHgAgAGzA4gBnAuSAQcwLjcuNC0xmAEAoAEBqgELZ3dzLXdpei1pbWfAAQE&sclient=img&ei=3twfZeXcFpmGwPAPsuCZqAg&bih=803&biw=1470&rlz=1C5CHFA_enKG1058KG1058&hl=ru#imgrc=g1JqlRxKmLxsMM">Ссылка 3</a></li>
          </ul>
        </nav>
      </header>

      <section className="slider">
        {}
        <h1>MonaLisa</h1>
      </section>

      <footer>
        <div className="footer-links">
          <ul>
            <li><a href="https://www.google.com/search?q=%D0%BC%D0%BE%D0%BD%D0%B0%D0%BB%D0%B8%D0%B7%D0%B0&rlz=1C5CHFA_enKG1058KG1058&oq=%D0%BC%D0%BE%D0%BD%D0%B0%D0%BB%D0%B8&gs_lcrp=EgZjaHJvbWUqBwgBEAAYgAQyBwgAEAAYgAQyBwgBEAAYgAQyBggCEEUYOTIJCAMQABgKGIAEMgkIBBAAGAoYgAQyCQgFEAAYChiABDIPCAYQLhgKGK8BGMcBGIAEMgkIBxAAGAoYgAQyCQgIEAAYChiABDIJCAkQABgKGIAE0gEINzc4NmowajeoAgCwAgA&sourceid=chrome&ie=UTF-8"><h3>Музей Лувра — самый посещаемый музей в мире. Он стал рекордсменом по посещаемости: 10 миллионов туристов созерцали искусство в 2012 году.</h3></a></li>
            <li><a href="#https://www.google.com/search?q=%D0%BC%D0%BE%D0%BD%D0%B0%D0%BB%D0%B8%D0%B7%D0%B0&rlz=1C5CHFA_enKG1058KG1058&oq=%D0%BC%D0%BE%D0%BD%D0%B0%D0%BB%D0%B8&gs_lcrp=EgZjaHJvbWUqBwgBEAAYgAQyBwgAEAAYgAQyBwgBEAAYgAQyBggCEEUYOTIJCAMQABgKGIAEMgkIBBAAGAoYgAQyCQgFEAAYChiABDIPCAYQLhgKGK8BGMcBGIAEMgkIBxAAGAoYgAQyCQgIEAAYChiABDIJCAkQABgKGIAE0gEINzc4NmowajeoAgCwAgA&sourceid=chrome&ie=UTF-8"><h3>Картина «Мона Лиза» Леонардо да Винчи</h3></a></li>
            <li><a href="#https://www.google.com/search?q=%D0%BC%D0%BE%D0%BD%D0%B0%D0%BB%D0%B8%D0%B7%D0%B0&rlz=1C5CHFA_enKG1058KG1058&oq=%D0%BC%D0%BE%D0%BD%D0%B0%D0%BB%D0%B8&gs_lcrp=EgZjaHJvbWUqBwgBEAAYgAQyBwgAEAAYgAQyBwgBEAAYgAQyBggCEEUYOTIJCAMQABgKGIAEMgkIBBAAGAoYgAQyCQgFEAAYChiABDIPCAYQLhgKGK8BGMcBGIAEMgkIBxAAGAoYgAQyCQgIEAAYChiABDIJCAkQABgKGIAE0gEINzc4NmowajeoAgCwAgA&sourceid=chrome&ie=UTF-8"><h3>«Лувр» в переводе с французского означает волчий лес.</h3></a></li>
          </ul>
        </div>
        <div className="social-icons">
          <a href="#"><img src={MonaLisaImage} alt="Mona Lisa" style={{ width: '150px', height: 'auto' }} /></a>
          <a href="#"><img src={MonaLisaImage} alt="Mona Lisa" style={{ width: '150px', height: 'auto' }} /></a>
          <a href="#"><img src={MonaLisaImage} alt="Mona Lisa" style={{ width: '150px', height: 'auto' }} /></a>
        </div>
      </footer>
    </div>
  );
}

export default App;
