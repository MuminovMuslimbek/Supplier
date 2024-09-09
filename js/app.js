document.addEventListener('DOMContentLoaded', function() {
    const toggleLangBtn = document.querySelector('button');
    const textElements = document.querySelectorAll('.navigatia-text h1, .navigatia-text p');

    const translations = {
        'Поставщик Дальнего Востока': 'Поставщик Дальнего Востока',
        'Наши клиенты получают полный спектр услуг по работе с Китаем. Начиная с подбора производителя заканчивая доставкой товара до двери. Настолько прозрачных сделок с Китаем вы еще не осуществляли.': 'Our clients receive a full range of services for working with China, from finding manufacturers to delivering products to your door.',
        'Узнать больше': 'Learn More',
        'Поиск производителей по товару': 'Product Manufacturer Search',
        'Поиск конкретного производителя': 'Specific Manufacturer Search',
        'Доставка образцов товаров': 'Sample Delivery',
        'Почему с нами выгоднее?': 'Why Choose Us?',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt ut.': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.'
    };

    toggleLangBtn.addEventListener('click', () => {
        textElements.forEach(el => {
            el.textContent = translations[el.textContent] || el.textContent;
        });
        toggleLangBtn.textContent = toggleLangBtn.textContent === 'Узнать больше' ? 'Узнать больше' : 'Узнать больше';
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    const categoryBoxes = document.querySelectorAll('.category-box');
    categoryBoxes.forEach(box => {
        box.addEventListener('mouseover', () => {
            box.classList.add('hovered');
        });
        box.addEventListener('mouseout', () => {
            box.classList.remove('hovered');
        });
    });

    const lazyImages = document.querySelectorAll('img');
    lazyImages.forEach(img => {
        img.loading = 'lazy';
    });

    const profitableCards = document.querySelectorAll('.profitable-bottom-card h3');
    profitableCards.forEach(card => {
        card.addEventListener('click', () => {
            card.nextElementSibling.classList.toggle('active');
        });
    });



    const toggleDarkModeBtn = document.createElement('button');
    toggleDarkModeBtn.textContent = 'Toggle Dark Mode';
    toggleDarkModeBtn.id = 'darkModeToggle';
    document.body.appendChild(toggleDarkModeBtn);

    toggleDarkModeBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');

        const headings = document.querySelectorAll('h1, h2, h3');
        const paragraphs = document.querySelectorAll('p');
        const categoryContainer = document.querySelector('.category__container');
        const navButton = document.querySelector('.navigatia-text > button');

        if (document.body.classList.contains('dark-mode')) {
            document.body.style.backgroundColor = '#000';
            headings.forEach(heading => heading.style.color = '#fafafa');
            paragraphs.forEach(p => p.style.color = '#fafafa');
            categoryContainer.style.boxShadow = '-3px 2px 15px 1px rgba(255, 255, 255, 0.364)';
            navButton.style.color = '#fafafa';
            navButton.style.borderBottomColor = '#FFCE50';
            toggleDarkModeBtn.style.backgroundColor = '#fff';
            toggleDarkModeBtn.style.color = '#000';
        } else {
            document.body.style.backgroundColor = '#fff';
            headings.forEach(heading => heading.style.color = '#363738');
            paragraphs.forEach(p => p.style.color = '#6B6B6C');
            categoryContainer.style.boxShadow = '-3px 2px 15px 1px rgba(0, 0, 0, 0.364)';
            navButton.style.color = '#6B6B6C';
            navButton.style.borderBottomColor = '#FFCE50';
            toggleDarkModeBtn.style.backgroundColor = '#333';
            toggleDarkModeBtn.style.color = '#fff';
        }
    });
    toggleLangBtn.addEventListener('click', () => {
        const navigatiaText = document.querySelector('.navigatia-text');

        let info = document.querySelector('.navigatia-text p.info-text');

        if (info) {
            navigatiaText.removeChild(info);
        } else {
            info = document.createElement('p');
            info.textContent = 'Это дополнительная информация о наших услугах.';
            info.classList.add('info-text');
            navigatiaText.appendChild(info);
        }
    });

});