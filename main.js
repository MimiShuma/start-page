let url = `https://newsapi.org/v2/everything?domains=wsj.com&apiKey=5adcccd033c8481b9920a3197aa41553`;

fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        // console.log(data);
        let listData = "";
        for (const news of data.articles) {
            listData += `<li>${news.title}</li>`;
        }
        const ulOfList = document.querySelector("#news-list ul");
        // console.log(ulOfList);
        ulOfList.innerHTML = listData;
    })
    .catch(error => console.error('Error:', error));
