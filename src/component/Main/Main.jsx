import React from 'react'
import './Main.css'
const Main = () => {
  return (
    <main>
      <section class="welcome-section">
        <div class="container-welcome">
          <img src="./image/icons/sdct-removebg-preview.png" alt="Student Chat Logo" class="logo" width="47" />
          <div class="welcome-text">Welcome to Student Chat</div>
        </div>        
      </section>
        <section class="active">
                <div class="home-wrapper">
                    <h2 class="home-title">О нас</h2>
                    <p class="home-text">Мы первый сайт который был создан для
                        студентов,учеников из разных школ и классов,кто
                        собирается поступать в вузы/институты и колледжи.
                        Здесь вы можете практически все.Практически имеем
                        ввиду,помогать друг-другу с поступление,советоваться с
                        нашими учителями а так же делиться опытом если вы
                        уже поступил,потому что это поможет другим.
                        Здесь вы так-же сможете найти информацию о IELTS и еще материалы для подготовления к IELTS.
                    </p>
                </div>
                <img class="home-img" src="image/icons/hi.svg" alt="com" />
        </section>
        <section class="services">
                <h1 class="services-title">Чем мы можем помочь вам?</h1>
                <div class="service-cards">
                    <div class="service-card">
                        <img class="service-img" src="image/Colleg.JPG" alt="Помощь при поступлении" />
                        <h2 class="service-title">Помощь при поступлении</h2>
                        <p class="service-text">Вы можете оставлять свою информацию про поступления, как и куда можно будет поступить. А также, если у вас есть ответы на экзамены, вы можете поделиться именно здесь.</p>
                    </div>
                    <div class="service-card">
                        <img class="service-img" src="image/Comit.JPG" alt="Общение с другими людьми" />
                        <h2 class="service-title">Общение с другими людьми</h2>
                        <p class="service-text">С помощью общения с другими людьми, вы можете узнавать для себя очень много нового. Если у вас нет друзей, подходящих для вас, то вы можете найти их здесь. Главное соблюдайте приличие и никого не оскорбляйте!</p>
                    </div>
                    <div class="service-card">
                        <img class="service-img" src="image/learn.JPG" alt="Поступления в колледжи" />
                        <h2 class="service-title">Поступления в колледжи</h2>
                        <p class="service-text">Помимо студентов, здесь могут быть ученики из разных школ. Тут вам смогут помочь и с поступлением в колледж. Главное соблюдайте субординацию и никого не оскорбляйте!</p>
                    </div>
                </div>
        </section>
        <section class="why-us">
            <h1 class="why-us-title">Почему именно мы?</h1>
            <div class="content">
                <div class="item">
                    <h2 class="item-title">Способ связи</h2>
                    <p class="item-text">Способ связи с учителями будет в Zoom.</p>
                </div>
                <div class="item">
                    <h2 class="item-title">Учителя</h2>
                    <p class="item-text">У нас самые лучшие учителя, которые смогут вам помочь чем смогут.</p>
                </div>
                <div class="item">
                    <h2 class="item-title">Помощь 24/7</h2>
                    <p class="item-text">Мы готовы вам помогать хоть даже ночью!</p>
                </div>
            </div>
            <div class="image">
                <img src="image/Enot.png" alt="Енот" />
            </div>
        </section>
        <section class="our-users">
            <h1 class="our-users_title">Наши пользователи</h1>
            <div class="content-our">
                <div class="item">
                    <img class="item-img" src="image/chart.png" alt="График" />
                    <h2 class="item-text-desc">199%</h2>
                    <p class="item-text-decor">Найдёте ответы на все ваши вопросы</p>
                </div>
                <div class="item">
                    <img class="item-img" src="image/laptop.png" alt="Ноутбук" />
                    <h2 class="item-text-desc">200%</h2>
                    <p class="item-text-decor"> Наши учителя помогут вам</p>
                </div>
                <div class="item">
                    <img class="item-img" src="image/house.png" alt="Дом" />
                    <h2 class="item-text-desc">200%</h2>
                    <p class="item-text-decor">Найдёте себе новых друзей</p>
                </div>
            </div>
        </section>
        <section class="news">
            <div class="card">
                <div class="image-box">
                    <img src="image/Earth.jpg" alt="земля" />
                  </div>
                  <div class="content-news">
                    <h2 class="news-card">Последние новости</h2>
                    <br />
                    <p class="news-card_text">Мы создали проекта SDCT расшифруется как Student chat. 
                      Вскоре мы еще создадим сайт где вы можете узнавать,как же можно поступить в институты, колледжи, вузы и лицеи. И это все абсолютно бесплатно!
                      Так же если вы уже поступили и хотите помочь другим с этим,то спешим вас обрадовать вы можете сделать это именно у нас, вы можете вскоре создавать свои группы, еще можете так же проводить свои уроки.
                      Например: английский, немецкий или математику. 
                      Но если вы не сможете найти ту информацию которая вам нужна, то не спешите уходить от нас.
                      У нас для этого есть учителя которые могут помочь вам с поступлением или с подготовкой предстоящими экзаменами.
                      Помимо все этого, вы на сайте сможете найти себе много новых друзей с других стран и городов.
                      Узнавать последние новости про свои учреждение и наших обновлениях в дальнейшем.
                      Так что подписывайтесь на нас и следите за последними новостями!</p>
                    </div>
                  </div>
        </section>
    </main>
  )
}

export default Main
