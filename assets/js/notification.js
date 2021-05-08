(() => {
    const parentElem = document.body,
        card = document.createElement('div'),
        cardBody = document.createElement('div'),
        imageHolder = document.createElement('div'),
        cardImage = document.createElement('img'),
        cardTitle = document.createElement('h4'),
        cardText = document.createElement('p');

    const cardStyle = {
        "width": "260px",
        "font-family": "Poppins",
        "padding": "1rem",
        "box-shadow": "0px 15px 80px -3px rgba(0, 0, 0, 0.25)",
        "border-radius": "20px",
        "position": "fixed",
        "bottom": "20px",
        "right": "20px",
        "z-index": "99999",
        "background-color": "#ffffff"
    }

    const imageHolderStyle = {
        "background-color": "#EEEDFF",
        "padding": " 2rem",
        "border-radius": "10px",
        "display": "flex",
        "justify-content": "center",
        "align-items": "center"
    }

    const cardTitleStyle = {
        "margin-top": "1.33rem",
        "font-size": "16px",
        "margin-bottom": 0,
        "color": "#6C63FF",
        "text-transform": "capitalize !important"
    }
    const cardTextStyle = {
        "font-size": "11px",
        "color": "#716E6E"
    }

    const cardImageStyle = {
        "width": "100%",
        "height": "auto"
    }

    Object.assign(card.style, cardStyle);
    Object.assign(imageHolder.style, imageHolderStyle);
    Object.assign(cardTitle.style, cardTitleStyle);
    Object.assign(cardText.style, cardTextStyle);
    Object.assign(cardImage.style, cardImageStyle);



    card.appendChild(cardBody);
    cardBody.appendChild(imageHolder);
    imageHolder.appendChild(cardImage);
    cardImage.setAttribute("src", "assets/img/undraw_Playful_cat_re_bxiu.svg");
    cardBody.appendChild(cardTitle);

    cardTitle.innerText = "A New Website is on the Way!";
    cardBody.appendChild(cardText);
    cardText.innerText = `My work has changed since the site was created almost ${new Date().getFullYear() - 2019} years ago. I have learnt a lot of new stuff in this timespan and currently working on the site to better reflect my life, current works and ambitions`

    parentElem.appendChild(card)
})();
