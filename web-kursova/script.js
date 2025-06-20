$(document).ready(function() {
    let slideIndex = 0;
    const slides = $("#slider img");

    function showSlide() {
        slides.hide();
        slides.eq(slideIndex).fadeIn(600);
    }

    function nextSlide() {
        slideIndex = (slideIndex + 1) % slides.length;
        showSlide();
    }

    showSlide();
    setInterval(nextSlide, 3000);

    const news = [
        "МОН оголосило рейтинг університетів України",
        "Вступна кампанія 2025 стартує у липні",
        "Новий закон про вищу освіту набрав чинності",
        "Онлайн-курси стають все популярнішими",
        "Випускники складають ЗНО з математики",
        "Українські ВНЗ увійшли в топ-1000 світу",
        "Відкрито нову лабораторію кібербезпеки",
        "Університети переходять на гібридне навчання",
        "Підписано угоду з європейськими партнерами",
        "День відкритих дверей у столичних ВНЗ"
    ];

    news.forEach(function(item) {
        $(".news-list").append(
            `<div class="news-item">
                <h5>${item}</h5>
                <p>Детальніше про цю новину можна прочитати на офіційному сайті.</p>
            </div>`
        );
    });
});
